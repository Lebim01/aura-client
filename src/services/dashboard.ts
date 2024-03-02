import axiosInstance from ".";

export const topMexico = (page: number) => {
  return axiosInstance.get(`/dashboard/top-mexico?page=${page}&limit=10`);
};

export const getOneSerie = (id: string) => {
  return axiosInstance.get(`/series/${id}`);
};

export const getRecommended = (filters: any) => {
  return axiosInstance.post(`/dashboard/recommended`, filters);
};

export type VideoDashboardResponse = {
  id: string;
  tags: string[];
  uploaderID: string;
  title: string;
  description: string;
  likes: number;
  created_at: Date;
  like_me: boolean;
  comments: number;
  section: string;
  url: string;
}

export const getVideosSection = (section: string) => {
  return axiosInstance.get<VideoDashboardResponse[]>(`/dashboard/section/${section}`).then(r => r.data)
}