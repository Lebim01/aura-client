import { create } from "zustand";

interface ShowHideFooterState {
  showHideFooter: boolean;
  toggleFooter: () => void;
}

const useShowHideFooterStore = create<ShowHideFooterState>((set) => ({
  showHideFooter: false, // Estado inicial
  toggleFooter: () =>
    set((state) => ({ showHideFooter: !state.showHideFooter })),
}));

export default useShowHideFooterStore;
