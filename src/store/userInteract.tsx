import { create } from "zustand";

interface UserInteractedStore {
  interacted: boolean;
  setInteracted: () => void;
}

const useInteractedStore = create<UserInteractedStore>((set) => ({
  interacted: false,
  setInteracted: () =>
    set(() => ({
      interacted: true,
    })),
}));

export default useInteractedStore;
