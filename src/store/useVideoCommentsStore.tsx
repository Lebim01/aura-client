import { create } from "zustand";
import { getComments } from "@/services/videos";
import { commentVideo } from "@/services/videos";
import { commentDelete } from "@/services/videos";

interface VideoCommentsState {
  commentsVideos: any[];
  loading: boolean;
  currentPage: number;
  hasMore: boolean;
  getVideoComments: (id_video: string, page: number) => Promise<void>;
  setCommentsVideos: (comments: any[]) => void;
  postComment: (comment: any, id_video: string) => void;
  deleteComment: (id_comment: string) => void;
  fetchMoreComments: (id_video: string) => Promise<void>;
}

const useVideoCommentsStore = create<VideoCommentsState>((set, get) => ({
  commentsVideos: [],
  loading: false,
  hasMore: true,
  currentPage: 1,

  getVideoComments: async (id_video: string, page: number = 1) => {
    set({ loading: true });
    try {
      const res_comments = await getComments(id_video, page);
      set((state) => ({
        commentsVideos:
          page === 1
            ? res_comments.data.results
            : [...state.commentsVideos, ...res_comments.data.results],
        hasMore: res_comments.data.has_more,
        currentPage: page,
      }));
      set({ loading: false });
    } catch (e) {
      console.error(e);
    } finally {
      set({ loading: false });
    }
  },

  fetchMoreComments: async (id_video: string) => {
    const { hasMore, currentPage } = get();
    if (!hasMore) return;
    const nextPage = currentPage + 1;
    get().getVideoComments(id_video, nextPage);
  },

  postComment: async (comment: any, id_video: string) => {
    set({ loading: true });
    try {
      set((state) => ({
        commentsVideos: [comment, ...state.commentsVideos],
      }));
      const res_comment = await commentVideo({
        videoID: id_video,
        comment: comment.comment.comment,
      });

      const realId = res_comment.data[0].comment.id;

      set((state) => ({
        commentsVideos: state.commentsVideos.map((c) =>
          c.comment.id === comment.comment.id
            ? { ...c, comment: { ...c.comment, id: realId } }
            : c
        ),
      }));
    } catch (e) {
      console.error(e);
    } finally {
      set({ loading: false });
    }
  },

  deleteComment: async (id_comment: string) => {
    set({ loading: true });
    try {
      set((state) => ({
        commentsVideos: state.commentsVideos.filter(
          (item) => item.comment.id !== id_comment
        ),
      }));
      await commentDelete(id_comment);
    } catch (e) {
      console.error(e);
    } finally {
      set({ loading: false });
    }
  },

  setCommentsVideos: (comment: any) => {
    set((state) => ({
      commentsVideos: [...state.commentsVideos, comment],
    }));
  },
}));

export default useVideoCommentsStore;
