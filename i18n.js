// Simple i18n for RandomiseMe (no dependencies)
// - Add new languages by extending I18N.
// - Use data-i18n / data-i18n-html / data-i18n-placeholder in the HTML.

(function () {
  const I18N = {
    en: {
      appTitle: "RandomiseMe!",
      flavourHtml: "Still drowning in projects?<br>Then it's time for: Alea iacta est!",
      inputPlaceholder: "Enter project name",
      btnAdd: "Add",
      btnImport: "📂 Import list (txt or csv)",
      btnExport: "💾 Export list",
      headingUfos: "My UFOs:",
      btnClear: "🗑 Clear all UFOs",
      btnRoll: "🎲 Let's roll!",
      btnHelp: "❓ HowTo",
      modalTitle: "How to use RandomiseMe",
      modalSteps: [
        "Add projects manually or import a .txt or .csv list.",
        "Tap “Let’s roll!” to randomly select a single project.",
        "Use “Clear all UFOs” to reset your list.",
        "Tip: Imported lists can be separated by commas, semicolons, line breaks or tabs."
      ],
      modalUpdateHint: "If the Home Screen app does not update properly:",
      btnReload: "🔄 Force reload",
      modalPrivacy: "Privacy: your list stays on this device (saved in your browser).",
      confirmClearAll: "Do you really want to clear the list?",
      alertNoProjects: "No projects added yet!",
      alertImportFinished: "Import finished: {count} new projects added.",
      alertExportEmpty: "Nothing to export yet.",
      alertExportDone: "Export created.",
      exclamations: [
        "Oh look:",
        "Bäm:",
        "Kaching:",
        "Dingdingding:",
        "Psssht:",
        "Take that:",
        "Well:",
        "Guess what:",
        "Plot twist:",
        "Lucky you:",
        "Here we go:",
        "Ta-da:",
        "Et voilà:"
      ],
      langLabel: "Language",
      footerBy: "created by",
      footerPublished: "published under GPL3"
    },

    de: {
      appTitle: "RandomiseMe!",
      flavourHtml: "Überfordert mit Deinen Projekten?<br>Lass den Zufall entscheiden: Alea iacta est!",
      inputPlaceholder: "Projektnamen eingeben",
      btnAdd: "hinzufügen",
      btnImport: "📂 Liste importieren (txt oder csv)",
      btnExport: "💾 Liste exportieren",
      headingUfos: "Meine UFOs:",
      btnClear: "🗑 Alle UFOs löschen",
      btnRoll: "🎲 Würfelzeit!",
      btnHelp: "❓ Anleitung",
      modalTitle: "So nutzt du RandomiseMe",
      modalSteps: [
        "Projekte manuell hinzufügen oder eine .txt/.csv-Liste importieren.",
        "Auf „Würfelzeit!“ tippen, um ein Projekt zufällig auszuwählen.",
        "„Alle UFOs löschen“ setzt die Liste zurück.",
        "Tipp: Import-Listen dürfen mit Kommas, Semikolons, Zeilenumbrüchen oder Tabs getrennt sein."
      ],
      modalUpdateHint: "Wenn die Homescreen-App nicht richtig aktualisiert:",
      btnReload: "🔄 App neu laden",
      modalPrivacy: "Datenschutz: Deine Liste bleibt auf diesem Gerät (im Browser gespeichert).",
      confirmClearAll: "Willst du die Liste wirklich komplett löschen?",
      alertNoProjects: "Noch keine Projekte in der Liste!",
      alertImportFinished: "Import fertig: {count} neue Projekte hinzugefügt.",
      alertExportEmpty: "Noch nichts zum Exportieren.",
      alertExportDone: "Export erstellt.",
      exclamations: [
        "Schau mal:",
        "Bäm:",
        "Sieh an, sieh an:",
        "Hier, hast Du:",
        "Frisch aus dem Ofen:",
        "Bitte sehr:",
        "Tja:",
        "Rate mal:",
        "Plot Twist:",
        "Na dann:",
        "Los geht’s:",
        "Ta‑da:",
        "Simsalabim:",
        "Et voilà:"
      ],
      langLabel: "Sprache",
      footerBy: "erstellt von",
      footerPublished: "veröffentlicht unter GPL3"
    },

    fr: {
      appTitle: "RandomiseMe!",
      flavourHtml: "Toujours submergée par tes projets ?<br>Il est temps de leur dire : Alea iacta est !",
      inputPlaceholder: "Saisir un projet",
      btnAdd: "Ajouter",
      btnImport: "📂 Importer une liste (txt ou csv)",
      btnExport: "💾 Exporter la liste",
      headingUfos: "Mes OVNIs :",
      btnClear: "🗑 Tout effacer",
      btnRoll: "🎲 On lance !",
      btnHelp: "❓ Mode d’emploi",
      modalTitle: "Comment utiliser RandomiseMe",
      modalSteps: [
        "Ajoute des projets à la main ou importe une liste .txt / .csv.",
        "Appuie sur « On lance ! » pour choisir un projet au hasard.",
        "« Tout effacer » réinitialise la liste.",
        "Astuce : les listes importées peuvent être séparées par des virgules, des points-virgules, des retours à la ligne ou des tabulations."
      ],
      modalUpdateHint: "Si l’app sur l’écran d’accueil ne se met pas à jour :",
      btnReload: "🔄 Recharger l’app",
      modalPrivacy: "Confidentialité : ta liste reste sur cet appareil (enregistrée dans ton navigateur).",
      confirmClearAll: "Voulez-vous vraiment vider la liste ?",
      alertNoProjects: "Aucun projet pour l’instant !",
      alertImportFinished: "Import terminé : {count} nouveaux projets ajoutés.",
      alertExportEmpty: "Rien à exporter pour le moment.",
      alertExportDone: "Export créé.",
      exclamations: [
        "Oh là là:",
        "Bam :",
        "Tiens :",
        "Alors :",
        "Devine quoi :",
        "Coup de théâtre :",
        "Chanceuse :",
        "C’est parti :",
        "Ta‑da :",
        "Et voilà :"
      ],
      langLabel: "Langue",
      footerBy: "créé par",
      footerPublished: "publié sous GPL3"
    },

    it: {
      appTitle: "RandomiseMe!",
      flavourHtml: "Ancora sommersa dai progetti?<br>È ora di dirglielo: Alea iacta est!",
      inputPlaceholder: "Inserisci un progetto",
      btnAdd: "Aggiungi",
      btnImport: "📂 Importa lista (txt o csv)",
      btnExport: "💾 Esporta lista",
      headingUfos: "I miei UFO:",
      btnClear: "🗑 Svuota tutto",
      btnRoll: "🎲 Si lancia!",
      btnHelp: "❓ Istruzioni",
      modalTitle: "Come usare RandomiseMe",
      modalSteps: [
        "Aggiungi progetti a mano oppure importa una lista .txt / .csv.",
        "Tocca « Si lancia! » per scegliere un progetto a caso.",
        "« Svuota tutto » azzera la lista.",
        "Consiglio: le liste importate possono essere separate da virgole, punto e virgola, a capo o tabulazioni."
      ],
      modalUpdateHint: "Se l’app nella schermata Home non si aggiorna bene:",
      btnReload: "🔄 Ricarica l’app",
      modalPrivacy: "Privacy: la tua lista resta su questo dispositivo (salvata nel browser).",
      confirmClearAll: "Vuoi davvero cancellare tutta la lista?",
      alertNoProjects: "Nessun progetto ancora!",
      alertImportFinished: "Import completato: aggiunti {count} nuovi progetti.",
      alertExportEmpty: "Niente da esportare per ora.",
      alertExportDone: "Export creato.",
      exclamations: [
        "Guarda un po’:",
        "Bam:",
        "Ecco qua:",
        "Allora:",
        "Indovina:",
        "Colpo di scena:",
        "Che fortuna:",
        "Si parte:",
        "Ta‑da:",
        "Et voilà:"
      ],
      langLabel: "Lingua",
      footerBy: "creato da",
      footerPublished: "pubblicato con GPL3"
    }
  };

  function normalizeLang(lang) {
    if (!lang) return "en";
    const l = String(lang).toLowerCase();
    if (l.startsWith("de")) return "de";
    if (l.startsWith("fr")) return "fr";
    if (l.startsWith("it")) return "it";
    if (l.startsWith("en")) return "en";
    return "en";
  }

  function getSavedLang() {
    return normalizeLang(localStorage.getItem("lang"));
  }

  function detectBrowserLang() {
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language];
    return normalizeLang(langs && langs[0]);
  }

  function getLang() {
    return getSavedLang() || detectBrowserLang();
  }

  function setLang(lang) {
    const n = normalizeLang(lang);
    localStorage.setItem("lang", n);
    applyTranslations(n);
    return n;
  }

  function interpolate(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{(\w+)\}/g, (_, k) => {
      return Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : `{${k}}`;
    });
  }

  function t(key, vars) {
    const lang = getLang();
    const table = I18N[lang] || I18N.en;
    const fallback = I18N.en;

    const val = (table && table[key] !== undefined) ? table[key] : fallback[key];
    if (typeof val === "string") return interpolate(val, vars);
    return val;
  }

  function applyTranslations(lang) {
    const l = normalizeLang(lang);

    // html lang
    document.documentElement.setAttribute("lang", l);

    // title
    document.title = t("appTitle");

    // text + html
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (!k) return;
      const useHtml = el.hasAttribute("data-i18n-html");
      const v = t(k);
      if (v === undefined || v === null) return;
      if (useHtml) el.innerHTML = String(v);
      else el.textContent = String(v);
    });

    // placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.getAttribute("data-i18n-placeholder");
      if (!k) return;
      el.setAttribute("placeholder", String(t(k)));
    });

    // aria-label
    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
      const k = el.getAttribute("data-i18n-aria-label");
      if (!k) return;
      el.setAttribute("aria-label", String(t(k)));
    });

    // modal steps list
    const stepsEl = document.getElementById("howtoSteps");
    if (stepsEl) {
      stepsEl.innerHTML = "";
      const steps = t("modalSteps");
      if (Array.isArray(steps)) {
        steps.forEach(s => {
          const li = document.createElement("li");
          li.textContent = s;
          stepsEl.appendChild(li);
        });
      }
    }

    // language select label + value
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = l;
    }

    return l;
  }

  function init() {
    const initial = localStorage.getItem("lang") ? getLang() : detectBrowserLang();
    localStorage.setItem("lang", normalizeLang(initial));
    return applyTranslations(initial);
  }

  window.i18n = {
    init,
    t,
    setLang,
    getLang,
    applyTranslations,
    available: () => Object.keys(I18N)
  };
})();
