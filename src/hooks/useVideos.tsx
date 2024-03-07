import { create } from "zustand";
import axiosInstance from "@/services";
import { watchVideo } from "@/services/videos";
// Definición de la interfaz para el estado de los videos
export interface Video {
  // Define aquí las propiedades de tus videos, por ejemplo:
  watched: boolean;
  id: string;
  title: string;
  like_me: boolean;
  url: string;
  hsl: string;
  likes: number;
  comments: number;
  section: string;
}

// Interfaz para el estado y las acciones de la tienda
interface VideoState {
  isLoading: boolean;
  videos: Video[];
  hasMore: boolean;
  setLoading: (isLoading: boolean) => void;
  setVideos: (videos: Video[]) => void;
  getVideos: (apiUrl: string) => Promise<void>;
  fetchMore: (apiUrl: string) => void;
  likeVideo: (id: string) => Promise<void>;
  disLikeVideo: (id: string) => Promise<void>;
  markWatched: (id: string) => Promise<void>;
}

// Creación de la tienda con Zustand
const useVideoStore = create<VideoState>((set, get) => ({
  hasMore: true,
  isLoading: false,
  videos: [],

  setLoading: (isLoading) => set(() => ({ isLoading })),

  setVideos: (videos) => set(() => ({ videos })),

  getVideos: async (apiUrl) => {
    try {
      if (get().isLoading) return;
      if (!get().hasMore) return;

      get().setLoading(true);
      const videos_result = await axiosInstance.get<Video[]>(apiUrl, {
        params: {
          skip: get().videos.length,
        },
      });
      const hasMore = videos_result.data.length > 0;
      set((state) => ({
        videos: [...state.videos, ...videos_result.data],
        hasMore,
      }));
    } catch (e) {
      console.log(e);
    } finally {
      get().setLoading(false);
    }
  },

  markWatched: async (id) => {
    try {
      await watchVideo(id);
    } catch (e) {
      console.log(e);
    } finally {
      get().setLoading(false);
    }
  },

  fetchMore: async (apiUrl) => {
    await get().getVideos(apiUrl);
  },

  likeVideo: async (id: string) => {
    try {
      set((state) => {
        const newVideos = state.videos.map((video) =>
          video.id === id
            ? { ...video, like_me: true, likes: video.likes + 1 }
            : video
        );
        return { videos: newVideos };
      });
      await axiosInstance.post(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  },

  disLikeVideo: async (id) => {
    try {
      set((state) => {
        const newVideos = state.videos.map((video) =>
          video.id === id
            ? { ...video, like_me: false, likes: video.likes - 1 }
            : video
        );
        return { videos: newVideos };
      });
      await axiosInstance.delete(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useVideoStore;
