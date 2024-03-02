import axiosInstance from ".";
interface Rating {
  rating: number;
  serieID: string;
}

export const getSerieBySlug = (slug: string) => {
  return axiosInstance.get(`/series/slug/${slug}`).then((r) => r.data);
};

export const rateSerie = (data: Rating) => {
  return axiosInstance.post(`/likes/rating/series`, data).then((r) => r.data);
};
