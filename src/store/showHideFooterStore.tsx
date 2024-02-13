import { create } from "zustand";

interface ShowHideFooterState {
  showHideFooter: boolean;
  // Modifica la definición para aceptar un parámetro booleano
  toggleFooter: (value: boolean) => void;
}

const useShowHideFooterStore = create<ShowHideFooterState>((set) => ({
  showHideFooter: false, // Estado inicial
  // Actualiza toggleFooter para aceptar y establecer un valor booleano
  toggleFooter: (value: boolean) => set(() => ({ showHideFooter: value })),
}));

export default useShowHideFooterStore;
