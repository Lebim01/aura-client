"use client";
import axiosInstance from ".";
export const topMexico = (page: number): Promise<any> => {
  return axiosInstance.get(`/dashboard/top-mexico?page=${page}&limit=10`);
};

export const getOneSerie = (id: string): Promise<any> => {
  return axiosInstance.get(`/series/${id}`);
};

export const getRecommended = (filters: any): Promise<any> => {
  return axiosInstance.post(`/dashboard/recommended`, filters);
};
