import { create } from "zustand";

interface FilterObject {
  [key: string]: any;
}

interface ObjectState {
  filters: FilterObject;
  setFilters: (
    newValue: FilterObject | ((prevState: FilterObject) => FilterObject)
  ) => void;
  clearFilters: () => Promise<void>;
  removeFilter: (key: string) => void;
}

const useFiltersRecommended = create<ObjectState>((set) => ({
  filters: {},
  setFilters: (newValue) =>
    set((state) => ({
      filters:
        typeof newValue === "function"
          ? newValue(state.filters)
          : { ...state.filters, ...newValue },
    })),
  clearFilters: () =>
    new Promise((resolve) => {
      set({ filters: {} });
      resolve();
    }),
  removeFilter: (key) =>
    set((state) => {
      const { [key]: _, ...newFilters } = state.filters;
      return { filters: newFilters };
    }),
}));

export default useFiltersRecommended;
