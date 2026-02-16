/* RandomiseMe! – Done & History edition */

document.addEventListener("DOMContentLoaded", function () {

  const STORAGE_KEYS = {
    projects: "projects",
    done: "doneProjects",
    history: "history"
  };

  const MAX_HISTORY = 50;

  // ---------- state ----------

  let projects = loadArray(STORAGE_KEYS.projects);
  let doneProjects = loadArray(STORAGE_KEYS.done);
  let history = loadArray(STORAGE_KEYS.history);

  // Keep a single undo action (simple + predictable)
  let lastUndo = null;
  let toastTimer = null;

  // Last picked project name (for result action buttons)
  let lastPicked = null;

  // ---------- helpers ----------

  function loadArray(key) {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveAll() {
    localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(projects));
    localStorage.setItem(STORAGE_KEYS.done, JSON.stringify(doneProjects));
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
  }

  function normalizeName(name) {
    return (name || "").trim();
  }

  function findIndexCaseInsensitive(arr, name) {
    const target = (name || "").toLowerCase();
    return arr.findIndex((x) => {
      const v = (typeof x === "string") ? x : (x && x.name ? x.name : "");
      return v.toLowerCase() === target;
    });
  }

  function fmtTime(iso) {
    try {
      const d = new Date(iso);
      // Short, local, friendly
      return d.toLocaleString(undefined, { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  }

  function t(key, vars) {
    return (window.i18n && typeof window.i18n.t === "function")
      ? window.i18n.t(key, vars)
      : key;
  }

  function pushHistory(type, name) {
    history.unshift({ type, name, at: new Date().toISOString() });
    if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
    saveAll();
    renderHistory();
  }

  async function copyToClipboard(text) {
    const value = String(text || "");
    if (!value.trim()) {
      alert(t("alert.nothing_to_copy"));
      return false;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast(t("toast.copied"));
      return true;
    } catch {
      return false;
    }
  }

  // ---------- toast / undo ----------

  function clearToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.style.display = "none";
    toast.innerHTML = "";
    if (toastTimer) {
      clearTimeout(toastTimer);
      toastTimer = null;
    }
  }

  function showToast(message, withUndo = false) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    clearToast();

    const wrap = document.createElement("div");
    wrap.className = "toast-inner";

    const msg = document.createElement("div");
    msg.className = "toast-message";
    msg.textContent = message;

    wrap.appendChild(msg);

    if (withUndo && lastUndo) {
      const btn = document.createElement("button");
      btn.textContent = t("btn.undo");
      btn.setAttribute("aria-label", t("aria.undo"));
      btn.addEventListener("click", () => {
        performUndo();
        clearToast();
      });
      wrap.appendChild(btn);
    }

    toast.appendChild(wrap);
    toast.style.display = "block";

    toastTimer = setTimeout(() => {
      clearToast();
      lastUndo = null;
    }, 8500);
  }

  function setUndo(action) {
    lastUndo = action;
  }

  function performUndo() {
    if (!lastUndo) return;

    const a = lastUndo;
    lastUndo = null;

    if (a.type === "deleteActive") {
      projects.splice(a.index, 0, a.name);
      pushHistory("restore", a.name);
    }

    if (a.type === "deleteDone") {
      doneProjects.splice(a.index, 0, a.item);
      pushHistory("restore", a.item.name);
    }

    if (a.type === "markDone") {
      // move back from done → projects
      const di = findIndexCaseInsensitive(doneProjects, a.name);
      if (di !== -1) doneProjects.splice(di, 1);
      projects.splice(a.fromIndex, 0, a.name);
      pushHistory("restore", a.name);
    }

    if (a.type === "restoreFromDone") {
      const pi = findIndexCaseInsensitive(projects, a.name);
      if (pi !== -1) projects.splice(pi, 1);
      doneProjects.splice(a.fromIndex, 0, a.item);
      pushHistory("restore", a.name);
    }

    if (a.type === "clearActive") {
      projects = a.snapshot;
      // result stays as-is; user can clear manually
    }

    if (a.type === "clearDone") {
      doneProjects = a.snapshot;
    }

    if (a.type === "clearHistory") {
      history = a.snapshot;
    }

    saveAll();
    renderProjects();
    renderDone();
    renderHistory();
  }

  // ---------- core actions ----------

  function addProject(nameRaw) {
    const name = normalizeName(nameRaw);
    if (!name) return;

    // If it exists in Done, restore it instead of duplicating
    const doneIdx = findIndexCaseInsensitive(doneProjects, name);
    if (doneIdx !== -1) {
      const item = doneProjects.splice(doneIdx, 1)[0];
      if (!projects.some(p => p.toLowerCase() === name.toLowerCase())) {
        projects.push(item.name);
      }
      saveAll();
      renderProjects();
      renderDone();
      pushHistory("restore", item.name);
      showToast(t("toast.restored", { name: item.name }));
      return;
    }

    // Avoid duplicates in active list
    if (!projects.some(p => p.toLowerCase() === name.toLowerCase())) {
      projects.push(name);
      saveAll();
      renderProjects();
    }
  }

  function deleteActive(index) {
    const name = projects[index];
    if (!name) return;

    projects.splice(index, 1);
    saveAll();
    renderProjects();

    setUndo({ type: "deleteActive", name, index });
    pushHistory("delete", name);
    showToast(t("toast.deleted", { name }), true);
  }

  function markDone(index) {
    const name = projects[index];
    if (!name) return;

    projects.splice(index, 1);
    const item = { name, doneAt: new Date().toISOString() };
    doneProjects.unshift(item);

    saveAll();
    renderProjects();
    renderDone();

    setUndo({ type: "markDone", name, fromIndex: index });
    pushHistory("done", name);
    showToast(t("toast.done", { name }), true);

    // If the last picked item was marked done, hide the quick actions
    if (lastPicked && lastPicked.toLowerCase() === name.toLowerCase()) {
      lastPicked = null;
      updateResultActions();
    }
  }

  function restoreFromDone(index) {
    const item = doneProjects[index];
    if (!item || !item.name) return;

    doneProjects.splice(index, 1);

    if (!projects.some(p => p.toLowerCase() === item.name.toLowerCase())) {
      projects.push(item.name);
    }

    saveAll();
    renderProjects();
    renderDone();

    setUndo({ type: "restoreFromDone", name: item.name, fromIndex: index, item });
    pushHistory("restore", item.name);
    showToast(t("toast.restored", { name: item.name }), true);
  }

  function deleteDone(index) {
    const item = doneProjects[index];
    if (!item || !item.name) return;

    doneProjects.splice(index, 1);
    saveAll();
    renderDone();

    setUndo({ type: "deleteDone", index, item });
    pushHistory("delete", item.name);
    showToast(t("toast.deleted", { name: item.name }), true);
  }

  function clearActive() {
    const confirmDelete = confirm(t("confirm.clear"));
    if (!confirmDelete) return;

    const snapshot = [...projects];
    projects = [];

    saveAll();
    renderProjects();

    const resultDiv = document.getElementById("result");
    if (resultDiv) resultDiv.innerHTML = "";

    lastPicked = null;
    updateResultActions();

    setUndo({ type: "clearActive", snapshot });
    showToast(t("toast.cleared_active"), true);
  }

  function clearDone() {
    if (doneProjects.length === 0) return;

    const ok = confirm(t("confirm.clear_done"));
    if (!ok) return;

    const snapshot = [...doneProjects];
    doneProjects = [];

    saveAll();
    renderDone();

    setUndo({ type: "clearDone", snapshot });
    showToast(t("toast.cleared_done"), true);
  }

  function clearHistory() {
    if (history.length === 0) return;

    const ok = confirm(t("confirm.clear_history"));
    if (!ok) return;

    const snapshot = [...history];
    history = [];

    saveAll();
    renderHistory();

    setUndo({ type: "clearHistory", snapshot });
    showToast(t("toast.cleared_history"), true);
  }

  // ---------- rendering ----------

  function renderProjects() {
    const list = document.getElementById("projectList");
    if (!list) return;

    list.innerHTML = "";

    projects.forEach((project, index) => {
      const li = document.createElement("li");
      li.className = "item";

      const text = document.createElement("span");
      text.className = "item-text";
      text.textContent = project;

      const actions = document.createElement("div");
      actions.className = "item-actions";

      const doneBtn = document.createElement("button");
      doneBtn.className = "icon-btn";
      doneBtn.textContent = "✅";
      doneBtn.title = t("aria.done");
      doneBtn.setAttribute("aria-label", t("aria.done"));
      doneBtn.addEventListener("click", () => markDone(index));

      const delBtn = document.createElement("button");
      delBtn.className = "icon-btn";
      delBtn.textContent = "❌";
      delBtn.title = t("aria.delete");
      delBtn.setAttribute("aria-label", t("aria.delete"));
      delBtn.addEventListener("click", () => deleteActive(index));

      actions.appendChild(doneBtn);
      actions.appendChild(delBtn);

      li.appendChild(text);
      li.appendChild(actions);
      list.appendChild(li);
    });
  }

  function renderDone() {
    const list = document.getElementById("doneList");
    const count = document.getElementById("doneCount");
    if (count) count.textContent = String(doneProjects.length);
    if (!list) return;

    list.innerHTML = "";

    doneProjects.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "item";

      const text = document.createElement("span");
      text.className = "item-text";
      text.textContent = item.name;

      const meta = document.createElement("span");
      meta.className = "item-meta";
      meta.textContent = item.doneAt ? fmtTime(item.doneAt) : "";
      text.appendChild(meta);

      const actions = document.createElement("div");
      actions.className = "item-actions";

      const restoreBtn = document.createElement("button");
      restoreBtn.className = "icon-btn";
      restoreBtn.textContent = "↩️";
      restoreBtn.title = t("aria.restore");
      restoreBtn.setAttribute("aria-label", t("aria.restore"));
      restoreBtn.addEventListener("click", () => restoreFromDone(index));

      const delBtn = document.createElement("button");
      delBtn.className = "icon-btn";
      delBtn.textContent = "❌";
      delBtn.title = t("aria.delete");
      delBtn.setAttribute("aria-label", t("aria.delete"));
      delBtn.addEventListener("click", () => deleteDone(index));

      actions.appendChild(restoreBtn);
      actions.appendChild(delBtn);

      li.appendChild(text);
      li.appendChild(actions);
      list.appendChild(li);
    });
  }

  function renderHistory() {
    const list = document.getElementById("historyList");
    const count = document.getElementById("historyCount");
    if (count) count.textContent = String(history.length);
    if (!list) return;

    list.innerHTML = "";

    history.forEach((h) => {
      const li = document.createElement("li");
      li.className = "item";

      const text = document.createElement("span");
      text.className = "item-text";

      const actionLabel = t("history." + h.type);
      text.textContent = `${actionLabel}: ${h.name}`;

      const meta = document.createElement("span");
      meta.className = "item-meta";
      meta.textContent = h.at ? fmtTime(h.at) : "";
      text.appendChild(meta);

      li.appendChild(text);
      list.appendChild(li);
    });
  }

  function updateResultActions() {
    const actions = document.getElementById("resultActions");
    if (!actions) return;
    actions.hidden = !lastPicked;
  }

  // ---------- randomiser ----------

  function roll() {
    if (projects.length === 0) {
      alert(t("alert.no_projects"));
      return;
    }

    const resultDiv = document.getElementById("result");
    const button = document.getElementById("randomBtn");

    if (!resultDiv || !button) return;

    button.classList.add("rolling");

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      resultDiv.textContent = projects[randomIndex];
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      button.classList.remove("rolling");

      const finalIndex = Math.floor(Math.random() * projects.length);
      lastPicked = projects[finalIndex];

      const exclamations = t("exclamations");
      const list = Array.isArray(exclamations) ? exclamations : ["Et voilà:"];
      const randomExclamation = list[Math.floor(Math.random() * list.length)];

      // Reset glow animation only
      resultDiv.classList.remove("winner-glow");
      void resultDiv.offsetWidth;

      // Only project name orange
      resultDiv.innerHTML =
        randomExclamation +
        " <span class='result-highlight'>" +
        lastPicked +
        "</span>";

      resultDiv.classList.add("winner-glow");

      pushHistory("roll", lastPicked);
      updateResultActions();

    }, 2000);
  }

  // ---------- wiring ----------

  const form = document.getElementById("projectForm");
  const input = document.getElementById("projectInput");
  const clearBtn = document.getElementById("clearBtn");
  const randomBtn = document.getElementById("randomBtn");
  const clearDoneBtn = document.getElementById("clearDoneBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const copyHistoryBtn = document.getElementById("copyHistoryBtn");
  const markPickedDoneBtn = document.getElementById("markPickedDoneBtn");
  const copyPickedBtn = document.getElementById("copyPickedBtn");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!input) return;
      const name = input.value;
      addProject(name);
      input.value = "";
      input.focus();
    });
  }

  if (clearBtn) clearBtn.addEventListener("click", clearActive);
  if (randomBtn) randomBtn.addEventListener("click", roll);
  if (clearDoneBtn) clearDoneBtn.addEventListener("click", clearDone);
  if (clearHistoryBtn) clearHistoryBtn.addEventListener("click", clearHistory);

  if (copyHistoryBtn) {
    copyHistoryBtn.addEventListener("click", () => {
      if (!history.length) {
        alert(t("alert.nothing_to_copy"));
        return;
      }
      const lines = history
        .slice(0, MAX_HISTORY)
        .map(h => `${fmtTime(h.at)} - ${t('history.' + h.type)}: ${h.name}`);
      copyToClipboard(lines.join("\n"));
    });
  }

  if (markPickedDoneBtn) {
    markPickedDoneBtn.addEventListener("click", () => {
      if (!lastPicked) return;
      const idx = findIndexCaseInsensitive(projects, lastPicked);
      if (idx === -1) return;
      markDone(idx);
    });
  }

  if (copyPickedBtn) {
    copyPickedBtn.addEventListener("click", () => {
      if (!lastPicked) {
        alert(t("alert.nothing_to_copy"));
        return;
      }
      copyToClipboard(lastPicked);
    });
  }

  // import projects from txt or csv
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        const entries = String(content || "").split(/[\r\n,;\t]+/);

        let added = 0;
        let restored = 0;

        entries.forEach((entry) => {
          let trimmed = normalizeName(entry);
          trimmed = trimmed.replace(/^"(.*)"$/, "$1");
          if (!trimmed) return;

          // if in done → restore
          const doneIdx = findIndexCaseInsensitive(doneProjects, trimmed);
          if (doneIdx !== -1) {
            const item = doneProjects.splice(doneIdx, 1)[0];
            if (!projects.some(p => p.toLowerCase() === item.name.toLowerCase())) {
              projects.push(item.name);
            }
            restored++;
            return;
          }

          if (!projects.some((p) => p.toLowerCase() === trimmed.toLowerCase())) {
            projects.push(trimmed);
            added++;
          }
        });

        saveAll();
        renderProjects();
        renderDone();

        const msg = t("alert.import_finished", { count: added });
        // Keep import alert simple; restoration is just a bonus
        const restoredMsg = restored > 0 ? "\n" + t("alert.import_restored", {count: restored}) : "";
        alert(msg + restoredMsg);
      };

      reader.readAsText(file);
      // allow importing the same file again
      event.target.value = "";
    });
  }

  // help modal
  const modal = document.getElementById("helpModal");
  const helpBtn = document.getElementById("helpBtn");
  const closeBtn = document.querySelector(".close-btn");

  if (helpBtn && modal && closeBtn) {
    helpBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
        clearToast();
      }
    });
  }

  // Reload app (helps iOS homescreen caching)
  const reloadBtn = document.getElementById("reloadBtn");
  if (reloadBtn) {
    reloadBtn.addEventListener("click", async function () {
      try {
        if ("serviceWorker" in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) await reg.update();
        }
      } catch {}

      const url = window.location.pathname + "?v=" + Date.now();
      window.location.href = url;
    });
  }

  // PWA: register service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  // small footer build date
  const bd = document.getElementById("buildDate");
  if (bd) {
    bd.textContent = " · " + new Date().toLocaleDateString(undefined, { year: "numeric", month: "2-digit", day: "2-digit" });
  }

  // initial render
  renderProjects();
  renderDone();
  renderHistory();
  updateResultActions();
});
