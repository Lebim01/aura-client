export interface Video {
  // Define aquí las propiedades de tus videos, por ejemplo:
  watched: boolean;
  id: string;
  title: string;
  like_me: boolean;
  url: string;
  hsl: string;
  likes: number;
  comments: number;
  section: string;
  orientation?: "vertical" | "horizontal";
}
