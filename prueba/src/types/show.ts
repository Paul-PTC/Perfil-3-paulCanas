export type ShowImage = {
  medium?: string | null;
  original?: string | null;
};

export type ShowNetwork = {
  name: string;
};

export type Show = {
  id: number;
  name: string;
  premiered?: string | null;
  genres: string[];
  rating?: {
    average?: number | null;
  } | null;
  image?: ShowImage | null;
  network?: ShowNetwork | null;
  webChannel?: ShowNetwork | null;
  summary?: string | null;
};
