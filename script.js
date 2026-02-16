document.addEventListener("DOMContentLoaded", function () {

  // i18n init
  if (window.i18n && typeof window.i18n.init === "function") {
    window.i18n.init();
  }
  const t = (window.i18n && window.i18n.t) ? window.i18n.t : (k => k);

  // language selector
  const langSelect = document.getElementById("langSelect");
  if (langSelect && window.i18n && typeof window.i18n.setLang === "function") {
    langSelect.value = window.i18n.getLang();
    langSelect.addEventListener("change", (e) => {
      window.i18n.setLang(e.target.value);
    });
  }

  // storage
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function addProject() {
    const input = document.getElementById("projectInput");
    const name = input.value.trim();

    if (name === "") return;

    if (!projects.some(p => p.toLowerCase() === name.toLowerCase())) {
      projects.push(name);
      saveProjects();
      renderProjects();
    }

    input.value = "";
    input.focus();
  }

  window.deleteProject = function (index) {
    projects.splice(index, 1);
    saveProjects();
    renderProjects();
  };

  window.clearAll = function () {
    const confirmDelete = confirm(t("confirmClearAll"));
    if (!confirmDelete) return;

    projects = [];
    localStorage.removeItem("projects");
    renderProjects();
    document.getElementById("result").innerHTML = "";
  };

  function renderProjects() {
    const list = document.getElementById("projectList");
    list.innerHTML = "";

    projects.forEach((project, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${escapeHtml(project)}
        <button onclick="deleteProject(${index})" aria-label="Delete">❌</button>
      `;
      list.appendChild(li);
    });
  }

  // randomiser
  window.roll = function () {
    if (projects.length === 0) {
      alert(t("alertNoProjects"));
      return;
    }

    const resultDiv = document.getElementById("result");
    const button = document.getElementById("randomBtn");

    button.classList.add("rolling");

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      resultDiv.textContent = projects[randomIndex];
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      button.classList.remove("rolling");

      const finalIndex = Math.floor(Math.random() * projects.length);

      let exclamations = t("exclamations");
      if (!Array.isArray(exclamations) || exclamations.length === 0) {
        exclamations = ["Et voilà:"]; // safe fallback
      }

      const randomExclamation =
        exclamations[Math.floor(Math.random() * exclamations.length)];

      // Reset glow animation only
      resultDiv.classList.remove("winner-glow");
      void resultDiv.offsetWidth;

      resultDiv.innerHTML =
        escapeHtml(String(randomExclamation)) +
        " <span class='result-highlight'>" +
        escapeHtml(projects[finalIndex]) +
        "</span>";

      resultDiv.classList.add("winner-glow");

    }, 2000);
  };

  // export list
  const exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      if (!projects.length) {
        alert(t("alertExportEmpty"));
        return;
      }
      const content = projects.join("\n");
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "randomiseme-projects.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      // optional feedback
      // alert(t("alertExportDone"));
    });
  }

  // import data
  document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {

      const content = e.target.result;
      const entries = String(content).split(/[\r\n,;\t]+/);

      let added = 0;

      entries.forEach(entry => {
        let trimmed = String(entry).trim();
        trimmed = trimmed.replace(/^"(.*)"$/, '$1');

        if (
          trimmed !== "" &&
          !projects.some(p => p.toLowerCase() === trimmed.toLowerCase())
        ) {
          projects.push(trimmed);
          added++;
        }
      });

      saveProjects();
      renderProjects();

      alert(t("alertImportFinished", { count: added }));
    };

    reader.readAsText(file);
  });

  // activate add on enter
  document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addProject();
  });

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
      }
    });
  }

  // Service Worker (PWA) + reload helper
  let swReg = null;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then((reg) => {
      swReg = reg;
    }).catch(() => {
      // ignore
    });
  }

  const reloadBtn = document.getElementById("reloadBtn");
  if (reloadBtn) {
    reloadBtn.addEventListener("click", function () {
      // Prefer SW update flow
      if (swReg && swReg.waiting) {
        swReg.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      // cache-bust reload as fallback
      const base = window.location.href.split("?")[0].split("#")[0];
      window.location.href = base + "?v=" + Date.now();
    });
  }

  // initial render
  renderProjects();

  // helpers
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
