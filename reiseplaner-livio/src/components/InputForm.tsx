import { useState } from "react";
import type { TravelFormData } from "../models/travel";
import '../styles/App.css'

type Props = {
  onSubmitTravel: (travelData: TravelFormData) => void;
};

export function InputForm({ onSubmitTravel }: Props) {
  const [formData, setFormData] = useState<TravelFormData>({
    destination: "",
    days: 1,
    weather: "",
    travelType: "",
    transport: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    setFormData(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (formData.destination.trim() === "") {
      alert("Bitte Reiseziel eingeben.");
      return;
    }

    onSubmitTravel(formData);
  }

  return (
    <div>
      <h2>Reise Formular</h2>
      <hr />
      <br />

      <fieldset>
        <legend>Reise Informationen</legend>

        <form onSubmit={handleSubmit}>
          <label htmlFor="destination">
            Reiseziel:
            <input
              id="destination"
              required
              type="text"
              name="destination"
              minLength={1}
              maxLength={50}
              value={formData.destination}
              onChange={handleChange}
            />
          </label>

          <br />

          <label htmlFor="days">
            Dauer in Tagen:
            <input
              id="days"
              required
              min={1}
              max={700}
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
            />
          </label>

          <br />

          <label htmlFor="weather">
            Wetter:
            <select
              id="weather"
              required
              name="weather"
              value={formData.weather}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Bitte auswählen...</option>
              <option value="warm">Warm</option>
              <option value="kalt">Kalt</option>
              <option value="gemischt">Gemischt</option>
            </select>
          </label>

          <br />

          <label htmlFor="travelType">
            Reiseart:
            <select
              id="travelType"
              required
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Bitte auswählen...</option>
              <option value="Strandferien">Strandferien</option>
              <option value="Business">Business</option>
              <option value="Backpacking">Backpacking</option>
              <option value="Städtetrip">Städtetrip</option>
            </select>
          </label>

          <br />

          <label htmlFor="transport">
            Transportmittel:
            <select
              id="transport"
              required
              name="transport"
              value={formData.transport}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Bitte auswählen...</option>
              <option value="Auto">Auto</option>
              <option value="Motorrad">Motorrad</option>
              <option value="Zug">Zug</option>
              <option value="Flugzeug">Flugzeug</option>
            </select>
          </label>

          <br />

          <button type="submit">Absenden</button>
        </form>
      </fieldset>
    </div>
  );
}