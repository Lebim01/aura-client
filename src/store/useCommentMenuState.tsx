import { create } from "zustand";

interface useCommentMenuState {
  isOpen: boolean;
  activeMenuId: string | null;
  openMenu: (menuId: string) => void;
  closeMenu: () => void;
  toggleMenuState: (state: boolean) => void;
}

export const useCommentMenuState = create<useCommentMenuState>((set) => ({
  isOpen: false,
  activeMenuId: null,
  openMenu: (menuId) => set(() => ({ isOpen: true, activeMenuId: menuId })),
  closeMenu: () => set(() => ({ isOpen: false, activeMenuId: null })),
  toggleMenuState: (isOpen) => set(() => ({ isOpen })),
}));
