import { create } from "zustand";

export const useJourneys = create(() => ({
  journeys: [],
  loading: false,
}));
