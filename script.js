// ===== 1. KONFIGURATION =====

const translations = {
  de: {
    randomButton: "🎲 Zufall wählen",
    chosen: "Gewählt:"
  },
  en: {
    randomButton: "🎲 Random Pick",
    chosen: "Selected:"
  }
};

let currentLanguage = localStorage.getItem("language") || "de";
let projects = JSON.parse(localStorage.getItem("projects")) || [];


// ===== 2. FUNKTIONEN =====

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  applyTranslations();
}

function applyTranslations() {
  const btn = document.getElementById("randomBtn");
  if (btn) {
    btn.textContent = translations[currentLanguage].randomButton;
  }
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
}

function deleteProject(index) {
  projects.splice(index, 1);
  saveProjects();
  renderProjects();
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

function roll() {
  if (projects.length === 0) {
    alert("No projects added yet!");
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


// ===== 3. DOM READY =====

document.addEventListener("DOMContentLoaded", function() {

  renderProjects();
  applyTranslations();

  // Enter-Taste
  const input = document.getElementById("projectInput");
  if (input) {
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        addProject();
      }
    });
  }

});
