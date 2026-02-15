/* =========================================================
   Project: RandomiseMe!
   Author: Nico Siedler (git: ricodelsien)
   File: script.js
   Version: 0.3c
   Date: 2026-02-15
   Description:
   - Random project shuffler
   - Multi-language (DE / EN)
   - LocalStorage persistence
   - Modal support (HowTo)
   - Import support (.txt/.csv)
   ========================================================= */

const translations = {
  de: {
    flavour: "Erstickst Du an Deinen Projekten?<br>Dann sag ihnen: Alea iacta est!",
    inputPlaceholder: "Projekt eingeben",
    addBtn: "Hinzufügen",
    importLabel: "📂 Liste importieren (txt oder csv)",
    ufoTitle: "Meine UFOs:",
    clearBtn: "🗑 Alles löschen",
    rollBtn: "🎲 Würfeln!",
    helpBtn: "❓ Anleitung",
    helpTitle: "So benutzt du RandomiseMe",
    helpText:
      "1. Projekte manuell hinzufügen oder Liste importieren.<br><br>" +
      "2. Auf 'Würfeln!' klicken, um ein Projekt zufällig auszuwählen.<br><br>" +
      "3. 'Alles löschen' setzt die Liste zurück.<br><br>" +
      "Listen können durch Komma, Semikolon, Zeilenumbruch oder Tab getrennt sein.",
    reloadHint: "Falls die App nicht korrekt aktualisiert:",
    emptyAlert: "Noch keine Projekte vorhanden!",
    clearConfirm: "Liste wirklich löschen?",
    chosen: "Gewählt:"
  },
  en: {
    flavour: "Still drowning in projects?<br>Time to tell them: Alea iacta est!",
    inputPlaceholder: "Enter project name",
    addBtn: "Add project",
    importLabel: "📂 Import list (txt or csv)",
    ufoTitle: "My UFOs:",
    clearBtn: "🗑 Clear all UFOs",
    rollBtn: "🎲 Let's roll!",
    helpBtn: "❓ HowTo",
    helpTitle: "How to use RandomiseMe",
    helpText:
      "1. Add projects manually or import a list.<br><br>" +
      "2. Click 'Let's roll!' to randomly select one.<br><br>" +
      "3. 'Clear all UFOs' resets the list.<br><br>" +
      "Lists may be separated by commas, semicolons, line breaks or tabs.",
    reloadHint: "If the Home Screen app does not update:",
    emptyAlert: "No projects added yet!",
    clearConfirm: "Really clear the list?",
    chosen: "Selected:"
  }
};

let currentLanguage = localStorage.getItem("language") || "en";
let projects = JSON.parse(localStorage.getItem("projects")) || [];

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function applyTranslations() {
  const t = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;

  // Defensive: only set if elements exist
  const flavourText = document.getElementById("flavourText");
  if (flavourText) flavourText.innerHTML = t.flavour;

  const projectInput = document.getElementById("projectInput");
  if (projectInput) projectInput.placeholder = t.inputPlaceholder;

  const addBtn = document.getElementById("addBtn");
  if (addBtn) addBtn.textContent = t.addBtn;

  const importLabel = document.getElementById("importLabel");
  if (importLabel) importLabel.textContent = t.importLabel;

  const ufoTitle = document.getElementById("ufoTitle");
  if (ufoTitle) ufoTitle.textContent = t.ufoTitle;

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  const randomBtn = document.getElementById("randomBtn");
  if (randomBtn) randomBtn.textContent = t.rollBtn;

  const helpBtn = document.getElementById("helpBtn");
  if (helpBtn) helpBtn.textContent = t.helpBtn;

  const helpTitle = document.getElementById("helpTitle");
  if (helpTitle) helpTitle.textContent = t.helpTitle;

  const helpText = document.getElementById("helpText");
  if (helpText) helpText.innerHTML = t.helpText;

  const reloadHint = document.getElementById("reloadHint");
  if (reloadHint) reloadHint.textContent = t.reloadHint;

  // Active language highlight
  document.querySelectorAll(".language-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  applyTranslations();
}

function renderProjects() {
  const list = document.getElementById("projectList");
  if (!list) return;

  list.innerHTML = "";

  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${project}
      <button onclick="deleteProject(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function addProject() {
  const input = document.getElementById("projectInput");
  if (!input) return;

  const name = input.value.trim();
  if (!name) return;

  if (!projects.some(p => p.toLowerCase() === name.toLowerCase())) {
    projects.push(name);
    saveProjects();
    renderProjects();
  }

  input.value = "";
}

function deleteProject(index) {
  projects.splice(index, 1);
  saveProjects();
  renderProjects();
}

// ensure inline onclick can find it
window.deleteProject = deleteProject;

function clearAll() {
  if (!confirm(translations[currentLanguage].clearConfirm)) return;

  projects = [];
  localStorage.removeItem("projects");
  renderProjects();

  const result = document.getElementById("result");
  if (result) result.innerHTML = "";
}

function roll() {
  if (projects.length === 0) {
    alert(translations[currentLanguage].emptyAlert);
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

    resultDiv.innerHTML =
      translations[currentLanguage].chosen +
      " <span class='result-highlight'>" +
      projects[finalIndex] +
      "</span>";
  }, 2000);
}

function setupModal() {
  const modal = document.getElementById("helpModal");
  const helpBtn = document.getElementById("helpBtn");
  const closeBtn = document.querySelector(".close-btn");
  if (!modal || !helpBtn || !closeBtn) return;

  const open = () => {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  };

  helpBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  window.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function setupReloadButton() {
  const reloadBtn = document.getElementById("reloadBtn");
  if (!reloadBtn) return;

  reloadBtn.addEventListener("click", () => {
    // best-effort reload (works for Safari / iOS home-screen too)
    window.location.href = window.location.pathname + "?v=" + Date.now();
  });
}

function setupImport() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput) return;

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = String(e.target.result || "");
      const entries = content.split(/[\r\n,;\t]+/);

      let changed = false;

      entries.forEach(entry => {
        let trimmed = entry.trim();
        // remove surrounding quotes
        trimmed = trimmed.replace(/^"(.*)"$/, "$1");

        if (!trimmed) return;

        if (!projects.some(p => p.toLowerCase() === trimmed.toLowerCase())) {
          projects.push(trimmed);
          changed = true;
        }
      });

      if (changed) {
        saveProjects();
        renderProjects();
      }

      // allow importing same file again later
      fileInput.value = "";
    };

    reader.readAsText(file);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  applyTranslations();

  // Form submit (Enter + button)
  const form = document.getElementById("projectForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addProject();
    });
  }

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.addEventListener("click", clearAll);

  const randomBtn = document.getElementById("randomBtn");
  if (randomBtn) randomBtn.addEventListener("click", roll);

  // Language buttons
  document.querySelectorAll(".language-switch button").forEach(btn => {
    btn.addEventListener("click", function() {
      switchLanguage(this.dataset.lang);
    });
  });

  setupImport();
  setupReloadButton();
});

function openHelp() {
  const modal = document.getElementById("helpModal");
  if (modal) {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
  }
}

function closeHelp() {
  const modal = document.getElementById("helpModal");
  if (modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn");
  const modal = document.getElementById("helpModal");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeHelp);
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeHelp();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeHelp();
    }
  });
});



