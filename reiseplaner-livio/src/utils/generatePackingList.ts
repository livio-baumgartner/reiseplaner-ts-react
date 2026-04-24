import type { TravelFormData } from "../models/travel";

export function generatePackingList(data: TravelFormData): string[] {
  const list: string[] = [
    "Unterwäsche",
    "Socken",
    "T-Shirts",
    "Hose",
    "Pyjama",
    "Zahnbürste",
    "Zahnpasta",
    "Handy",
    "Ladegerät",
    "Portemonnaie",
  ];

  if (data.weather === "warm") {
    list.push(
      "Sonnencreme",
      "Sonnenbrille",
      "Cap",
      "Shorts",
      "Leichte T-Shirts",
      "Sandalen",
      "After-Sun",
      "Wasserflasche"
    );
  }

  if (data.weather === "kalt") {
    list.push(
      "Warme Jacke",
      "Pullover",
      "Mütze",
      "Handschuhe",
      "Schal",
      "Warme Socken",
      "Thermounterwäsche",
      "Feste Schuhe"
    );
  }

  if (data.weather === "gemischt") {
    list.push(
      "Regenjacke",
      "Regenschirm",
      "Pullover",
      "T-Shirts",
      "Lange Hose",
      "Kurze Hose",
      "Wasserdichte Schuhe",
      "Zwiebellook-Kleidung"
    );
  }

  if (data.travelType === "Strandferien") {
    list.push(
      "Badehose",
      "Badetuch",
      "Strandtuch",
      "Flip-Flops",
      "Strandtasche",
      "Buch",
      "Wasserdichte Handyhülle",
      "Schwimmbrille"
    );
  }

  if (data.travelType === "Business") {
    list.push(
      "Hemd",
      "Anzughose",
      "Schöne Schuhe",
      "Laptop",
      "Laptop-Ladegerät",
      "Notizblock",
      "Stift",
      "Dokumente",
      "Visitenkarten"
    );
  }

  if (data.travelType === "Backpacking") {
    list.push(
      "Rucksack",
      "Powerbank",
      "Wasserflasche",
      "Taschenlampe",
      "Reisehandtuch",
      "Erste-Hilfe-Set",
      "Schlafsack",
      "Karabiner",
      "Taschenmesser"
    );
  }

  if (data.travelType === "Städtetrip") {
    list.push(
      "Bequeme Schuhe",
      "Kleiner Rucksack",
      "Kamera",
      "Stadtplan/App",
      "Powerbank",
      "Kopfhörer",
      "Trinkflasche",
      "Leichte Jacke"
    );
  }

  if (data.transport === "Auto") {
    list.push(
      "Führerschein",
      "Fahrzeugausweis",
      "Parkkarte",
      "Snacks",
      "Getränke",
      "Ladekabel fürs Auto",
      "Sonnenbrille fürs Fahren"
    );
  }

  if (data.transport === "Motorrad") {
    list.push(
      "Helm",
      "Motorradjacke",
      "Motorradhandschuhe",
      "Motorradhose",
      "Nierengurt",
      "Regenkombi",
      "Motorradschuhe"
    );
  }

  if (data.transport === "Zug") {
    list.push(
      "Zugticket",
      "Kopfhörer",
      "Snacks",
      "Getränk",
      "Buch",
      "Powerbank",
      "Rucksack"
    );
  }

  if (data.transport === "Flugzeug") {
    list.push(
      "Pass/ID",
      "Boarding Pass",
      "Handgepäck",
      "Flüssigkeiten-Beutel",
      "Nackenkissen",
      "Kopfhörer",
      "Reiseadapter",
      "Kofferanhänger"
    );
  }

  return [...new Set(list)];
}