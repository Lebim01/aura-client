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

export const getRatedByMe = (id: string): Promise<any | null> => {
  return axiosInstance
    .get(`/series/rating/${id}`)
    .then((r) => r.data)
    .catch(() => null);
};

export const getRate = (slug: string): Promise<string | null> => {
  return axiosInstance
    .get(`/series/slug/${slug}`)
    .then((r) => r.data)
    .catch(() => null);
};

export const markSearch = (id: string) => {
  return axiosInstance.post(`/series/mark-search/${id}`)
}