"use client";
import axiosInstance from ".";
export const topMexico = (page: number): Promise<any> => {
  return axiosInstance.get(`/dashboard/top-mexico?page=${page}&limit=10`);
};

export const getOneMovie = (id: string): Promise<any> => {
  return axiosInstance.get(`/movies/${id}`);
};
