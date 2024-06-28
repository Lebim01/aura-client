import { Section } from "@/utils/sections";
import axiosInstance from ".";

export const getSections = (): Promise<Section[]> => {
  return axiosInstance.get(`/sections`).then((r) => r.data);
};

export const getSection = (slug: string): Promise<Section> => {
  return axiosInstance.get(`/sections/${slug}`).then((r) => r.data);
};
