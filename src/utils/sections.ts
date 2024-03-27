type Section = {
  name: string;
  slug: string;
  orientation: "vertical" | "horizontal";
};

export const sections: Section[] = [
  {
    slug: "mi-aura",
    name: "Mi Aura",
    orientation: "vertical",
  },
  {
    slug: "lo-que-nadie-te-dice-de",
    name: "Lo que nadie te dice de...",
    orientation: "vertical",
  },
  {
    slug: "mis-5-series",
    name: "Mis 5 Series",
    orientation: "vertical",
  },
  {
    slug: "aura-tv",
    name: "Aura TV",
    orientation: "vertical",
  },
  {
    slug: "mi-vida-en-series",
    name: "Mi Vida en Series",
    orientation: "horizontal",
  },
  {
    slug: "blanco-negro",
    name: "Blanco y Negro",
    orientation: "horizontal",
  },
  {
    slug: "en-llamado-con",
    name: "En llamado con",
    orientation: "horizontal",
  },
];
