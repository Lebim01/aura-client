import { create } from "zustand";

interface VideosMutedStore {
  muted: boolean;
  indexVideo: number | null;
  sectionId: string;
  toggleMute: () => void;
  setIndexVideo: (index: number) => void;
  setSectionId: (id: string) => void;
}

const useVideoMute = create<VideosMutedStore>((set) => ({
  muted: true,
  indexVideo: null,
  sectionId: "",
  toggleMute: () =>
    set((state) => ({
      muted: !state.muted,
    })),
  setIndexVideo: (index: number) =>
    set(() => ({
      indexVideo: index,
    })),
  setSectionId: (id: string) =>
    set(() => ({
      sectionId: id,
    })),
}));

export default useVideoMute;
