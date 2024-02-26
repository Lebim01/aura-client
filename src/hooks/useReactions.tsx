import { useEffect, useState } from "react";
import axiosInstance from "@/services";

const useVideos = (apiUrl: string) => {
  const [isLoading, setLoading] = useState(false);
  const [videos, setVideos] = useState<any[]>([]);

  const getVideos = async () => {
    try {
      setLoading(true);
      const videos_result = await axiosInstance.get(apiUrl);
      setVideos((prevVideos: any) => {
        return [...prevVideos, ...videos_result.data];
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMore = () => {
    getVideos();
  };

  useEffect(() => {
    getVideos();
  }, [apiUrl]);

  const likeVideo = async (id: string, index: number) => {
    try {
      setVideos((prevVideos: any) => {
        let _videos = prevVideos;
        _videos[index].like_me = true;
        return _videos;
      });

      const like_result = await axiosInstance.get(`/likes/video/${id}`);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return {
    videos,
    isLoading,
    fetchMore,
    likeVideo,
  };
};

export default useVideos;
