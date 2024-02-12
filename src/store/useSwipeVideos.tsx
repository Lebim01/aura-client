import { create } from "zustand";

interface Position {
  index: number;
  swipeIndex: number;
}

interface SwipeVideosStore {
  position: Position;
  setIndex: (value: number) => void;
  setSwipeIndex: (value: number) => void;
}

const useSwipeVideos = create<SwipeVideosStore>((set) => ({
  position: {
    index: 0,
    swipeIndex: 0,
  },
  setIndex: (value) =>
    set((state) => ({
      position: {
        ...state.position,
        index: value,
      },
    })),
  setSwipeIndex: (value) =>
    set((state) => ({
      position: {
        ...state.position,
        swipeIndex: value,
      },
    })),
}));

export default useSwipeVideos;
