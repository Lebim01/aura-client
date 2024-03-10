import axiosInstance from "@/services";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { watchVideo } from "@/services/videos";
import { Video } from "@/types/video";

type ContextData = {
  videos: Video[];
  fetchMore: (skip?: number) => Promise<void>;
  loading: boolean;
  likeVideo: (id: string) => Promise<void>;
  dislikeVideo: (id: string) => Promise<void>;
  markWatched: (id: string) => Promise<void>;
  error: null | string;
  hasMore: boolean;
  reset: () => void;
};

type Props = {
  url: string;
  children: ReactNode;
  shared?: string;
};

const VideosContext = createContext<ContextData>({
  videos: [],
  fetchMore: () => Promise.resolve(),
  loading: false,
  likeVideo: () => Promise.resolve(),
  dislikeVideo: () => Promise.resolve(),
  markWatched: () => Promise.resolve(),
  error: null,
  hasMore: false,
  reset: () => {},
});

const VideosContextProvider = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<null | string>(null);

  const fetchMore = async (forceSkip?: number) => {
    try {
      if (!hasMore || loading) return;

      const useSkip = forceSkip ?? videos.length;
      setLoading(true);

      const params = [];
      if (useSkip) params.push(`skip=${useSkip}`);
      if (props.shared) params.push(`shared=${props.shared}`);

      const response = await axiosInstance.get<Video[]>(
        props.url + "?" + params.join("&")
      );
      setVideos((prevVideos) =>
        useSkip == 0 ? response.data : [...prevVideos, ...response.data]
      );
      setHasMore(response.data.length >= 3);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const markWatched = async (id: string) => {
    try {
      await watchVideo(id);
    } catch (e) {
      console.log(e);
    }
  };

  const likeVideo = async (id: string) => {
    try {
      setVideos((videos) => {
        const _videos = [...videos];
        const index = _videos.findIndex((r) => r.id === id);
        if (index > -1) {
          _videos[index].like_me = true;
          _videos[index].likes++;
        }
        return _videos;
      });
      await axiosInstance.post(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const dislikeVideo = async (id: string) => {
    try {
      setVideos((videos) => {
        const _videos = [...videos];
        const index = _videos.findIndex((r) => r.id === id);
        if (index > -1) {
          _videos[index].like_me = false;
          _videos[index].likes--;
        }
        return _videos;
      });
      await axiosInstance.delete(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const reset = () => {
    fetchMore(0);
  };

  useEffect(() => {
    fetchMore(0);
  }, [props.url]);

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        markWatched,
        fetchMore,
        likeVideo,
        dislikeVideo,
        error,
        hasMore,
        reset,
      }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideosContext);
};

export default VideosContextProvider;
