"use client";
import axiosInstance from ".";

interface Comment {
  videoID: string;
  comment: string;
}

export const watchVideo = (id: string): Promise<any> => {
  return axiosInstance.post(`/dashboard/discovery-watched`, {
    id_video: id,
  });
};

export const getComments = (id_video: string, page: number): Promise<any> => {
  return axiosInstance.get(`comments/video/${id_video}?limit=10&page=${page}`);
};

export const commentVideo = (data: Comment): Promise<any> => {
  return axiosInstance.post(`comments/video`, data);
};

export const commentDelete = (id_comment: string): Promise<any> => {
  return axiosInstance.delete(`comments/delete/${id_comment}`);
};
