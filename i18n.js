(function(){
  const TRANSLATIONS = {
  "en": {
    "lang.name": "🇬🇧 EN",
    "lang.label": "Language",
    "flavour.text": "Hi, how are you today? <br> Let’s pick a new project! :)",
    "input.placeholder": "Enter project name",
    "btn.add": "Add",
    "btn.import": "📂 Import list (txt or csv)",
    "heading.list": "My UFOs:",
    "btn.clear": "🗑 Clear all UFOs",
    "btn.roll": "🎲 Let's roll!",

    "heading.done": "Done:",
    "heading.history": "History:",
    "btn.clear_done": "🧹 Clear done",
    "btn.clear_history": "🗑 Clear history",
    "btn.copy_history": "📋 Copy history",
    "btn.mark_done": "✅ Mark as done",
    "btn.copy": "📋 Copy",
    "btn.undo": "Undo",

    "help.btn": "❓ HowTo",
    "help.title": "How to use RandomiseMe",
    "help.body": "1. Add projects manually or import a .txt/.csv list.<br><br>2. Tap 🎲 to randomly pick one project.<br><br>3. 🗑 resets the active list (Done & History stay).<br><br>Imported lists may be separated by commas, semicolons, line breaks or tabs.<br><br>4. Entries can be marked as done and restored.<br><br>5. Done and History can be cleared if needed.<br><br>Note: Your list is stored locally in your browser. If you clear this site’s data, it will be lost.",
    "help.update_hint": "If the Home Screen app does not update properly:",
    "help.reload": "🔄 Reload app",

    "iconpicker.note": "After changing, add to Home Screen / install again.",
    "iconpicker.title": "App icon color (for installation)",
    "footer.created": "RandomiseMe! – created by Nico Siedler",
    "footer.license": "Version 0.7a 02/2026 published under GPL3",

    "confirm.clear": "Clear all active projects? (Done & history stay.)",
    "confirm.clear_done": "Clear done list?",
    "confirm.clear_history": "Clear history?",

    "alert.no_projects": "No projects added yet!",
    "alert.import_finished": "Import finished: {count} new projects added.",
    "alert.import_restored": "(+{count} restored)",
    "alert.nothing_to_copy": "Nothing to copy yet.",

    "toast.copied": "Copied to clipboard.",
    "toast.deleted": "Deleted: {name}",
    "toast.done": "Marked as done: {name}",
    "toast.restored": "Restored: {name}",
    "toast.cleared_active": "Active list cleared.",
    "toast.cleared_done": "Done list cleared.",
    "toast.cleared_history": "History cleared.",

    "history.roll": "Rolled",
    "history.done": "Done",
    "history.restore": "Restored",
    "history.delete": "Deleted",

    "aria.delete": "Delete",
    "aria.done": "Mark as done",
    "aria.restore": "Restore",
    "aria.copy": "Copy",
    "aria.undo": "Undo",

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
    "lang.name": "🇩🇪 DE",
    "lang.label": "Sprache",
    "flavour.text": "Hallo, wie geht’s dir heute? <br> Lass uns ein Projekt finden! :)",
    "input.placeholder": "Projekt eingeben",
    "btn.add": "Hinzufügen",
    "btn.import": "📂 Liste importieren (.txt oder .csv)",
    "heading.list": "Meine UFOs:",
    "btn.clear": "🗑 Alle UFOs löschen",
    "btn.roll": "🎲 Würfeln!",

    "heading.done": "Erledigt:",
    "heading.history": "Verlauf:",
    "btn.clear_done": "🧹 Löschen",
    "btn.clear_history": "🗑 Löschen",
    "btn.copy_history": "📋 Kopieren",
    "btn.mark_done": "✅ Erledigt!",
    "btn.copy": "📋 Kopieren",
    "btn.undo": "Rückgängig",

    "help.btn": "❓ Hilfe",
    "help.title": "So nutzt du RandomiseMe",
    "help.body": "1. Projekte manuell hinzufügen oder eine .txt/.csv-Liste importieren.<br><br>2. Tippe auf 🎲, um zufällig ein Projekt auszuwählen.<br><br>3. 🗑 setzt die aktive Liste zurück.<br><br>Importierte Listen dürfen durch ein Komma, Semikolon, Zeilenumbruch oder Tab getrennt sein.<br><br>4. Einträge können als erledigt markiert und wiederhergestellt werden.<br><br>5. Verlauf und erledigte Projekte können bei Bedarf geleert werden.<br><br>Hinweis: Deine Liste wird lokal im Browser gespeichert. Wenn du die Website-Daten dieser Seite löschst, ist sie weg.",
    "help.update_hint": "Falls die Homescreen-App sich nicht richtig aktualisiert:",
    "help.reload": "🔄 App neu laden",

    "iconpicker.note": "Nach dem Ändern bitte neu zum Homescreen hinzufügen / neu installieren.",
    "iconpicker.title": "App-Icon-Farbe (für Installation)",
    "footer.created": "RandomiseMe! – erstellt von Nico Siedler",
    "footer.license": "Version 0.7a 02/2026 veröffentlicht unter GPL3",

    "confirm.clear": "Alle aktiven Projekte löschen? (Erledigt & Verlauf bleiben.)",
    "confirm.clear_done": "Erledigt-Liste wirklich leeren?",
    "confirm.clear_history": "Verlauf wirklich löschen?",

    "alert.no_projects": "Noch keine Projekte hinzugefügt!",
    "alert.import_finished": "Import fertig: {count} neue Projekte hinzugefügt.",
    "alert.import_restored": "(+{count} wiederhergestellt)",
    "alert.nothing_to_copy": "Noch nichts zum Kopieren.",

    "toast.copied": "In die Zwischenablage kopiert.",
    "toast.deleted": "Gelöscht: {name}",
    "toast.done": "Als erledigt markiert: {name}",
    "toast.restored": "Wiederhergestellt: {name}",
    "toast.cleared_active": "Aktive Liste geleert.",
    "toast.cleared_done": "Erledigt-Liste geleert.",
    "toast.cleared_history": "Verlauf gelöscht.",

    "history.roll": "Gewürfelt",
    "history.done": "Erledigt",
    "history.restore": "Wiederhergestellt",
    "history.delete": "Gelöscht",

    "aria.delete": "Löschen",
    "aria.done": "Als erledigt markieren",
    "aria.restore": "Wiederherstellen",
    "aria.copy": "Kopieren",
    "aria.undo": "Rückgängig",

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
    "lang.name": "🇫🇷 FR",
    "lang.label": "Langue",
    "flavour.text": "Salut, comment ça va ? <br> Trouvons un projet ! :)",
    "input.placeholder": "Nom de projet",
    "btn.add": "Ajouter",
    "btn.import": "📂 Importer une liste (txt ou csv)",
    "heading.list": "Mes encours :",
    "btn.clear": "🗑 Tout effacer",
    "btn.roll": "🎲 On lance !",

    "heading.done": "Terminé :",
    "heading.history": "Historique :",
    "btn.clear_done": "🧹 Vider terminés",
    "btn.clear_history": "🗑 Effacer l’historique",
    "btn.copy_history": "📋 Copier l’historique",
    "btn.mark_done": "✅ Marquer comme terminé",
    "btn.copy": "📋 Copier",
    "btn.undo": "Annuler",

    "help.btn": "❓ Quoi",
    "help.title": "Comment utiliser RandomiseMe",
    "help.body": "1. Ajoute des projets manuellement ou importe une liste .txt/.csv.<br><br>2. Appuie sur 🎲 pour tirer un projet au hasard.<br><br>3. 🗑 réinitialise la liste active (Terminés & Historique restent).<br><br>Les listes importées peuvent être séparées par des virgules, des points-virgules, des retours à la ligne ou des tabulations.<br><br>4. Les entrées peuvent être marquées comme terminées et restaurées.<br><br>5. L’historique et les terminés peuvent être vidés si besoin.<br><br>Note : ta liste est stockée localement dans le navigateur. Si tu effaces les données du site, elle sera perdue.",
    "help.update_hint": "Si l’app sur l’écran d’accueil ne se met pas à jour correctement :",
    "help.reload": "🔄 Recharger l’app",

    "iconpicker.note": "Après modification, ajoute / installe de nouveau.",
    "iconpicker.title": "Couleur de l’icône (installation)",
    "footer.created": "RandomiseMe! – créé par Nico Siedler",
    "footer.license": "Version 0.7a 02/2026 publiée sous GPL3",

    "confirm.clear": "Effacer tous les projets actifs ? (Terminés + historique restent.)",
    "confirm.clear_done": "Vider la liste des terminés ?",
    "confirm.clear_history": "Effacer l’historique ?",

    "alert.no_projects": "Aucun projet n’a été ajouté !",
    "alert.import_finished": "Import terminé : {count} nouveaux projets ajoutés.",
    "alert.import_restored": "(+{count} restaurés)",
    "alert.nothing_to_copy": "Rien à copier pour l’instant.",

    "toast.copied": "Copié dans le presse-papiers.",
    "toast.deleted": "Supprimé : {name}",
    "toast.done": "Marqué terminé : {name}",
    "toast.restored": "Restauré : {name}",
    "toast.cleared_active": "Liste active effacée.",
    "toast.cleared_done": "Liste des terminés vidée.",
    "toast.cleared_history": "Historique effacé.",

    "history.roll": "Tiré au sort",
    "history.done": "Terminé",
    "history.restore": "Restauré",
    "history.delete": "Supprimé",

    "aria.delete": "Supprimer",
    "aria.done": "Marquer terminé",
    "aria.restore": "Restaurer",
    "aria.copy": "Copier",
    "aria.undo": "Annuler",

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
    "lang.name": "🇮🇹 IT",
    "lang.label": "Lingua",
    "flavour.text": "Ciao, come va oggi? <br> Troviamo un nuovo progetto! :)",
    "input.placeholder": "Inserisci nome progetto",
    "btn.add": "Aggiungi",
    "btn.import": "📂 Importa lista (txt o csv)",
    "heading.list": "I miei lavori in corso:",
    "btn.clear": "🗑 Cancella tutto",
    "btn.roll": "🎲 Via!",

    "heading.done": "Fatto:",
    "heading.history": "Cronologia:",
    "btn.clear_done": "🧹 Svuota fatti",
    "btn.clear_history": "🗑 Cancella cronologia",
    "btn.copy_history": "📋 Copia cronologia",
    "btn.mark_done": "✅ Segna come fatto",
    "btn.copy": "📋 Copia",
    "btn.undo": "Annulla",

    "help.btn": "❓ Guida",
    "help.title": "Come usare RandomiseMe",
    "help.body": "1. Aggiungi progetti a mano o importa una lista .txt/.csv.<br><br>2. Tocca 🎲 per scegliere un progetto a caso.<br><br>3. 🗑 azzera la lista attiva (Fatti & Cronologia restano).<br><br>Le liste importate possono essere separate da virgole, punti e virgola, a capo o tab.<br><br>4. Le voci possono essere segnate come completate e ripristinate.<br><br>5. Cronologia e completati possono essere svuotati se necessario.<br><br>Nota: la lista viene salvata localmente nel browser. Se cancelli i dati di questo sito, andrà persa.",
    "help.update_hint": "Se l’app nella schermata Home non si aggiorna correttamente:",
    "help.reload": "🔄 Ricarica app",

    "iconpicker.note": "Dopo la modifica, aggiungi / reinstalla di nuovo.",
    "iconpicker.title": "Colore dell’icona (installazione)",
    "footer.created": "RandomiseMe! – creato da Nico Siedler",
    "footer.license": "Versione 0.7a 02/2026 pubblicata sotto GPL3",

    "confirm.clear": "Cancellare tutti i progetti attivi? (Fatti e cronologia restano.)",
    "confirm.clear_done": "Svuotare la lista dei fatti?",
    "confirm.clear_history": "Cancellare la cronologia?",

    "alert.no_projects": "Non hai ancora aggiunto progetti!",
    "alert.import_finished": "Import completato: aggiunti {count} nuovi progetti.",
    "alert.import_restored": "(+{count} ripristinati)",
    "alert.nothing_to_copy": "Niente da copiare per ora.",

    "toast.copied": "Copiato negli appunti.",
    "toast.deleted": "Eliminato: {name}",
    "toast.done": "Segnato come fatto: {name}",
    "toast.restored": "Ripristinato: {name}",
    "toast.cleared_active": "Lista attiva svuotata.",
    "toast.cleared_done": "Lista dei fatti svuotata.",
    "toast.cleared_history": "Cronologia cancellata.",

    "history.roll": "Estratto",
    "history.done": "Fatto",
    "history.restore": "Ripristinato",
    "history.delete": "Eliminato",

    "aria.delete": "Elimina",
    "aria.done": "Segna come fatto",
    "aria.restore": "Ripristina",
    "aria.copy": "Copia",
    "aria.undo": "Annulla",

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
    "lang.name": "🇪🇸 ES",
    "lang.label": "Idioma",
    "flavour.text": "Hola! ¿Qué tal estás? <br> ¡Vamos a elegir un proyecto! :)",
    "input.placeholder": "Escribe el nombre del proyecto",
    "btn.add": "Añadir",
    "btn.import": "📂 Importar lista (txt o csv)",
    "heading.list": "Mis proyectos pendientes:",
    "btn.clear": "🗑 Borrar todo",
    "btn.roll": "🎲 ¡A rodar!",

    "heading.done": "Hecho:",
    "heading.history": "Historial:",
    "btn.clear_done": "🧹 Vaciar hechos",
    "btn.clear_history": "🗑 Borrar historial",
    "btn.copy_history": "📋 Copiar historial",
    "btn.mark_done": "✅ Marcar como hecho",
    "btn.copy": "📋 Copiar",
    "btn.undo": "Deshacer",

    "help.btn": "❓ Cómo se usa",
    "help.title": "Cómo usar RandomiseMe",
    "help.body": "1. Añade proyectos manualmente o importa una lista .txt/.csv.<br><br>2. Pulsa 🎲 para elegir un proyecto al azar.<br><br>3. 🗑 reinicia la lista activa (Hechos e Historial se mantienen).<br><br>Las listas importadas pueden separarse por comas, punto y coma, saltos de línea o tabulaciones.<br><br>4. Las entradas se pueden marcar como hechas y restaurar.<br><br>5. El historial y los hechos se pueden vaciar si hace falta.<br><br>Nota: tu lista se guarda localmente en el navegador. Si borras los datos de este sitio, se perderá.",
    "help.update_hint": "Si la app en la pantalla de inicio no se actualiza bien:",
    "help.reload": "🔄 Recargar app",

    "iconpicker.note": "Después de cambiarlo, vuelve a añadir / instalar.",
    "iconpicker.title": "Color del icono (instalación)",
    "footer.created": "RandomiseMe! – creado por Nico Siedler",
    "footer.license": "Versión 0.7a 02/2026 publicada bajo GPL3",

    "confirm.clear": "¿Borrar todos los proyectos activos? (Hechos e historial se conservan.)",
    "confirm.clear_done": "¿Vaciar la lista de hechos?",
    "confirm.clear_history": "¿Borrar el historial?",

    "alert.no_projects": "¡Aún no has añadido proyectos!",
    "alert.import_finished": "Importación finalizada: se añadieron {count} proyectos nuevos.",
    "alert.import_restored": "(+{count} restaurados)",
    "alert.nothing_to_copy": "Aún no hay nada que copiar.",

    "toast.copied": "Copiado al portapapeles.",
    "toast.deleted": "Borrado: {name}",
    "toast.done": "Marcado como hecho: {name}",
    "toast.restored": "Restaurado: {name}",
    "toast.cleared_active": "Lista activa borrada.",
    "toast.cleared_done": "Lista de hechos vaciada.",
    "toast.cleared_history": "Historial borrado.",

    "history.roll": "Sorteado",
    "history.done": "Hecho",
    "history.restore": "Restaurado",
    "history.delete": "Borrado",

    "aria.delete": "Borrar",
    "aria.done": "Marcar como hecho",
    "aria.restore": "Restaurar",
    "aria.copy": "Copiar",
    "aria.undo": "Deshacer",

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
    "lang.name": "🇵🇱 PL",
    "lang.label": "Język",
    "flavour.text": "Cześć, jak się masz? <br> Wybierzmy nowy projekt! :)",
    "input.placeholder": "Wpisz nazwę projektu",
    "btn.add": "Dodaj",
    "btn.import": "📂 Importuj listę (txt lub csv)",
    "heading.list": "Moje niedokończone projekty:",
    "btn.clear": "🗑 Wyczyść wszystko",
    "btn.roll": "🎲 Losuj!",

    "heading.done": "Zrobione:",
    "heading.history": "Historia:",
    "btn.clear_done": "🧹 Wyczyść zrobione",
    "btn.clear_history": "🗑 Wyczyść historię",
    "btn.copy_history": "📋 Kopiuj historię",
    "btn.mark_done": "✅ Oznacz jako zrobione",
    "btn.copy": "📋 Kopiuj",
    "btn.undo": "Cofnij",

    "help.btn": "❓ Instrukcja",
    "help.title": "Jak używać RandomiseMe",
    "help.body": "1. Dodaj projekty ręcznie albo zaimportuj listę .txt/.csv.<br><br>2. Kliknij 🎲, aby losowo wybrać jeden projekt.<br><br>3. 🗑 czyści listę aktywną (Zrobione i Historia zostają).<br><br>Importowane listy mogą być rozdzielane przecinkami, średnikami, nowymi liniami lub tabulatorami.<br><br>4. Pozycje można oznaczać jako zrobione i przywracać.<br><br>5. Historię i zrobione można wyczyścić w razie potrzeby.<br><br>Uwaga: lista jest zapisywana lokalnie w przeglądarce. Jeśli usuniesz dane tej strony, zniknie.",
    "help.update_hint": "Jeśli aplikacja na ekranie głównym nie aktualizuje się poprawnie:",
    "help.reload": "🔄 Przeładuj aplikację",

    "iconpicker.note": "Po zmianie dodaj / zainstaluj ponownie.",
    "iconpicker.title": "Kolor ikony (instalacja)",
    "footer.created": "RandomiseMe! – autor: Nico Siedler",
    "footer.license": "Wersja 0.7a 02/2026 opublikowana na licencji GPL3",

    "confirm.clear": "Usunąć wszystkie aktywne projekty? (Zrobione i historia zostają.)",
    "confirm.clear_done": "Wyczyścić listę zrobionych?",
    "confirm.clear_history": "Wyczyścić historię?",

    "alert.no_projects": "Nie dodano jeszcze żadnych projektów!",
    "alert.import_finished": "Import zakończony: dodano {count} nowych projektów.",
    "alert.import_restored": "(+{count} przywrócono)",
    "alert.nothing_to_copy": "Na razie nie ma czego kopiować.",

    "toast.copied": "Skopiowano do schowka.",
    "toast.deleted": "Usunięto: {name}",
    "toast.done": "Oznaczono jako zrobione: {name}",
    "toast.restored": "Przywrócono: {name}",
    "toast.cleared_active": "Wyczyszczono listę aktywną.",
    "toast.cleared_done": "Wyczyszczono zrobione.",
    "toast.cleared_history": "Wyczyszczono historię.",

    "history.roll": "Wylosowano",
    "history.done": "Zrobione",
    "history.restore": "Przywrócono",
    "history.delete": "Usunięto",

    "aria.delete": "Usuń",
    "aria.done": "Oznacz jako zrobione",
    "aria.restore": "Przywróć",
    "aria.copy": "Kopiuj",
    "aria.undo": "Cofnij",

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
    "lang.name": "🇵🇹 PT",
    "lang.label": "Idioma",
    "flavour.text": "Olá, como você está? <br> Vamos escolher um projeto! :)",
    "input.placeholder": "Escreve o nome do projeto",
    "btn.add": "Adicionar",
    "btn.import": "📂 Importar lista (txt ou csv)",
    "heading.list": "Meus projetos pendentes:",
    "btn.clear": "🗑 Limpar tudo",
    "btn.roll": "🎲 Vamos lá!",

    "heading.done": "Feito:",
    "heading.history": "Histórico:",
    "btn.clear_done": "🧹 Limpar feitos",
    "btn.clear_history": "🗑 Limpar histórico",
    "btn.copy_history": "📋 Copiar histórico",
    "btn.mark_done": "✅ Marcar como feito",
    "btn.copy": "📋 Copiar",
    "btn.undo": "Desfazer",

    "help.btn": "❓ Como usar",
    "help.title": "Como usar o RandomiseMe",
    "help.body": "1. Adiciona projetos manualmente ou importa uma lista .txt/.csv.<br><br>2. Toca em 🎲 para escolher um projeto ao acaso.<br><br>3. 🗑 repõe a lista ativa (Concluídos e Histórico ficam).<br><br>As listas importadas podem ser separadas por vírgulas, ponto e vírgula, quebras de linha ou tab.<br><br>4. As entradas podem ser marcadas como concluídas e restauradas.<br><br>5. O histórico e os concluídos podem ser limpos quando precisares.<br><br>Nota: a lista é guardada localmente no browser. Se apagares os dados deste site, ela perde-se.",
    "help.update_hint": "Se a app no ecrã inicial não atualizar corretamente:",
    "help.reload": "🔄 Recarregar app",

    "iconpicker.note": "Depois de alterar, volta a adicionar / instalar.",
    "iconpicker.title": "Cor do ícone (instalação)",
    "footer.created": "RandomiseMe! – criado por Nico Siedler",
    "footer.license": "Versão 0.7a 02/2026 publicada sob GPL3",

    "confirm.clear": "Limpar todos os projetos ativos? (Feitos e histórico ficam.)",
    "confirm.clear_done": "Limpar a lista de feitos?",
    "confirm.clear_history": "Limpar o histórico?",

    "alert.no_projects": "Ainda não adicionaste projetos!",
    "alert.import_finished": "Importação concluída: {count} novos projetos adicionados.",
    "alert.import_restored": "(+{count} restaurados)",
    "alert.nothing_to_copy": "Ainda não há nada para copiar.",

    "toast.copied": "Copiado para a área de transferência.",
    "toast.deleted": "Eliminado: {name}",
    "toast.done": "Marcado como feito: {name}",
    "toast.restored": "Restaurado: {name}",
    "toast.cleared_active": "Lista ativa limpa.",
    "toast.cleared_done": "Lista de feitos limpa.",
    "toast.cleared_history": "Histórico limpo.",

    "history.roll": "Sorteado",
    "history.done": "Feito",
    "history.restore": "Restaurado",
    "history.delete": "Eliminado",

    "aria.delete": "Eliminar",
    "aria.done": "Marcar como feito",
    "aria.restore": "Restaurar",
    "aria.copy": "Copiar",
    "aria.undo": "Desfazer",

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
    "lang.name": "🇸🇪 SV",
    "lang.label": "Språk",
    "flavour.text": "Hej, hur mår du i dag? <br> Nu väljer vi ett projekt! :)",
    "input.placeholder": "Skriv projektnamn",
    "btn.add": "Lägg till",
    "btn.import": "📂 Importera lista (txt eller csv)",
    "heading.list": "Mina pågående projekt:",
    "btn.clear": "🗑 Rensa allt",
    "btn.roll": "🎲 Kör!",

    "heading.done": "Klar:",
    "heading.history": "Historik:",
    "btn.clear_done": "🧹 Rensa klara",
    "btn.clear_history": "🗑 Rensa historik",
    "btn.copy_history": "📋 Kopiera historik",
    "btn.mark_done": "✅ Markera som klar",
    "btn.copy": "📋 Kopiera",
    "btn.undo": "Ångra",

    "help.btn": "❓ Hjälp",
    "help.title": "Så använder du RandomiseMe",
    "help.body": "1. Lägg till projekt manuellt eller importera en .txt/.csv-lista.<br><br>2. Tryck på 🎲 för att slumpa fram ett projekt.<br><br>3. 🗑 nollställer den aktiva listan (Klart & Historik behålls).<br><br>Importerade listor kan separeras med kommatecken, semikolon, radbrytningar eller tabbar.<br><br>4. Poster kan markeras som klara och återställas.<br><br>5. Historik och klara poster kan rensas vid behov.<br><br>Obs: listan sparas lokalt i din webbläsare. Om du rensar webbplatsens data försvinner den.",
    "help.update_hint": "Om appen på hemskärmen inte uppdateras som den ska:",
    "help.reload": "🔄 Ladda om appen",

    "iconpicker.note": "Efter ändring: installera/lägg till igen.",
    "iconpicker.title": "Ikonfärg (installation)",
    "footer.created": "RandomiseMe! – skapad av Nico Siedler",
    "footer.license": "Version 0.7a 02/2026 publicerad under GPL3",

    "confirm.clear": "Rensa alla aktiva projekt? (Klara + historik sparas.)",
    "confirm.clear_done": "Rensa listan med klara?",
    "confirm.clear_history": "Rensa historiken?",

    "alert.no_projects": "Inga projekt har lagts till ännu!",
    "alert.import_finished": "Importen klar: {count} nya projekt lades till.",
    "alert.import_restored": "(+{count} återställda)",
    "alert.nothing_to_copy": "Inget att kopiera ännu.",

    "toast.copied": "Kopierat till urklipp.",
    "toast.deleted": "Raderat: {name}",
    "toast.done": "Markerat som klart: {name}",
    "toast.restored": "Återställt: {name}",
    "toast.cleared_active": "Aktiva listan rensad.",
    "toast.cleared_done": "Klara listan rensad.",
    "toast.cleared_history": "Historiken rensad.",

    "history.roll": "Slumpat",
    "history.done": "Klart",
    "history.restore": "Återställt",
    "history.delete": "Raderat",

    "aria.delete": "Radera",
    "aria.done": "Markera som klar",
    "aria.restore": "Återställ",
    "aria.copy": "Kopiera",
    "aria.undo": "Ångra",

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
    "lang.name": "🇩🇰 DA",
    "lang.label": "Sprog",
    "flavour.text": "Hej, hvordan har du det i dag? <br> Lad os vælge et projekt! :)",
    "input.placeholder": "Indtast projektnavn",
    "btn.add": "Tilføj",
    "btn.import": "📂 Importér liste (txt eller csv)",
    "heading.list": "Mine igangværende projekter:",
    "btn.clear": "🗑 Ryd alt",
    "btn.roll": "🎲 Kom så!",

    "heading.done": "Færdig:",
    "heading.history": "Historik:",
    "btn.clear_done": "🧹 Ryd færdige",
    "btn.clear_history": "🗑 Ryd historik",
    "btn.copy_history": "📋 Kopiér historik",
    "btn.mark_done": "✅ Markér som færdig",
    "btn.copy": "📋 Kopiér",
    "btn.undo": "Fortryd",

    "help.btn": "❓ Hjælp",
    "help.title": "Sådan bruger du RandomiseMe",
    "help.body": "1. Tilføj projekter manuelt eller importér en .txt/.csv-liste.<br><br>2. Tryk på 🎲 for at vælge et projekt tilfældigt.<br><br>3. 🗑 nulstiller den aktive liste (Færdige & Historik bevares).<br><br>Importerede lister kan være adskilt med kommaer, semikolon, linjeskift eller tabulatorer.<br><br>4. Elementer kan markeres som færdige og gendannes.<br><br>5. Historik og færdige elementer kan ryddes efter behov.<br><br>Note: din liste gemmes lokalt i browseren. Hvis du sletter webstedets data, forsvinder den.",
    "help.update_hint": "Hvis appen på hjemmeskærmen ikke opdaterer korrekt:",
    "help.reload": "🔄 Genindlæs app",

    "iconpicker.note": "Efter ændring: installér/tilføj igen.",
    "iconpicker.title": "Ikonfarve (installation)",
    "footer.created": "RandomiseMe! – lavet af Nico Siedler",
    "footer.license": "Version 0.7a 02/2026 udgivet under GPL3",

    "confirm.clear": "Ryd alle aktive projekter? (Færdige + historik bliver.)",
    "confirm.clear_done": "Ryd listen over færdige?",
    "confirm.clear_history": "Ryd historikken?",

    "alert.no_projects": "Der er endnu ikke tilføjet projekter!",
    "alert.import_finished": "Import færdig: {count} nye projekter blev tilføjet.",
    "alert.import_restored": "(+{count} gendannet)",
    "alert.nothing_to_copy": "Intet at kopiere endnu.",

    "toast.copied": "Kopieret til udklipsholder.",
    "toast.deleted": "Slettet: {name}",
    "toast.done": "Markeret som færdig: {name}",
    "toast.restored": "Gendannet: {name}",
    "toast.cleared_active": "Aktiv liste ryddet.",
    "toast.cleared_done": "Færdig-liste ryddet.",
    "toast.cleared_history": "Historik ryddet.",

    "history.roll": "Valgt",
    "history.done": "Færdig",
    "history.restore": "Gendannet",
    "history.delete": "Slettet",

    "aria.delete": "Slet",
    "aria.done": "Markér som færdig",
    "aria.restore": "Gendan",
    "aria.copy": "Kopiér",
    "aria.undo": "Fortryd",

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
    "lang.name": "🇷🇺 RU",
    "lang.label": "Язык",
    "flavour.text": "Привет, как ты сегодня? <br> Давай выберем проект! :)",
    "input.placeholder": "Введите название проекта",
    "btn.add": "Добавить",
    "btn.import": "📂 Импорт списка (txt или csv)",
    "heading.list": "Мои незаконченные проекты:",
    "btn.clear": "🗑 Очистить всё",
    "btn.roll": "🎲 Поехали!",

    "heading.done": "Сделано:",
    "heading.history": "История:",
    "btn.clear_done": "🧹 Очистить «Сделано»",
    "btn.clear_history": "🗑 Очистить историю",
    "btn.copy_history": "📋 Копировать историю",
    "btn.mark_done": "✅ Отметить как сделано",
    "btn.copy": "📋 Копировать",
    "btn.undo": "Отменить",

    "help.btn": "❓ Как пользоваться",
    "help.title": "Как пользоваться RandomiseMe",
    "help.body": "1. Добавляйте проекты вручную или импортируйте список .txt/.csv.<br><br>2. Нажмите 🎲, чтобы случайно выбрать один проект.<br><br>3. 🗑 очищает активный список (Готово и История остаются).<br><br>В импортируемых списках разделителями могут быть запятые, точки с запятой, переносы строк или табуляция.<br><br>4. Записи можно отмечать как выполненные и восстанавливать.<br><br>5. Историю и выполненные проекты можно очищать при необходимости.<br><br>Примечание: список хранится локально в вашем браузере. Если удалить данные этого сайта, список пропадёт.",
    "help.update_hint": "Если приложение на домашнем экране не обновляется корректно:",
    "help.reload": "🔄 Перезагрузить приложение",

    "iconpicker.note": "После смены установите/добавьте заново.",
    "iconpicker.title": "Цвет иконки (установка)",
    "footer.created": "RandomiseMe! – автор: Nico Siedler",
    "footer.license": "Версия 0.7a 02/2026 опубликовано под GPL3",

    "confirm.clear": "Очистить все активные проекты? («Сделано» и история останутся.)",
    "confirm.clear_done": "Очистить список «Сделано»?",
    "confirm.clear_history": "Очистить историю?",

    "alert.no_projects": "Проекты ещё не добавлены!",
    "alert.import_finished": "Импорт завершён: добавлено новых проектов — {count}.",
    "alert.import_restored": "(+{count} восстановлено)",
    "alert.nothing_to_copy": "Пока нечего копировать.",

    "toast.copied": "Скопировано в буфер обмена.",
    "toast.deleted": "Удалено: {name}",
    "toast.done": "Отмечено как сделано: {name}",
    "toast.restored": "Восстановлено: {name}",
    "toast.cleared_active": "Активный список очищен.",
    "toast.cleared_done": "Список «Сделано» очищен.",
    "toast.cleared_history": "История очищена.",

    "history.roll": "Выбрано",
    "history.done": "Сделано",
    "history.restore": "Восстановлено",
    "history.delete": "Удалено",

    "aria.delete": "Удалить",
    "aria.done": "Отметить как сделано",
    "aria.restore": "Восстановить",
    "aria.copy": "Копировать",
    "aria.undo": "Отменить",

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
    "lang.name": "🇨🇿 CS",
    "lang.label": "Jazyk",
    "flavour.text": "Ahoj, jak se máš dnes? <br> Vyberme si projekt! :)",
    "input.placeholder": "Zadej název projektu",
    "btn.add": "Přidat",
    "btn.import": "📂 Importovat seznam (txt nebo csv)",
    "heading.list": "Moje rozpracované projekty:",
    "btn.clear": "🗑 Smazat vše",
    "btn.roll": "🎲 Jdeme na to!",

    "heading.done": "Hotovo:",
    "heading.history": "Historie:",
    "btn.clear_done": "🧹 Vymazat hotové",
    "btn.clear_history": "🗑 Vymazat historii",
    "btn.copy_history": "📋 Kopírovat historii",
    "btn.mark_done": "✅ Označit jako hotovo",
    "btn.copy": "📋 Kopírovat",
    "btn.undo": "Zpět",

    "help.btn": "❓ Návod",
    "help.title": "Jak používat RandomiseMe",
    "help.body": "1. Přidej projekty ručně nebo importuj seznam .txt/.csv.<br><br>2. Klikni na 🎲 a náhodně vyber jeden projekt.<br><br>3. 🗑 vymaže aktivní seznam (Hotovo a Historie zůstávají).<br><br>Importované seznamy mohou být oddělené čárkami, středníky, konci řádků nebo tabulátory.<br><br>4. Položky lze označit jako hotové a obnovit.<br><br>5. Historii a hotové položky lze podle potřeby vymazat.<br><br>Poznámka: seznam se ukládá lokálně v prohlížeči. Když smažeš data tohoto webu, seznam zmizí.",
    "help.update_hint": "Pokud se aplikace na domovské obrazovce neaktualizuje správně:",
    "help.reload": "🔄 Načíst znovu",

    "iconpicker.note": "Po změně znovu nainstaluj / přidej.",
    "iconpicker.title": "Barva ikony (instalace)",
    "footer.created": "RandomiseMe! – vytvořil Nico Siedler",
    "footer.license": "Verze 0.7a 02/2026 vydáno pod GPL3",

    "confirm.clear": "Smazat všechny aktivní projekty? (Hotovo + historie zůstane.)",
    "confirm.clear_done": "Vymazat seznam hotových?",
    "confirm.clear_history": "Vymazat historii?",

    "alert.no_projects": "Zatím nejsou přidány žádné projekty!",
    "alert.import_finished": "Import dokončen: přidáno {count} nových projektů.",
    "alert.import_restored": "(+{count} obnoveno)",
    "alert.nothing_to_copy": "Zatím není co kopírovat.",

    "toast.copied": "Zkopírováno do schránky.",
    "toast.deleted": "Smazáno: {name}",
    "toast.done": "Označeno jako hotovo: {name}",
    "toast.restored": "Obnoveno: {name}",
    "toast.cleared_active": "Aktivní seznam vymazán.",
    "toast.cleared_done": "Hotové vymazáno.",
    "toast.cleared_history": "Historie vymazána.",

    "history.roll": "Vylosováno",
    "history.done": "Hotovo",
    "history.restore": "Obnoveno",
    "history.delete": "Smazáno",

    "aria.delete": "Smazat",
    "aria.done": "Označit jako hotovo",
    "aria.restore": "Obnovit",
    "aria.copy": "Kopírovat",
    "aria.undo": "Zpět",

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
    "lang.name": "🇳🇴 NO",
    "lang.label": "Språk",
    "flavour.text": "Hei, hvordan har du det i dag? <br> La oss velge et prosjekt! :)",
    "input.placeholder": "Skriv prosjektnavn",
    "btn.add": "Legg til",
    "btn.import": "📂 Importer liste (txt eller csv)",
    "heading.list": "Mine pågående prosjekter:",
    "btn.clear": "🗑 Tøm alt",
    "btn.roll": "🎲 Kjør!",

    "heading.done": "Ferdig:",
    "heading.history": "Historikk:",
    "btn.clear_done": "🧹 Tøm ferdige",
    "btn.clear_history": "🗑 Tøm historikk",
    "btn.copy_history": "📋 Kopier historikk",
    "btn.mark_done": "✅ Merk som ferdig",
    "btn.copy": "📋 Kopier",
    "btn.undo": "Angre",

    "help.btn": "❓ Hjelp",
    "help.title": "Slik bruker du RandomiseMe",
    "help.body": "1. Legg til prosjekter manuelt eller importer en .txt/.csv-liste.<br><br>2. Trykk på 🎲 for å velge et prosjekt tilfeldig.<br><br>3. 🗑 nullstiller den aktive listen (Ferdig og Historikk beholdes).<br><br>Importerte lister kan skilles med komma, semikolon, linjeskift eller tabulator.<br><br>4. Elementer kan markeres som ferdige og gjenopprettes.<br><br>5. Historikk og ferdige elementer kan tømmes ved behov.<br><br>Merk: listen lagres lokalt i nettleseren. Hvis du sletter nettstedets data, forsvinner den.",
    "help.update_hint": "Hvis appen på hjemskjermen ikke oppdaterer riktig:",
    "help.reload": "🔄 Last inn på nytt",

    "iconpicker.note": "Etter endring: installer/legg til på nytt.",
    "iconpicker.title": "Ikonfarge (installasjon)",
    "footer.created": "RandomiseMe! – laget av Nico Siedler",
    "footer.license": "Versjon 0.7a 02/2026 publisert under GPL3",

    "confirm.clear": "Tøm alle aktive prosjekter? (Ferdige + historikk blir.)",
    "confirm.clear_done": "Tømme listen over ferdige?",
    "confirm.clear_history": "Tømme historikken?",

    "alert.no_projects": "Ingen prosjekter er lagt til ennå!",
    "alert.import_finished": "Import ferdig: {count} nye prosjekter ble lagt til.",
    "alert.import_restored": "(+{count} gjenopprettet)",
    "alert.nothing_to_copy": "Ingenting å kopiere ennå.",

    "toast.copied": "Kopiert til utklippstavlen.",
    "toast.deleted": "Slettet: {name}",
    "toast.done": "Merket som ferdig: {name}",
    "toast.restored": "Gjenopprettet: {name}",
    "toast.cleared_active": "Aktiv liste tømt.",
    "toast.cleared_done": "Ferdig-liste tømt.",
    "toast.cleared_history": "Historikk tømt.",

    "history.roll": "Valgt",
    "history.done": "Ferdig",
    "history.restore": "Gjenopprettet",
    "history.delete": "Slettet",

    "aria.delete": "Slett",
    "aria.done": "Merk som ferdig",
    "aria.restore": "Gjenopprett",
    "aria.copy": "Kopier",
    "aria.undo": "Angre",

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
    "lang.name": "🇫🇮 FI",
    "lang.label": "Kieli",
    "flavour.text": "Hei, miten voit tänään? <br> Valitaan projekti! :)",
    "input.placeholder": "Syötä projektin nimi",
    "btn.add": "Lisää",
    "btn.import": "📂 Tuo lista (txt tai csv)",
    "heading.list": "Keskeneräiset projektini:",
    "btn.clear": "🗑 Tyhjennä kaikki",
    "btn.roll": "🎲 Anna mennä!",

    "heading.done": "Valmis:",
    "heading.history": "Historia:",
    "btn.clear_done": "🧹 Tyhjennä valmiit",
    "btn.clear_history": "🗑 Tyhjennä historia",
    "btn.copy_history": "📋 Kopioi historia",
    "btn.mark_done": "✅ Merkitse valmiiksi",
    "btn.copy": "📋 Kopioi",
    "btn.undo": "Kumoa",

    "help.btn": "❓ Ohje",
    "help.title": "Näin käytät RandomiseMe:tä",
    "help.body": "1. Lisää projekteja käsin tai tuo .txt/.csv-lista.<br><br>2. Napauta 🎲 valitaksesi projektin satunnaisesti.<br><br>3. 🗑 tyhjentää aktiivisen listan (Valmiit ja Historia jäävät).<br><br>Tuoduissa listoissa erottimina voivat olla pilkut, puolipisteet, rivinvaihdot tai sarkaimet.<br><br>4. Kohteet voi merkitä valmiiksi ja palauttaa.<br><br>5. Historian ja valmiit voi tyhjentää tarvittaessa.<br><br>Huom: lista tallennetaan paikallisesti selaimeen. Jos poistat tämän sivuston tiedot, lista katoaa.",
    "help.update_hint": "Jos aloitusnäytön sovellus ei päivity oikein:",
    "help.reload": "🔄 Lataa uudelleen",

    "iconpicker.note": "Muutoksen jälkeen asenna/lisää uudelleen.",
    "iconpicker.title": "Kuvakkeen väri (asennus)",
    "footer.created": "RandomiseMe! – tehnyt Nico Siedler",
    "footer.license": "Versio 0.7a 02/2026 julkaistu GPL3-lisenssillä",

    "confirm.clear": "Tyhjennetäänkö kaikki aktiiviset projektit? (Valmiit ja historia jäävät.)",
    "confirm.clear_done": "Tyhjennetäänkö valmiiden lista?",
    "confirm.clear_history": "Tyhjennetäänkö historia?",

    "alert.no_projects": "Projekteja ei ole vielä lisätty!",
    "alert.import_finished": "Tuonti valmis: lisättiin {count} uutta projektia.",
    "alert.import_restored": "(+{count} palautettu)",
    "alert.nothing_to_copy": "Ei vielä mitään kopioitavaa.",

    "toast.copied": "Kopioitu leikepöydälle.",
    "toast.deleted": "Poistettu: {name}",
    "toast.done": "Merkitty valmiiksi: {name}",
    "toast.restored": "Palautettu: {name}",
    "toast.cleared_active": "Aktiivinen lista tyhjennetty.",
    "toast.cleared_done": "Valmiit lista tyhjennetty.",
    "toast.cleared_history": "Historia tyhjennetty.",

    "history.roll": "Arvottu",
    "history.done": "Valmis",
    "history.restore": "Palautettu",
    "history.delete": "Poistettu",

    "aria.delete": "Poista",
    "aria.done": "Merkitse valmiiksi",
    "aria.restore": "Palauta",
    "aria.copy": "Kopioi",
    "aria.undo": "Kumoa",

    "exclamations": [
      "Katso:",
      "Satana...:",
      "Ole hyvä:",
      "No niin:",
      "Arvaa:",
      "Juonenkäänne:",
      "Onnekas sinä:",
      "Mennään:",
      "Ta‑da:",
      "Perkele...:"
    ]
  },

    "uk": {
  "lang.name": "🇺🇦 UK",
  "lang.label": "Мова",
  "flavour.text": "Привіт, як ти сьогодні? <br> Давай виберемо проєкт! :)",
  "input.placeholder": "Введіть назву проєкту",
  "btn.add": "Додати",
  "btn.import": "📂 Імпорт списку (txt або csv)",
  "heading.list": "Мої незавершені проєкти:",
  "btn.clear": "🗑 Очистити все",
  "btn.roll": "🎲 Поїхали!",

  "heading.done": "Зроблено:",
  "heading.history": "Історія:",
  "btn.clear_done": "🧹 Очистити «Зроблено»",
  "btn.clear_history": "🗑 Очистити історію",
  "btn.copy_history": "📋 Скопіювати історію",
  "btn.mark_done": "✅ Позначити як зроблено",
  "btn.copy": "📋 Скопіювати",
  "btn.undo": "Скасувати",

  "help.btn": "❓ Як користуватися",
  "help.title": "Як користуватися RandomiseMe",
  "help.body": "1. Додай проєкти вручну або імпортуй список .txt/.csv.<br><br>2. Натисни 🎲, щоб випадково вибрати один проєкт.<br><br>3. 🗑 очищає активний список (Готово та Історія залишаються).<br><br>У імпортованих списках розділювачами можуть бути коми, крапки з комою, переноси рядка або табуляція.<br><br>4. Записи можна позначати як виконані та відновлювати.<br><br>5. Історію та виконані можна очистити за потреби.<br><br>Примітка: список зберігається локально у браузері. Якщо видалиш дані цього сайту, список зникне.",
  "help.update_hint": "Якщо застосунок на головному екрані не оновлюється коректно:",
  "help.reload": "🔄 Перезавантажити застосунок",

    "iconpicker.note": "Після зміни встанови/додай знову.",
    "iconpicker.title": "Колір іконки (встановлення)",
  "footer.created": "RandomiseMe! – автор: Nico Siedler",
  "footer.license": "Версія 0.7a 02/2026 опубліковано під GPL3",

  "confirm.clear": "Очистити всі активні проєкти? («Зроблено» та історія залишаться.)",
  "confirm.clear_done": "Очистити список «Зроблено»?",
  "confirm.clear_history": "Очистити історію?",

  "alert.no_projects": "Проєкти ще не додані!",
  "alert.import_finished": "Імпорт завершено: додано нових проєктів — {count}.",
  "alert.import_restored": "(+{count} відновлено)",
  "alert.nothing_to_copy": "Поки що нічого копіювати.",

  "toast.copied": "Скопійовано в буфер обміну.",
  "toast.deleted": "Видалено: {name}",
  "toast.done": "Позначено як зроблено: {name}",
  "toast.restored": "Відновлено: {name}",
  "toast.cleared_active": "Активний список очищено.",
  "toast.cleared_done": "Список «Зроблено» очищено.",
  "toast.cleared_history": "Історію очищено.",

  "history.roll": "Обрано",
  "history.done": "Зроблено",
  "history.restore": "Відновлено",
  "history.delete": "Видалено",

  "aria.delete": "Видалити",
  "aria.done": "Позначити як зроблено",
  "aria.restore": "Відновити",
  "aria.copy": "Скопіювати",
  "aria.undo": "Скасувати",

  "exclamations": [
    "Дивись:",
    "Бам:",
    "Тримай:",
    "Ну що ж:",
    "Вгадай:",
    "Оце так поворот:",
    "Пощастило тобі:",
    "Поїхали:",
    "Та-дам:",
    "Et voilà:"
  ]
},

"el": {
  "lang.name": "🇬🇷 GR",
  "lang.label": "Γλώσσα",
  "flavour.text": "Γεια σου, πώς είσαι σήμερα; <br> Πάμε να διαλέξουμε ένα πρότζεκτ! :)",
  "input.placeholder": "Πληκτρολόγησε το όνομα του πρότζεκτ",
  "btn.add": "Προσθήκη",
  "btn.import": "📂 Εισαγωγή (txt ή csv)",
  "heading.list": "Τα ανολοκλήρωτα πρότζεκτ μου:",
  "btn.clear": "🗑 Εκκαθάριση",
  "btn.roll": "🎲 Κλήρωση",

  "heading.done": "Ολοκληρωμένα:",
  "heading.history": "Ιστορικό:",
  "btn.clear_done": "🧹 Εκκαθάριση",
  "btn.clear_history": "🗑 Εκκαθάριση",
  "btn.copy_history": "📋 Αντιγραφή",
  "btn.mark_done": "✅ Ολοκληρώθηκε",
  "btn.copy": "📋 Αντιγραφή",
  "btn.undo": "Αναίρεση",

  "help.btn": "❓ Βοήθεια",
  "help.title": "Πώς να χρησιμοποιήσεις το RandomiseMe",
  "help.body": "1. Πρόσθεσε πρότζεκτ χειροκίνητα ή εισήγαγε λίστα .txt/.csv.<br><br>2. Πάτησε 🎲 για να επιλέξεις τυχαία ένα πρότζεκτ.<br><br>3. 🗑 μηδενίζει την ενεργή λίστα (Ολοκληρωμένα & Ιστορικό μένουν).<br><br>Στις λίστες εισαγωγής, διαχωριστικά μπορούν να είναι κόμματα, ερωτηματικά/άνω τελείες (;), αλλαγές γραμμής ή tab.<br><br>4. Οι εγγραφές μπορούν να σημειωθούν ως ολοκληρωμένες και να επαναφερθούν.<br><br>5. Το ιστορικό και τα ολοκληρωμένα μπορούν να καθαριστούν όταν χρειάζεται.<br><br>Σημείωση: η λίστα αποθηκεύεται τοπικά στον browser. Αν διαγράψεις τα δεδομένα αυτής της σελίδας, θα χαθεί.",
  "help.update_hint": "Αν η εφαρμογή στην αρχική οθόνη δεν ενημερώνεται σωστά:",
  "help.reload": "🔄 Επαναφόρτωση εφαρμογής",

    "iconpicker.note": "Μετά την αλλαγή, πρόσθεσε/εγκατέστησε ξανά.",
    "iconpicker.title": "Χρώμα εικονιδίου (εγκατάσταση)",
  "footer.created": "RandomiseMe! – δημιουργός: Nico Siedler",
  "footer.license": "Έκδοση 0.7a 02/2026 δημοσιεύτηκε υπό GPL3",

  "confirm.clear": "Να καθαριστούν όλα τα ενεργά πρότζεκτ; («Ολοκληρωμένα» και ιστορικό θα παραμείνουν.)",
  "confirm.clear_done": "Να καθαριστεί η λίστα «Ολοκληρωμένα»;",
  "confirm.clear_history": "Να καθαριστεί το ιστορικό;",

  "alert.no_projects": "Δεν έχουν προστεθεί ακόμη πρότζεκτ!",
  "alert.import_finished": "Η εισαγωγή ολοκληρώθηκε: προστέθηκαν νέα πρότζεκτ — {count}.",
  "alert.import_restored": "(+{count} επαναφέρθηκαν)",
  "alert.nothing_to_copy": "Δεν υπάρχει κάτι για αντιγραφή ακόμη.",

  "toast.copied": "Αντιγράφηκε στο πρόχειρο.",
  "toast.deleted": "Διαγράφηκε: {name}",
  "toast.done": "Σημειώθηκε ως ολοκληρωμένο: {name}",
  "toast.restored": "Επαναφέρθηκε: {name}",
  "toast.cleared_active": "Η ενεργή λίστα καθαρίστηκε.",
  "toast.cleared_done": "Η λίστα «Ολοκληρωμένα» καθαρίστηκε.",
  "toast.cleared_history": "Το ιστορικό καθαρίστηκε.",

  "history.roll": "Επιλέχθηκε",
  "history.done": "Ολοκληρώθηκε",
  "history.restore": "Επαναφέρθηκε",
  "history.delete": "Διαγράφηκε",

  "aria.delete": "Διαγραφή",
  "aria.done": "Σήμανση ως ολοκληρωμένο",
  "aria.restore": "Επαναφορά",
  "aria.copy": "Αντιγραφή",
  "aria.undo": "Αναίρεση",

  "exclamations": [
    "Κοίτα:",
    "Μπαμ:",
    "Ορίστε:",
    "Λοιπόν:",
    "Μάντεψε:",
    "Ανατροπή!",
    "Σου έκατσε:",
    "Πάμε:",
    "Τα-νταμ:",
    "Et voilà:"
  ]
},

"nl": {
  "lang.name": "🇳🇱 NL",
  "lang.label": "Taal",
  "flavour.text": "Hoi, hoe gaat het vandaag? <br> Laten we een project uitkiezen! :)",
  "input.placeholder": "Voer de projectnaam in",
  "btn.add": "Toevoegen",
  "btn.import": "📂 Lijst importeren (txt of csv)",
  "heading.list": "Mijn onafgemaakte projecten:",
  "btn.clear": "🗑 Alles wissen",
  "btn.roll": "🎲 Kom maar op!",

  "heading.done": "Gedaan:",
  "heading.history": "Geschiedenis:",
  "btn.clear_done": "🧹 «Gedaan» wissen",
  "btn.clear_history": "🗑 Geschiedenis wissen",
  "btn.copy_history": "📋 Geschiedenis kopiëren",
  "btn.mark_done": "✅ Markeren als gedaan",
  "btn.copy": "📋 Kopiëren",
  "btn.undo": "Ongedaan maken",

  "help.btn": "❓ Hoe werkt het",
  "help.title": "Zo gebruik je RandomiseMe",
  "help.body": "1. Voeg projecten handmatig toe of importeer een .txt/.csv-lijst.<br><br>2. Tik op 🎲 om willekeurig één project te kiezen.<br><br>3. 🗑 wist de actieve lijst (Klaar & Geschiedenis blijven).<br><br>Geïmporteerde lijsten mogen gescheiden zijn door komma’s, puntkomma’s, regeleinden of tabs.<br><br>4. Items kunnen als klaar worden gemarkeerd en worden hersteld.<br><br>5. Geschiedenis en klaar kunnen indien nodig worden gewist.<br><br>Let op: je lijst wordt lokaal in je browser opgeslagen. Als je de sitegegevens wist, ben je alles kwijt.",
  "help.update_hint": "Als de app op het startscherm niet goed wordt bijgewerkt:",
  "help.reload": "🔄 App opnieuw laden",

    "iconpicker.note": "Na wijziging: opnieuw installeren/toevoegen.",
    "iconpicker.title": "Icoonkleur (installatie)",
  "footer.created": "RandomiseMe! – gemaakt door: Nico Siedler",
  "footer.license": "Versie 0.7a 02/2026 gepubliceerd onder GPL3",

  "confirm.clear": "Alle actieve projecten wissen? («Gedaan» en geschiedenis blijven behouden.)",
  "confirm.clear_done": "De lijst «Gedaan» wissen?",
  "confirm.clear_history": "De geschiedenis wissen?",

  "alert.no_projects": "Er zijn nog geen projecten toegevoegd!",
  "alert.import_finished": "Import voltooid: nieuwe projecten toegevoegd — {count}.",
  "alert.import_restored": "(+{count} hersteld)",
  "alert.nothing_to_copy": "Er is nog niets om te kopiëren.",

  "toast.copied": "Gekopieerd naar het klembord.",
  "toast.deleted": "Verwijderd: {name}",
  "toast.done": "Gemarkeerd als gedaan: {name}",
  "toast.restored": "Hersteld: {name}",
  "toast.cleared_active": "Actieve lijst gewist.",
  "toast.cleared_done": "Lijst «Gedaan» gewist.",
  "toast.cleared_history": "Geschiedenis gewist.",

  "history.roll": "Gekozen",
  "history.done": "Gedaan",
  "history.restore": "Hersteld",
  "history.delete": "Verwijderd",

  "aria.delete": "Verwijderen",
  "aria.done": "Markeren als gedaan",
  "aria.restore": "Herstellen",
  "aria.copy": "Kopiëren",
  "aria.undo": "Ongedaan maken",

  "exclamations": [
    "Kijk:",
    "Bam:",
    "Hier:",
    "Nou dan:",
    "Raad eens:",
    "Wat een wending:",
    "Jij boft:",
    "Kom op:",
    "Ta-da:",
    "Et voilà:"
  ]
},

  "tr": {
  "lang.name": "🇹🇷 TR",
  "lang.label": "Dil",
  "flavour.text": "Selam, bugün nasılsın? <br> Hadi bir proje seçelim! :)",
  "input.placeholder": "Proje adını gir",
  "btn.add": "Ekle",
  "btn.import": "📂 Listeyi içe aktar (txt veya csv)",
  "heading.list": "Bitmemiş projelerim:",
  "btn.clear": "🗑 Hepsini temizle",
  "btn.roll": "🎲 Haydi!",

  "heading.done": "Tamamlananlar:",
  "heading.history": "Geçmiş:",
  "btn.clear_done": "🧹 «Tamamlananlar»ı temizle",
  "btn.clear_history": "🗑 Geçmişi temizle",
  "btn.copy_history": "📋 Geçmişi kopyala",
  "btn.mark_done": "✅ Tamamlandı olarak işaretle",
  "btn.copy": "📋 Kopyala",
  "btn.undo": "Geri al",

  "help.btn": "❓ Nasıl kullanılır",
  "help.title": "RandomiseMe nasıl kullanılır",
  "help.body": "1. Projeleri elle ekle veya .txt/.csv listesini içe aktar.<br><br>2. Rastgele bir proje seçmek için 🎲’ye dokun.<br><br>3. 🗑 etkin listeyi sıfırlar (Tamamlananlar ve Geçmiş kalır).<br><br>İçe aktarılan listeler virgül, noktalı virgül, satır sonu veya sekme ile ayrılabilir.<br><br>4. Öğeler tamamlandı olarak işaretlenebilir ve geri yüklenebilir.<br><br>5. Geçmiş ve tamamlananlar gerektiğinde temizlenebilir.<br><br>Not: listen tarayıcında yerel olarak saklanır. Bu sitenin verilerini silersen liste kaybolur.",
  "help.update_hint": "Ana ekrandaki uygulama doğru şekilde güncellenmiyorsa:",
  "help.reload": "🔄 Uygulamayı yeniden yükle",

    "iconpicker.note": "Değişiklikten sonra yeniden yükle/ekle.",
    "iconpicker.title": "Simge rengi (yükleme)",
  "footer.created": "RandomiseMe! – yapan: Nico Siedler",
  "footer.license": "Sürüm 0.7a 02/2026 GPL3 ile yayımlandı",

  "confirm.clear": "Tüm aktif projeler temizlensin mi? («Tamamlananlar» ve geçmiş kalacak.)",
  "confirm.clear_done": "«Tamamlananlar» listesi temizlensin mi?",
  "confirm.clear_history": "Geçmiş temizlensin mi?",

  "alert.no_projects": "Henüz proje eklenmedi!",
  "alert.import_finished": "İçe aktarma tamamlandı: yeni eklenen proje sayısı — {count}.",
  "alert.import_restored": "(+{count} geri yüklendi)",
  "alert.nothing_to_copy": "Henüz kopyalanacak bir şey yok.",

  "toast.copied": "Panoya kopyalandı.",
  "toast.deleted": "Silindi: {name}",
  "toast.done": "Tamamlandı olarak işaretlendi: {name}",
  "toast.restored": "Geri yüklendi: {name}",
  "toast.cleared_active": "Aktif liste temizlendi.",
  "toast.cleared_done": "«Tamamlananlar» listesi temizlendi.",
  "toast.cleared_history": "Geçmiş temizlendi.",

  "history.roll": "Seçildi",
  "history.done": "Tamamlandı",
  "history.restore": "Geri yüklendi",
  "history.delete": "Silindi",

  "aria.delete": "Sil",
  "aria.done": "Tamamlandı olarak işaretle",
  "aria.restore": "Geri yükle",
  "aria.copy": "Kopyala",
  "aria.undo": "Geri al",

  "exclamations": [
    "Bak:",
    "Bam:",
    "Al bakalım:",
    "Pekâlâ:",
    "Tahmin et:",
    "Ne ters köşe:",
    "Şanslısın:",
    "Haydi:",
    "Ta-daa:",
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
    const select = document.getElementById("langSelect");
    if(select){
      select.addEventListener("change", (e)=> setLang(e.target.value));
      select.value = currentLang;
    }
    applyTranslations();
  });
})();
