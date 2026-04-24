import { useState } from "react";
import { InputForm } from "../components/InputForm";
import { ResultList } from "../components/ResultList";
import { generatePackingList } from "../utils/generatePackingList";
import type { TravelFormData } from "../models/travel";

export default function Home() {
  const [packingList, setPackingList] = useState<string[]>([]);
  const [loading] = useState(false);
  const [destination, setDestination] = useState("");

function handleTravelSubmit(data: TravelFormData) {
  setDestination(data.destination);
  const result = generatePackingList(data);
  setPackingList(result);
}

  return (
    <div className="container">
      <h1>Reisegepäck-Planer</h1>

      <div className="card">
        <InputForm onSubmitTravel={handleTravelSubmit} />
      </div>

      <div className="card">
        {loading ? <p>Packliste wird erstellt...</p> : <ResultList items={packingList} destination={destination} />}
      </div>
    </div>
  );
}