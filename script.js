/* =========================================================
   Project: RandomiseMe!
   Author: Nico Siedler (git: ricodelsien)
   File: script.js
   Version: 0.3b
   Date: 2026-02-15
   Description:
   - Random project shuffler
   - Multi-language (DE / EN)
   - LocalStorage persistence
   - Modal support
   ========================================================= */


// ===== 1. KONFIGURATION =====

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


// ===== 2. SPEICHER =====

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}


// ===== 3. ÜBERSETZUNG =====

function applyTranslations() {
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.getElementById("flavourText").innerHTML = t.flavour;
  document.getElementById("projectInput").placeholder = t.inputPlaceholder;
  document.getElementById("addBtn").textContent = t.addBtn;
  document.getElementById("importLabel").textContent = t.importLabel;
  document.getElementById("ufoTitle").textContent = t.ufoTitle;
  document.getElementById("clearBtn").textContent = t.clearBtn;
  document.getElementById("randomBtn").textContent = t.rollBtn;
  document.getElementById("helpBtn").textContent = t.helpBtn;
  document.getElementById("helpTitle").textContent = t.helpTitle;
  document.getElementById("helpText").innerHTML = t.helpText;
  document.getElementById("reloadHint").textContent = t.reloadHint;

  // aktive Sprache markieren
  document.querySelectorAll(".language-switch button")
    .forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
    });
}

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  applyTranslations();
}


// ===== 4. PROJEKT-FUNKTIONEN =====

function renderProjects() {
  const list = document.getElementById("projectList");
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

function clearAll() {
  if (!confirm(translations[currentLanguage].clearConfirm)) return;

  projects = [];
  localStorage.removeItem("projects");
  renderProjects();
  document.getElementById("result").innerHTML = "";
}


// ===== 5. RANDOMIZER =====

function roll() {
  if (projects.length === 0) {
    alert(translations[currentLanguage].emptyAlert);
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

    resultDiv.innerHTML =
      translations[currentLanguage].chosen +
      " <span class='result-highlight'>" +
      projects[finalIndex] +
      "</span>";

  }, 2000);
}


// ===== 6. DOM READY =====

document.addEventListener("DOMContentLoaded", function() {

  renderProjects();
  applyTranslations();

  // Form Submit
  document.getElementById("projectForm")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      addProject();
    });

  // Buttons
  document.getElementById("clearBtn")
    .addEventListener("click", clearAll);

  document.getElementById("randomBtn")
    .addEventListener("click", roll);

  // Sprache
  document.querySelectorAll(".language-switch button")
    .forEach(btn => {
      btn.addEventListener("click", function() {
        switchLanguage(this.dataset.lang);
      });
    });

});

