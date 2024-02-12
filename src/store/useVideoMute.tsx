import { create } from "zustand";

interface VideosMutedStore {
  muted: boolean;
  toggleMute: () => void;
}

const useVideoMute = create<VideosMutedStore>((set) => ({
  muted: true,
  toggleMute: () =>
    set((state) => ({
      muted: !state.muted,
    })),
}));

export default useVideoMute;
