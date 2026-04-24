export type TravelFormData = {
  destination: string;
  days: number;
  weather: "warm" | "kalt" | "gemischt" | "";
  travelType: "Strandferien" | "Business" | "Backpacking" | "Städtetrip" | "";
  transport: "Auto" | "Motorrad" | "Zug" | "Flugzeug" | "";
};