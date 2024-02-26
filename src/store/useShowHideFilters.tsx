import { create } from "zustand";

interface ShowHideFiltersState {
  showHideFilters: boolean;
  toggleFilters: (value: boolean) => void;
}

const useShowHideFilters = create<ShowHideFiltersState>((set) => ({
  showHideFilters: true,
  toggleFilters: (value: boolean) => set(() => ({ showHideFilters: value })),
}));

export default useShowHideFilters;
