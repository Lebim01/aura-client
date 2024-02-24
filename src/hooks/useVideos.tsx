import { create } from "zustand";
import { api } from "@/hooks/axios";

// Definición de la interfaz para el estado de los videos
interface Video {
  // Define aquí las propiedades de tus videos, por ejemplo:
  watched: boolean;
  id: string;
  title: string;
  like_me: boolean;
  url: string;
  likes: number;
}

// Interfaz para el estado y las acciones de la tienda
interface VideoState {
  isLoading: boolean;
  videos: Video[];
  setLoading: (isLoading: boolean) => void;
  setVideos: (videos: Video[]) => void;
  getVideos: (apiUrl: string) => Promise<void>;
  fetchMore: (apiUrl: string) => void;
  likeVideo: (id: string) => Promise<void>;
  disLikeVideo: (id: string) => Promise<void>;
}

// Creación de la tienda con Zustand
const useVideoStore = create<VideoState>((set, get) => ({
  isLoading: false,
  videos: [],

  setLoading: (isLoading) => set(() => ({ isLoading })),

  setVideos: (videos) => set(() => ({ videos })),

  getVideos: async (apiUrl) => {
    try {
      get().setLoading(true);
      const videos_result = await api.get(apiUrl);
      set((state) => ({
        videos: [...state.videos, ...(videos_result.data as Video[])], // Asegúrate de que la respuesta coincide con la estructura de Video[]
      }));
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
          video.id === id ? { ...video, like_me: true } : video
        );
        return { videos: newVideos };
      });
      await api.post(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  },

  disLikeVideo: async (id) => {
    try {
      set((state) => {
        const newVideos = state.videos.map((video) =>
          video.id === id ? { ...video, like_me: false } : video
        );
        return { videos: newVideos };
      });
      await api.delete(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useVideoStore;
