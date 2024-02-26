export type Serie = {
  id: string;
  title: string;
  original_title: string;
  slug: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  popularity: number;
};

export type Genre = {
  id: string;
  name: string;
};

export type Platform = {
  id: string;
  name: string;
  logo_url: string;
};

export type Actor = {
  id: string;
  name: string;
  character: string;
  image: string;
};
