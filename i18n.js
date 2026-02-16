(function(){
  const TRANSLATIONS = {
  "en": {
    "lang.name": "English",
    "lang.label": "Language",
    "flavour.text": "Hey, how's it going?<br>Let's pick a new project today :)",
    "input.placeholder": "Enter project name",
    "btn.add": "Add project",
    "btn.import": "📂 Import list (txt or csv)",
    "heading.list": "My UFOs:",
    "btn.clear": "🗑 Clear all UFOs",
    "btn.roll": "🎲 Let's roll!",
    "help.btn": "❓ HowTo",
    "help.title": "How to use RandomiseMe",
    "help.body": "1. Add projects manually or import a .txt or .csv list.<br><br>2. Click \"Let's roll!\" to randomly select a single project.<br><br>3. Use \"Clear all UFOs\" to reset your list.<br><br>Imported lists can be separated by commas, semicolons, line breaks or tabs.",
    "help.update_hint": "If the Home Screen app does not update properly:",
    "help.reload": "🔄 Reload app",
    "footer.created": "RandomiseMe! – created by Nico Siedler",
    "footer.license": "Version 0.2a 02/2026 published under GPL3",
    "confirm.clear": "Do you really want to clear the list?",
    "alert.no_projects": "No projects added yet!",
    "alert.import_finished": "Import finished: {count} new projects added.",
    "exclamations": [
      "Oh look:",
      "Bäm:",
      "Take that:",
      "Well:",
      "Guess what:",
      "Plot twist:",
      "Lucky you:",
      "Here we go:",
      "Ta-da:",
      "Et voilà:"
    ]
  },
  "de": {
    "lang.name": "Deutsch",
    "lang.label": "Sprache",
    "flavour.text": "Hallo, wie geht's Dir?<br>Höchste Zeit für ein neues Projekt! :)",
    "input.placeholder": "Projektname eingeben",
    "btn.add": "Projekt hinzufügen",
    "btn.import": "📂 Liste importieren (txt oder csv)",
    "heading.list": "Meine UFOs:",
    "btn.clear": "🗑 Alle UFOs löschen",
    "btn.roll": "🎲 Würfeln!",
    "help.btn": "❓ Anleitung",
    "help.title": "So nutzt du RandomiseMe",
    "help.body": "1. Projekte manuell hinzufügen oder eine .txt-/.csv-Liste importieren.<br><br>2. Auf „Würfeln!“ klicken, um zufällig ein Projekt auszuwählen.<br><br>3. „Alle UFOs löschen“ setzt die Liste zurück.<br><br>Importierte Listen dürfen durch Kommas, Semikolons, Zeilenumbrüche oder Tabs getrennt sein.",
    "help.update_hint": "Falls die Homescreen-App sich nicht richtig aktualisiert:",
    "help.reload": "🔄 App neu laden",
    "footer.created": "RandomiseMe! – erstellt von Nico Siedler",
    "footer.license": "Version 0.2a 02/2026 veröffentlicht unter GPL3",
    "confirm.clear": "Willst du die Liste wirklich leeren?",
    "alert.no_projects": "Noch keine Projekte hinzugefügt!",
    "alert.import_finished": "Import fertig: {count} neue Projekte hinzugefügt.",
    "exclamations": [
      "Schau mal:",
      "Bäm:",
      "Na bitte:",
      "Also:",
      "Rate mal:",
      "Plot Twist:",
      "Glück gehabt:",
      "Auf geht's:",
      "Tadaa:",
      "Et voilà:"
    ]
  },
  "fr": {
    "lang.name": "Français",
    "lang.label": "Langue",
    "flavour.text": "Hey, ça va?<br>Trouvons ton projet! :)",
    "input.placeholder": "Saisir un nom de projet",
    "btn.add": "Ajouter",
    "btn.import": "📂 Importer une liste (txt ou csv)",
    "heading.list": "Mes encours :",
    "btn.clear": "🗑 Tout effacer",
    "btn.roll": "🎲 On lance !",
    "help.btn": "❓ Mode d’emploi",
    "help.title": "Comment utiliser RandomiseMe",
    "help.body": "1. Ajoute des projets manuellement ou importe une liste .txt ou .csv.<br><br>2. Clique sur « On lance ! » pour choisir un projet au hasard.<br><br>3. Utilise « Tout effacer » pour réinitialiser la liste.<br><br>Les listes importées peuvent être séparées par des virgules, des points-virgules, des retours à la ligne ou des tabulations.",
    "help.update_hint": "Si l’app sur l’écran d’accueil ne se met pas à jour correctement :",
    "help.reload": "🔄 Recharger l’app",
    "footer.created": "RandomiseMe! – créé par Nico Siedler",
    "footer.license": "Version 0.2a 02/2026 publiée sous GPL3",
    "confirm.clear": "Veux-tu vraiment effacer la liste ?",
    "alert.no_projects": "Aucun projet n’a été ajouté !",
    "alert.import_finished": "Import terminé : {count} nouveaux projets ajoutés.",
    "exclamations": [
      "Regarde :",
      "Bam :",
      "Tiens :",
      "Alors :",
      "Devine :",
      "Plot twist :",
      "Quelle chance :",
      "C’est parti :",
      "Tadaa :",
      "Et voilà :"
    ]
  },
  "it": {
    "lang.name": "Italiano",
    "lang.label": "Lingua",
    "flavour.text": "Ancora sommerso/a dai progetti?<br>È ora di dire: Alea iacta est!",
    "input.placeholder": "Inserisci nome progetto",
    "btn.add": "Aggiungi",
    "btn.import": "📂 Importa lista (txt o csv)",
    "heading.list": "I miei lavori in corso:",
    "btn.clear": "🗑 Cancella tutto",
    "btn.roll": "🎲 Via!",
    "help.btn": "❓ Guida",
    "help.title": "Come usare RandomiseMe",
    "help.body": "1. Aggiungi i progetti a mano o importa una lista .txt o .csv.<br><br>2. Clicca « Via! » per scegliere un progetto a caso.<br><br>3. Usa « Cancella tutto » per azzerare la lista.<br><br>Le liste importate possono essere separate da virgole, punti e virgola, a capo o tabulazioni.",
    "help.update_hint": "Se l’app nella schermata Home non si aggiorna correttamente:",
    "help.reload": "🔄 Ricarica app",
    "footer.created": "RandomiseMe! – creato da Nico Siedler",
    "footer.license": "Versione 0.2a 02/2026 pubblicata sotto GPL3",
    "confirm.clear": "Vuoi davvero cancellare la lista?",
    "alert.no_projects": "Non hai ancora aggiunto progetti!",
    "alert.import_finished": "Import completato: aggiunti {count} nuovi progetti.",
    "exclamations": [
      "Guarda:",
      "Bam:",
      "Ecco:",
      "Allora:",
      "Indovina:",
      "Colpo di scena:",
      "Che fortuna:",
      "Si parte:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "es": {
    "lang.name": "Español",
    "lang.label": "Idioma",
    "flavour.text": "¿Sigues ahogándote en proyectos?<br>Hora de decirles: Alea iacta est!",
    "input.placeholder": "Escribe el nombre del proyecto",
    "btn.add": "Añadir",
    "btn.import": "📂 Importar lista (txt o csv)",
    "heading.list": "Mis proyectos pendientes:",
    "btn.clear": "🗑 Borrar todo",
    "btn.roll": "🎲 ¡A rodar!",
    "help.btn": "❓ Cómo se usa",
    "help.title": "Cómo usar RandomiseMe",
    "help.body": "1. Añade proyectos manualmente o importa una lista .txt o .csv.<br><br>2. Pulsa « ¡A rodar! » para elegir un proyecto al azar.<br><br>3. Usa « Borrar todo » para reiniciar la lista.<br><br>Las listas importadas pueden separarse por comas, punto y coma, saltos de línea o tabulaciones.",
    "help.update_hint": "Si la app en la pantalla de inicio no se actualiza bien:",
    "help.reload": "🔄 Recargar app",
    "footer.created": "RandomiseMe! – creado por Nico Siedler",
    "footer.license": "Versión 0.2a 02/2026 publicada bajo GPL3",
    "confirm.clear": "¿Seguro que quieres borrar la lista?",
    "alert.no_projects": "¡Aún no has añadido proyectos!",
    "alert.import_finished": "Importación finalizada: se añadieron {count} proyectos nuevos.",
    "exclamations": [
      "Mira:",
      "¡Bam!:",
      "Toma:",
      "Bueno:",
      "Adivina:",
      "Giro de trama:",
      "Qué suerte:",
      "Allá vamos:",
      "¡Tachán!:",
      "Et voilà:"
    ]
  },
  "pl": {
    "lang.name": "Polski",
    "lang.label": "Język",
    "flavour.text": "Nadal toniesz w projektach?<br>Czas im powiedzieć: Alea iacta est!",
    "input.placeholder": "Wpisz nazwę projektu",
    "btn.add": "Dodaj",
    "btn.import": "📂 Importuj listę (txt lub csv)",
    "heading.list": "Moje niedokończone projekty:",
    "btn.clear": "🗑 Wyczyść wszystko",
    "btn.roll": "🎲 Losuj!",
    "help.btn": "❓ Instrukcja",
    "help.title": "Jak używać RandomiseMe",
    "help.body": "1. Dodaj projekty ręcznie lub zaimportuj listę .txt albo .csv.<br><br>2. Kliknij « Losuj! », aby wylosować jeden projekt.<br><br>3. Użyj « Wyczyść wszystko », aby zresetować listę.<br><br>Importowane listy mogą być rozdzielone przecinkami, średnikami, znakami nowej linii lub tabulatorami.",
    "help.update_hint": "Jeśli aplikacja na ekranie głównym nie aktualizuje się poprawnie:",
    "help.reload": "🔄 Przeładuj aplikację",
    "footer.created": "RandomiseMe! – autor: Nico Siedler",
    "footer.license": "Wersja 0.2a 02/2026 opublikowana na licencji GPL3",
    "confirm.clear": "Na pewno chcesz wyczyścić listę?",
    "alert.no_projects": "Nie dodano jeszcze żadnych projektów!",
    "alert.import_finished": "Import zakończony: dodano {count} nowych projektów.",
    "exclamations": [
      "Patrz:",
      "Bam:",
      "Masz:",
      "No cóż:",
      "Zgadnij:",
      "Zwrot akcji:",
      "Szczęściarz:",
      "No to jedziemy:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "pt": {
    "lang.name": "Português",
    "lang.label": "Idioma",
    "flavour.text": "Ainda a afogar-te em projetos?<br>Hora de dizer: Alea iacta est!",
    "input.placeholder": "Escreve o nome do projeto",
    "btn.add": "Adicionar",
    "btn.import": "📂 Importar lista (txt ou csv)",
    "heading.list": "Meus projetos pendentes:",
    "btn.clear": "🗑 Limpar tudo",
    "btn.roll": "🎲 Vamos lá!",
    "help.btn": "❓ Como usar",
    "help.title": "Como usar o RandomiseMe",
    "help.body": "1. Adiciona projetos manualmente ou importa uma lista .txt ou .csv.<br><br>2. Clica em « Vamos lá! » para escolher um projeto ao acaso.<br><br>3. Usa « Limpar tudo » para reiniciar a lista.<br><br>As listas importadas podem ser separadas por vírgulas, ponto e vírgula, quebras de linha ou tabulações.",
    "help.update_hint": "Se a app no ecrã inicial não atualizar corretamente:",
    "help.reload": "🔄 Recarregar app",
    "footer.created": "RandomiseMe! – criado por Nico Siedler",
    "footer.license": "Versão 0.2a 02/2026 publicada sob GPL3",
    "confirm.clear": "Queres mesmo limpar a lista?",
    "alert.no_projects": "Ainda não adicionaste projetos!",
    "alert.import_finished": "Importação concluída: {count} novos projetos adicionados.",
    "exclamations": [
      "Olha:",
      "Bam:",
      "Toma:",
      "Bem:",
      "Adivinha:",
      "Reviravolta:",
      "Que sorte:",
      "Lá vamos nós:",
      "Tcharam:",
      "Et voilà:"
    ]
  },
  "sv": {
    "lang.name": "Svenska",
    "lang.label": "Språk",
    "flavour.text": "Drunknar du fortfarande i projekt?<br>Dags att säga: Alea iacta est!",
    "input.placeholder": "Skriv projektnamn",
    "btn.add": "Lägg till",
    "btn.import": "📂 Importera lista (txt eller csv)",
    "heading.list": "Mina pågående projekt:",
    "btn.clear": "🗑 Rensa allt",
    "btn.roll": "🎲 Kör!",
    "help.btn": "❓ Hjälp",
    "help.title": "Så använder du RandomiseMe",
    "help.body": "1. Lägg till projekt manuellt eller importera en .txt- eller .csv-lista.<br><br>2. Klicka på « Kör! » för att slumpa fram ett projekt.<br><br>3. Använd « Rensa allt » för att återställa listan.<br><br>Importerade listor kan vara separerade med kommatecken, semikolon, radbrytningar eller tabbar.",
    "help.update_hint": "Om appen på hemskärmen inte uppdateras som den ska:",
    "help.reload": "🔄 Ladda om appen",
    "footer.created": "RandomiseMe! – skapad av Nico Siedler",
    "footer.license": "Version 0.2a 02/2026 publicerad under GPL3",
    "confirm.clear": "Vill du verkligen rensa listan?",
    "alert.no_projects": "Inga projekt har lagts till ännu!",
    "alert.import_finished": "Importen klar: {count} nya projekt lades till.",
    "exclamations": [
      "Titta:",
      "Bam:",
      "Varsågod:",
      "Nåväl:",
      "Gissa:",
      "Plot twist:",
      "Vilken tur:",
      "Nu kör vi:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "da": {
    "lang.name": "Dansk",
    "lang.label": "Sprog",
    "flavour.text": "Drukner du stadig i projekter?<br>Tid til at sige: Alea iacta est!",
    "input.placeholder": "Indtast projektnavn",
    "btn.add": "Tilføj",
    "btn.import": "📂 Importér liste (txt eller csv)",
    "heading.list": "Mine igangværende projekter:",
    "btn.clear": "🗑 Ryd alt",
    "btn.roll": "🎲 Kom så!",
    "help.btn": "❓ Hjælp",
    "help.title": "Sådan bruger du RandomiseMe",
    "help.body": "1. Tilføj projekter manuelt eller importér en .txt- eller .csv-liste.<br><br>2. Klik på « Kom så! » for at vælge et projekt tilfældigt.<br><br>3. Brug « Ryd alt » for at nulstille listen.<br><br>Importerede lister kan adskilles med kommaer, semikolon, linjeskift eller tabulatorer.",
    "help.update_hint": "Hvis appen på hjemmeskærmen ikke opdaterer korrekt:",
    "help.reload": "🔄 Genindlæs app",
    "footer.created": "RandomiseMe! – lavet af Nico Siedler",
    "footer.license": "Version 0.2a 02/2026 udgivet under GPL3",
    "confirm.clear": "Vil du virkelig rydde listen?",
    "alert.no_projects": "Der er endnu ikke tilføjet projekter!",
    "alert.import_finished": "Import færdig: {count} nye projekter blev tilføjet.",
    "exclamations": [
      "Se lige:",
      "Bam:",
      "Værsgo:",
      "Nå:",
      "Gæt:",
      "Plot twist:",
      "Heldige dig:",
      "Så kører vi:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "ru": {
    "lang.name": "Русский",
    "lang.label": "Язык",
    "flavour.text": "Всё ещё тонешь в проектах?<br>Пора сказать: Alea iacta est!",
    "input.placeholder": "Введите название проекта",
    "btn.add": "Добавить",
    "btn.import": "📂 Импорт списка (txt или csv)",
    "heading.list": "Мои незаконченные проекты:",
    "btn.clear": "🗑 Очистить всё",
    "btn.roll": "🎲 Поехали!",
    "help.btn": "❓ Как пользоваться",
    "help.title": "Как пользоваться RandomiseMe",
    "help.body": "1. Добавляй проекты вручную или импортируй список .txt или .csv.<br><br>2. Нажми « Поехали! », чтобы случайно выбрать один проект.<br><br>3. « Очистить всё » сбрасывает список.<br><br>В импортируемых списках разделителями могут быть запятые, точки с запятой, переносы строк или табуляция.",
    "help.update_hint": "Если приложение на домашнем экране не обновляется корректно:",
    "help.reload": "🔄 Перезагрузить приложение",
    "footer.created": "RandomiseMe! – автор: Nico Siedler",
    "footer.license": "Версия 0.2a 02/2026 опубликовано под GPL3",
    "confirm.clear": "Точно очистить список?",
    "alert.no_projects": "Проекты ещё не добавлены!",
    "alert.import_finished": "Импорт завершён: добавлено новых проектов — {count}.",
    "exclamations": [
      "Смотри:",
      "Бам:",
      "Держи:",
      "Ну что ж:",
      "Угадай:",
      "Вот это поворот:",
      "Повезло тебе:",
      "Поехали:",
      "Та‑дам:",
      "Et voilà:"
    ]
  },
  "cs": {
    "lang.name": "Čeština",
    "lang.label": "Jazyk",
    "flavour.text": "Pořád se topíš v projektech?<br>Je čas říct: Alea iacta est!",
    "input.placeholder": "Zadej název projektu",
    "btn.add": "Přidat",
    "btn.import": "📂 Importovat seznam (txt nebo csv)",
    "heading.list": "Moje rozpracované projekty:",
    "btn.clear": "🗑 Smazat vše",
    "btn.roll": "🎲 Jdeme na to!",
    "help.btn": "❓ Návod",
    "help.title": "Jak používat RandomiseMe",
    "help.body": "1. Přidej projekty ručně nebo importuj seznam .txt či .csv.<br><br>2. Klikni na « Jdeme na to! », aby se náhodně vybral jeden projekt.<br><br>3. « Smazat vše » vymaže celý seznam.<br><br>Importované seznamy mohou být oddělené čárkami, středníky, zalomením řádku nebo tabulátory.",
    "help.update_hint": "Pokud se aplikace na domovské obrazovce neaktualizuje správně:",
    "help.reload": "🔄 Načíst znovu",
    "footer.created": "RandomiseMe! – vytvořil Nico Siedler",
    "footer.license": "Verze 0.2a 02/2026 vydáno pod GPL3",
    "confirm.clear": "Opravdu chceš smazat seznam?",
    "alert.no_projects": "Zatím nejsou přidány žádné projekty!",
    "alert.import_finished": "Import dokončen: přidáno {count} nových projektů.",
    "exclamations": [
      "Koukej:",
      "Bum:",
      "Tady to je:",
      "Tak:",
      "Hádej:",
      "Zvrat v ději:",
      "Máš štěstí:",
      "Jdeme na to:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "nb": {
    "lang.name": "Norsk",
    "lang.label": "Språk",
    "flavour.text": "Drukner du fortsatt i prosjekter?<br>På tide å si: Alea iacta est!",
    "input.placeholder": "Skriv prosjektnavn",
    "btn.add": "Legg til",
    "btn.import": "📂 Importer liste (txt eller csv)",
    "heading.list": "Mine pågående prosjekter:",
    "btn.clear": "🗑 Tøm alt",
    "btn.roll": "🎲 Kjør!",
    "help.btn": "❓ Hjelp",
    "help.title": "Slik bruker du RandomiseMe",
    "help.body": "1. Legg til prosjekter manuelt eller importer en .txt- eller .csv-liste.<br><br>2. Trykk « Kjør! » for å velge et prosjekt tilfeldig.<br><br>3. « Tøm alt » nullstiller listen.<br><br>Importer­te lister kan være separert med komma, semikolon, linjeskift eller tabulator.",
    "help.update_hint": "Hvis appen på hjemskjermen ikke oppdaterer riktig:",
    "help.reload": "🔄 Last inn på nytt",
    "footer.created": "RandomiseMe! – laget av Nico Siedler",
    "footer.license": "Versjon 0.2a 02/2026 publisert under GPL3",
    "confirm.clear": "Vil du virkelig tømme listen?",
    "alert.no_projects": "Ingen prosjekter er lagt til ennå!",
    "alert.import_finished": "Import ferdig: {count} nye prosjekter ble lagt til.",
    "exclamations": [
      "Se her:",
      "Bam:",
      "Værsågod:",
      "Vel:",
      "Gjett:",
      "Plott-twist:",
      "Heldige deg:",
      "Da kjører vi:",
      "Ta‑da:",
      "Et voilà:"
    ]
  },
  "fi": {
    "lang.name": "Suomi",
    "lang.label": "Kieli",
    "flavour.text": "Hukutko yhä projekteihin?<br>Nyt on aika sanoa: Alea iacta est!",
    "input.placeholder": "Syötä projektin nimi",
    "btn.add": "Lisää",
    "btn.import": "📂 Tuo lista (txt tai csv)",
    "heading.list": "Keskeneräiset projektini:",
    "btn.clear": "🗑 Tyhjennä kaikki",
    "btn.roll": "🎲 Anna mennä!",
    "help.btn": "❓ Ohje",
    "help.title": "Näin käytät RandomiseMe:tä",
    "help.body": "1. Lisää projekteja käsin tai tuo .txt- tai .csv‑lista.<br><br>2. Paina « Anna mennä! » valitaksesi yhden projektin satunnaisesti.<br><br>3. « Tyhjennä kaikki » nollaa listan.<br><br>Tuodut listat voivat olla eroteltu pilkuilla, puolipisteillä, rivinvaihdoilla tai sarkaimilla.",
    "help.update_hint": "Jos aloitusnäytön sovellus ei päivity oikein:",
    "help.reload": "🔄 Lataa uudelleen",
    "footer.created": "RandomiseMe! – tehnyt Nico Siedler",
    "footer.license": "Versio 0.2a 02/2026 julkaistu GPL3-lisenssillä",
    "confirm.clear": "Haluatko varmasti tyhjentää listan?",
    "alert.no_projects": "Projekteja ei ole vielä lisätty!",
    "alert.import_finished": "Tuonti valmis: lisättiin {count} uutta projektia.",
    "exclamations": [
      "Katso:",
      "Bam:",
      "Ole hyvä:",
      "No niin:",
      "Arvaa:",
      "Juonenkäänne:",
      "Onnekas sinä:",
      "Mennään:",
      "Ta‑da:",
      "Et voilà:"
    ]
  }
};

  const FALLBACK_LANG = "en";

  function normalizeLang(lang){
    if(!lang) return FALLBACK_LANG;
    lang = lang.toLowerCase();
    // exact match
    if(TRANSLATIONS[lang]) return lang;
    // match base, e.g. "pt-br" -> "pt"
    const base = lang.split("-")[0];
    // some browsers use "no" for Norwegian
    if(base === "no") return "nb";
    if(TRANSLATIONS[base]) return base;
    return FALLBACK_LANG;
  }

  function detectLang(){
    const saved = localStorage.getItem("lang");
    if(saved) return normalizeLang(saved);
    const nav = (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) || FALLBACK_LANG;
    return normalizeLang(nav);
  }

  let currentLang = detectLang();

  function t(key, vars){
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[FALLBACK_LANG];
    let val = (dict && dict[key] !== undefined) ? dict[key] : (TRANSLATIONS[FALLBACK_LANG][key] !== undefined ? TRANSLATIONS[FALLBACK_LANG][key] : key);

    if(Array.isArray(val)) return val;

    if(typeof val === "string" && vars){
      Object.keys(vars).forEach(k=>{
        val = val.replaceAll("{"+k+"}", String(vars[k]));
      });
    }
    return val;
  }

  function applyTranslations(){
    document.documentElement.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el=>{
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(el=>{
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key));
    });

    const select = document.getElementById("langSelect");
    if(select){
      select.value = currentLang;
    }
  }

  function setLang(lang){
    currentLang = normalizeLang(lang);
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  }

  window.i18n = { t, setLang, getLang: ()=>currentLang, available: ()=>Object.keys(TRANSLATIONS) };

  document.addEventListener("DOMContentLoaded", ()=>{
    // Populate names if needed (kept static in HTML)
    const select = document.getElementById("langSelect");
    if(select){
      select.addEventListener("change", (e)=> setLang(e.target.value));
      select.value = currentLang;
    }
    applyTranslations();
  });
})();
