import { useState, useEffect } from "react";
import axiosInstance from "@/services";

function useDiscoveryConsultation(page: number) {
  const [videos, setVideos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchDataAsync = async () => {
    setLoading(true);
    try {
      const result = await axiosInstance.get(`/dashboard/discovery`);
      setVideos(result.data);
    } catch (err) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, [page]);

  return { videos, loading, error };
}

export default useDiscoveryConsultation;
