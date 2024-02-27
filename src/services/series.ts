import axiosInstance from ".";

export const getSerieBySlug = (slug: string) => {
  return axiosInstance.get(`/series/slug/${slug}`).then((r) => r.data);
};
