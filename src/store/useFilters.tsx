import { create } from "zustand";

interface StringState {
  filters: string;
  setFilters: (newValue: string) => void;
}

const useFilters = create<StringState>((set) => ({
  filters: "",
  setFilters: (newValue) => set({ filters: newValue }),
}));

export default useFilters;
