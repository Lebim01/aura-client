import { create } from "zustand";

interface ShowHideFooterState {
  showHideFooter: boolean;
  toggleFooter: (value: boolean) => void;
}

const useShowHideFooterStore = create<ShowHideFooterState>((set) => ({
  showHideFooter: false,
  toggleFooter: (value: boolean) => set(() => ({ showHideFooter: value })),
}));

export default useShowHideFooterStore;
