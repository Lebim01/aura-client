import { Section } from "@/utils/sections";
import axiosInstance from ".";

export const getSections = (): Promise<Section[]> => {
  return axiosInstance.get(`/sections`).then((r) => r.data);
};
