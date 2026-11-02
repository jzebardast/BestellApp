# BurgerHouse – Bestell App (Lieferando-Klon)

Responsive Bestell-App für das fiktive Restaurant **BurgerHouse**, umgesetzt nach der Figma-Vorlage.
Reines HTML, CSS und JavaScript – kein Build-Schritt, keine Abhängigkeiten.

## Starten

`index.html` im Browser öffnen (Doppelklick) oder mit der VS-Code-Erweiterung _Live Server_ starten.

## Funktionen

- Restaurant-Kopf mit großem Bild, halb überlappendem Logo, Name, Sternebewertung (4,1 / 317), Beschreibung
  und Lieferinfos (statisch)
- 12 Gerichte in 3 Kategorien (Burger, Pizza, Salad), **dynamisch aus dem Objekt `menuCategories`**
  (`assets/js/data.js`) gerendert
- Gericht per **Add to basket** in den Warenkorb legen (Button zeigt danach „Added n“)
- Warenkorb: Menge mit **+** / **−** ändern; bei Menge 1 wird aus „−“ der Mülleimer, der das Gericht löscht (wie in Figma); Zwischensumme, Liefergebühr (4,99 €), Gesamtsumme
- „Buy now“ leert den Warenkorb und zeigt „Order confirmed!“ (kein `alert`); der Warenkorb verschwindet dabei wie in der Figma-Vorlage und die Meldung blendet nach 6 s aus oder wird per X geschlossen
- Viele Gerichte im Warenkorb: Die Liste scrollt im Container, Summen und Button bleiben sichtbar
- Desktop-Warenkorb ist `sticky`
- Mobil (bis 1024 px): Warenkorb als Dialog, geöffnet über die fixe Navigationsleiste (mit Anzahl und Gesamtwert)
- Inhalt auf 1440 px begrenzt, Header und Footer in voller Breite; getestet von 320 px bis 2560 px ohne horizontalen Scrollbalken

## Projektstruktur

```
index.html
favicon.ico
assets/
  css/   base.css (Tokens, Schriften, Reset) · layout.css · menu.css · basket.css · responsive.css (alle Breakpoints)
  js/    data.js · utils.js · templates.js · basket.js · render.js · dialogs.js · script.js
  img/   Bilder (fürs Web verkleinert), Icons, Favicon
  fonts/ Palanquin (lokal, SIL Open Font License)
```

JavaScript-Konventionen: camelCase, höchstens 14 Zeilen pro Funktion, eine Leerzeile zwischen Funktionen,
alle HTML-Templates in eigenen Funktionen (`templates.js`).

## Umsetzung nach Figma

Alle Maße, Farben, Schriften und Icons stammen aus der Figma-Vorlage (Header-Logo, Menü-, Stern-, Mülleimer-,
Warenkorb- und Navigationsicons sind die originalen Vektoren). Hero 1440 px (oberer Teil unter dem Header), Logo
200 px, Karten 713 × 141 px, Warenkorb 435 × 794 px, Bestätigung 415 × 269 px (mobil 340 × 255 px).

## Extras (für die Mentoren)

- Warenkorb wird im `localStorage` gespeichert und bleibt nach einem Reload erhalten
- Tastatur- und Screenreader-Support (Fokus-Ringe, `aria`-Labels, Live-Region, Skip-Link, `<dialog>`)
- Schriften lokal eingebunden (keine Anfrage an Google Fonts)
- `prefers-reduced-motion` wird respektiert
- Mengenbegrenzung (max. 99 pro Gericht) und Validierung der gespeicherten Daten

## Hinweise

- Das Hamburger-Menü im Header sowie die Profil- und Orders-Symbole in der mobilen Leiste sind laut Figma-Notiz nur Platzhalter.
- _Imprint_ und _Cookie Preferences_ im Footer sind Platzhalter (verlinken nach oben).
- Schriftlizenz: siehe `assets/fonts/LICENSE-Palanquin-OFL.txt`.
