// Projekte aus LocalStorage laden
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// Initial rendern
renderProjects();

// Projekte speichern
function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Projekt hinzufügen
function addProject() {
  const input = document.getElementById("projectInput");
  const name = input.value.trim();

  if (name === "") return;

  projects.push(name);
  input.value = "";
  saveProjects();
  renderProjects();

  input.focus(); // direkt weiter tippen
}

// Projekt löschen
function deleteProject(index) {
  projects.splice(index, 1);
  saveProjects();
  renderProjects();
}

// Projektliste anzeigen
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

// Zufallsauswahl mit Animation
function roll() {
  if (projects.length === 0) {
    alert("Noch keine Projekte vorhanden!");
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
    resultDiv.textContent = "Your UFO of the day is: " + projects[finalIndex];
  }, 2000);
}

// Datei-Import (TXT oder CSV, eine Zeile = ein Projekt)
document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split(/\r?\n/);

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed !== "" && !projects.includes(trimmed)) {
        projects.push(trimmed);
      }
    });

    saveProjects();
    renderProjects();
  };

  reader.readAsText(file);
});

// ENTER-Taste aktivieren (Formular-Submit abfangen)
document.getElementById("projectForm").addEventListener("submit", function(event) {
  event.preventDefault();
  addProject();
});
