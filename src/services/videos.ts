"use client";
import axiosInstance from ".";

export const watchVideo = (id: string): Promise<any> => {
  return axiosInstance.post(`/dashboard/discovery-watched`, {
    id_video: id,
  });
};
