export type Patient = {
  slug: string;
  title: string;
  text: string;
  image: string;
};

export const patients = [
  {
    slug: "milica-prostor-izmedju-zuba",
    title: "Prvi pacijent",
    text: "Ovo je info o prvom pacijentu.",
    image: "/jessica.jpg",
  },
  {
    slug: "jovan-zubobolja",
    title: "Drugi pacijent",
    text: "Ovo je info o drugom pacijentu.",
    image: "/jessica.jpg",
  },
];
