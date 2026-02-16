/* RandomiseMe! – Done & History edition */

document.addEventListener("DOMContentLoaded", function () {

  // Mobile: reduce accidental zoom gestures
  document.addEventListener("gesturestart", (e) => e.preventDefault());
  document.addEventListener("dblclick", (e) => e.preventDefault());

  const STORAGE_KEYS = {
    projects: "projects",
    done: "doneProjects",
    history: "history"
  };

  const MAX_HISTORY = 50;

  // Cache DOM nodes (avoids repeated lookups)
  const DOM = {
    projectList: document.getElementById("projectList"),
    doneList: document.getElementById("doneList"),
    historyList: document.getElementById("historyList"),
    doneCount: document.getElementById("doneCount"),
    historyCount: document.getElementById("historyCount"),
    result: document.getElementById("result"),
    resultActions: document.getElementById("resultActions"),
    randomBtn: document.getElementById("randomBtn"),
    langSelect: document.getElementById("langSelect"),
  };

  // ---------- state ----------

  let projects = loadArray(STORAGE_KEYS.projects);
  let doneProjects = loadArray(STORAGE_KEYS.done);
  let history = loadArray(STORAGE_KEYS.history);

  // Fast membership checks (case-insensitive)
  let projectsSet = new Set(projects.map(p => String(p).toLowerCase()));
  let doneSet = new Set(doneProjects.map(x => (x && x.name ? String(x.name).toLowerCase() : "")));

  // Keep a single undo action (simple + predictable)
  let lastUndo = null;
  let toastTimer = null;

  // Last picked project name (for result action buttons)
  let lastPicked = null;

  // ---------- language select (English alphabetical order) ----------

  const LANG_META = {
    cs: { name: "Čeština", flag: "🇨🇿" },
    da: { name: "Dansk", flag: "🇩🇰" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    el: { name: "Ελληνικά", flag: "🇬🇷" },
    en: { name: "English", flag: "🇬🇧" },
    es: { name: "Español", flag: "🇪🇸" },
    fi: { name: "Suomi", flag: "🇫🇮" },
    fr: { name: "Français", flag: "🇫🇷" },
    it: { name: "Italiano", flag: "🇮🇹" },
    nb: { name: "Bokmål", flag: "🇳🇴" },
    nl: { name: "Nederlands", flag: "🇳🇱" },
    pl: { name: "Polski", flag: "🇵🇱" },
    pt: { name: "Português", flag: "🇵🇹" },
    ru: { name: "Русский", flag: "🇷🇺" },
    sv: { name: "Svenska", flag: "🇸🇪" },
    tr: { name: "Türkçe", flag: "🇹🇷" },
    uk: { name: "Українська", flag: "🇺🇦" }
  };

  function buildLanguageSelectEnglishAlphabetical() {
    const selectEl = DOM.langSelect;
    if (!selectEl || !window.i18n) return;

    const available =
      (typeof window.i18n.available === "function") ? window.i18n.available() : [];

    const known = available
      .filter((code) => LANG_META[code])
      .map((code) => ({ code, ...LANG_META[code] }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

    const unknown = available
      .filter((code) => !LANG_META[code])
      .map((code) => ({ code, name: code.toUpperCase(), flag: "🏳️" }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

    selectEl.innerHTML = "";
    for (const it of [...known, ...unknown]) {
      const opt = document.createElement("option");
      opt.value = it.code;
      opt.textContent = `${it.flag} ${it.name}`;
      selectEl.appendChild(opt);
    }

    const current = (typeof window.i18n.getLang === "function") ? window.i18n.getLang() : "en";
    selectEl.value = current;
  }

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

  // Defer storage writes so UI updates feel instant on mobile.
  let saveQueued = false;
  function scheduleSave() {
    if (saveQueued) return;
    saveQueued = true;

    const run = () => {
      saveQueued = false;
      saveAll();
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(run, { timeout: 600 });
    } else {
      setTimeout(run, 0);
    }
  }

  function flushSaveNow() {
    if (!saveQueued) return;
    saveQueued = false;
    saveAll();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) flushSaveNow();
  });

  window.addEventListener("beforeunload", () => {
    flushSaveNow();
  });

  function rebuildSets() {
    projectsSet = new Set(projects.map(p => String(p).toLowerCase()));
    doneSet = new Set(doneProjects.map(x => (x && x.name ? String(x.name).toLowerCase() : "")));
  }

  function escapeHTML(str) {
    const s = String(str ?? "");
    return s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
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
    scheduleSave();
    scheduleRender("history");
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

    rebuildSets();
    scheduleSave();
    scheduleRender("projects");
    scheduleRender("done");
    scheduleRender("history");
  }

  // ---------- core actions ----------

  function addProject(nameRaw) {
    const name = normalizeName(nameRaw);
    if (!name) return;
    const key = name.toLowerCase();

    // If it exists in Done, restore it instead of duplicating
    if (doneSet.has(key)) {
      const doneIdx = findIndexCaseInsensitive(doneProjects, name);
      if (doneIdx !== -1) {
        const item = doneProjects.splice(doneIdx, 1)[0];
        doneSet.delete(key);
        if (!projectsSet.has(key)) {
          projects.push(item.name);
          projectsSet.add(key);
        }
        scheduleSave();
        scheduleRender("projects");
        scheduleRender("done");
        pushHistory("restore", item.name);
        showToast(t("toast.restored", { name: item.name }));
        return;
      }
    }

    // Avoid duplicates in active list
    if (!projectsSet.has(key)) {
      projects.push(name);
      projectsSet.add(key);
      scheduleSave();
      scheduleRender("projects");
    }
  }

  function deleteActive(index) {
    const name = projects[index];
    if (!name) return;

    projectsSet.delete(String(name).toLowerCase());

    projects.splice(index, 1);
    scheduleSave();
    scheduleRender("projects");

    setUndo({ type: "deleteActive", name, index });
    pushHistory("delete", name);
    showToast(t("toast.deleted", { name }), true);
  }

  function markDone(index) {
    const name = projects[index];
    if (!name) return;

    const key = String(name).toLowerCase();
    projectsSet.delete(key);

    projects.splice(index, 1);
    const item = { name, doneAt: new Date().toISOString() };
    doneProjects.unshift(item);
    doneSet.add(key);

    scheduleSave();
    scheduleRender("projects");
    scheduleRender("done");

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

    const key = String(item.name).toLowerCase();
    doneSet.delete(key);

    doneProjects.splice(index, 1);

    if (!projectsSet.has(key)) {
      projects.push(item.name);
      projectsSet.add(key);
    }

    scheduleSave();
    scheduleRender("projects");
    scheduleRender("done");

    setUndo({ type: "restoreFromDone", name: item.name, fromIndex: index, item });
    pushHistory("restore", item.name);
    showToast(t("toast.restored", { name: item.name }), true);
  }

  function deleteDone(index) {
    const item = doneProjects[index];
    if (!item || !item.name) return;

    doneSet.delete(String(item.name).toLowerCase());

    doneProjects.splice(index, 1);
    scheduleSave();
    scheduleRender("done");

    setUndo({ type: "deleteDone", index, item });
    pushHistory("delete", item.name);
    showToast(t("toast.deleted", { name: item.name }), true);
  }

  function clearActive() {
    const confirmDelete = confirm(t("confirm.clear"));
    if (!confirmDelete) return;

    const snapshot = [...projects];
    projects = [];
    projectsSet.clear();

    scheduleSave();
    scheduleRender("projects");

    if (DOM.result) DOM.result.innerHTML = "";

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
    doneSet.clear();

    scheduleSave();
    scheduleRender("done");

    setUndo({ type: "clearDone", snapshot });
    showToast(t("toast.cleared_done"), true);
  }

  function clearHistory() {
    if (history.length === 0) return;

    const ok = confirm(t("confirm.clear_history"));
    if (!ok) return;

    const snapshot = [...history];
    history = [];

    scheduleSave();
    scheduleRender("history");

    setUndo({ type: "clearHistory", snapshot });
    showToast(t("toast.cleared_history"), true);
  }

  // ---------- rendering ----------

  // Batch renders to next animation frame (prevents repeated DOM rebuilds per action)
  const renderFlags = { projects: false, done: false, history: false, resultActions: false };
  let renderQueued = false;
  function scheduleRender(which) {
    if (which && renderFlags.hasOwnProperty(which)) renderFlags[which] = true;
    if (!renderQueued) {
      renderQueued = true;
      requestAnimationFrame(flushRender);
    }
  }

  function flushRender() {
    renderQueued = false;

    if (renderFlags.projects) {
      renderFlags.projects = false;
      renderProjects();
    }

    if (renderFlags.done) {
      renderFlags.done = false;
      renderDone();
    }

    if (renderFlags.history) {
      renderFlags.history = false;
      renderHistory();
    }

    if (renderFlags.resultActions) {
      renderFlags.resultActions = false;
      updateResultActions();
    }
  }

  function renderProjects() {
    const list = DOM.projectList;
    if (!list) return;

    const ariaDone = escapeHTML(t("aria.done"));
    const ariaDelete = escapeHTML(t("aria.delete"));

    let html = "";
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      html +=
        `<li class="item">` +
          `<span class="item-text">${escapeHTML(project)}</span>` +
          `<div class="item-actions">` +
            `<button class="icon-btn" data-action="done" data-index="${i}" title="${ariaDone}" aria-label="${ariaDone}">✅</button>` +
            `<button class="icon-btn" data-action="delete" data-index="${i}" title="${ariaDelete}" aria-label="${ariaDelete}">❌</button>` +
          `</div>` +
        `</li>`;
    }
    list.innerHTML = html;
  }

  function renderDone() {
    const list = DOM.doneList;
    if (DOM.doneCount) DOM.doneCount.textContent = String(doneProjects.length);
    if (!list) return;

    const ariaRestore = escapeHTML(t("aria.restore"));
    const ariaDelete = escapeHTML(t("aria.delete"));

    let html = "";
    for (let i = 0; i < doneProjects.length; i++) {
      const item = doneProjects[i];
      const meta = item && item.doneAt ? fmtTime(item.doneAt) : "";
      html +=
        `<li class="item">` +
          `<span class="item-text">${escapeHTML(item.name)}<span class="item-meta">${escapeHTML(meta)}</span></span>` +
          `<div class="item-actions">` +
            `<button class="icon-btn" data-action="restore" data-index="${i}" title="${ariaRestore}" aria-label="${ariaRestore}">↩️</button>` +
            `<button class="icon-btn" data-action="delete" data-index="${i}" title="${ariaDelete}" aria-label="${ariaDelete}">❌</button>` +
          `</div>` +
        `</li>`;
    }
    list.innerHTML = html;
  }

  function renderHistory() {
    const list = DOM.historyList;
    if (DOM.historyCount) DOM.historyCount.textContent = String(history.length);
    if (!list) return;

    let html = "";
    for (let i = 0; i < history.length; i++) {
      const h = history[i];
      const actionLabel = t("history." + h.type);
      const meta = h.at ? fmtTime(h.at) : "";
      html +=
        `<li class="item">` +
          `<span class="item-text">${escapeHTML(actionLabel)}: ${escapeHTML(h.name)}<span class="item-meta">${escapeHTML(meta)}</span></span>` +
        `</li>`;
    }
    list.innerHTML = html;
  }

  function updateResultActions() {
    if (!DOM.resultActions) return;
    DOM.resultActions.hidden = !lastPicked;
  }

  // ---------- randomiser ----------

  function roll() {
    if (projects.length === 0) {
      alert(t("alert.no_projects"));
      return;
    }

    const resultDiv = DOM.result;
    const button = DOM.randomBtn;

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

          const key = trimmed.toLowerCase();

          // if in done → restore
          if (doneSet.has(key)) {
            const doneIdx = findIndexCaseInsensitive(doneProjects, trimmed);
            if (doneIdx !== -1) {
              const item = doneProjects.splice(doneIdx, 1)[0];
              doneSet.delete(key);
              if (!projectsSet.has(key)) {
                projects.push(item.name);
                projectsSet.add(key);
              }
              restored++;
              return;
            }
          }

          if (!projectsSet.has(key)) {
            projects.push(trimmed);
            projectsSet.add(key);
            added++;
          }
        });

        scheduleSave();
        scheduleRender("projects");
        scheduleRender("done");

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

  // Event delegation (much faster than attaching listeners per row)
  if (DOM.projectList) {
    DOM.projectList.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      const index = Number(btn.dataset.index);
      if (!Number.isFinite(index)) return;

      if (action === "done") markDone(index);
      if (action === "delete") deleteActive(index);
    });
  }

  if (DOM.doneList) {
    DOM.doneList.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const action = btn.dataset.action;
      const index = Number(btn.dataset.index);
      if (!Number.isFinite(index)) return;

      if (action === "restore") restoreFromDone(index);
      if (action === "delete") deleteDone(index);
    });
  }

  // help modal
  const modal = document.getElementById("helpModal");
  const helpBtn = document.getElementById("helpBtn");
  const closeBtn = document.querySelector(".close-btn");

  function openModal() {
    if (!modal) return;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    // best-effort focus
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  if (helpBtn && modal && closeBtn) {
    helpBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeModal();
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
  buildLanguageSelectEnglishAlphabetical();

  // Re-render lists on language change (button aria labels, history verbs)
  if (DOM.langSelect) {
    DOM.langSelect.addEventListener("change", () => {
      scheduleRender("projects");
      scheduleRender("done");
      scheduleRender("history");
    });
  }

  scheduleRender("projects");
  scheduleRender("done");
  scheduleRender("history");
  scheduleRender("resultActions");
});
