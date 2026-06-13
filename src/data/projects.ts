export type HomeProject = {
  id: string;
  title: string;
  titleFa: string;
  location: string;
  locationFa: string;
  year: string;
  category: string;
  categoryFa: string;
  description: string;
  descriptionFa: string;
  eyebrowFa: string;
  headlineFa: string;
  displayText: string;
  palette: {
    base: string;
    accent: string;
    deep: string;
    soft: string;
  };
  heroImage?: string;
  heroAlt?: string;
  leftImage?: string;
  rightImage?: string;
  alt?: string;
};

export const homeProjects: HomeProject[] = [
  {
    id: "ajoodaniyeh",
    title: "Ajoodaniyeh Residence",
    titleFa: "آجودانیه",
    location: "Tehran",
    locationFa: "پروژه مسکونی آجودانیه",
    year: "2026",
    category: "Residential",
    categoryFa: "مسکونی",
    eyebrowFa: "آچین‌وود",
    headlineFa: "زیبایی مهندسی‌شده!",
    displayText: "BEAUTY, BUILT TO LAST",
    description:
      "Layered cabinetry, warm joinery, and precise kitchen detailing for a quiet residential interior.",
    descriptionFa:
      "طراحی و اجرای کابینت و جزئیات چوبی با نگاه مهندسی‌شده برای خانه‌ای آرام، روشن و ماندگار.",
    palette: {
      base: "#d8d0b4",
      accent: "#4e4b40",
      deep: "#171812",
      soft: "#f1ead7",
    },
    heroImage: "/images/e1866bd3-6644-4d79-a0d6-76eeed1c2985.jpg",
    heroAlt: "آشپزخانه روشن با کابینت‌های سبز روشن و جزیره مرکزی",
  },
  {
    id: "narenj",
    title: "Narenj Residence",
    titleFa: "نارنج",
    location: "Tehran",
    locationFa: "پروژه مسکونی نارنج",
    year: "2026",
    category: "Residential",
    categoryFa: "مسکونی",
    eyebrowFa: "جزئیات چوبی گرم",
    headlineFa: "خانه‌ای آرام با ریتم چوب",
    displayText: "WARMTH, MADE PRECISE",
    description:
      "Warm walnut surfaces, quiet storage walls, and a calm living room shaped around hand-finished wood details.",
    descriptionFa:
      "سطوح گردویی، دیوارهای ذخیره‌سازی مخفی و جزئیاتی که فضای روزمره را گرم و منظم می‌کنند.",
    palette: {
      base: "#b96a3a",
      accent: "#f06a24",
      deep: "#22140f",
      soft: "#d8b28a",
    },
  },
  {
    id: "sadaf",
    title: "Sadaf Kitchen",
    titleFa: "صدف",
    location: "Karaj",
    locationFa: "آشپزخانه صدف",
    year: "2025",
    category: "Kitchen",
    categoryFa: "آشپزخانه",
    eyebrowFa: "طراحی آشپزخانه",
    headlineFa: "هر روز، دقیق‌تر و روشن‌تر",
    displayText: "CRAFTED FOR DAILY LIFE",
    description:
      "A precise oak kitchen system with tall panels, stone counters, and integrated lighting for everyday rituals.",
    descriptionFa:
      "سیستم آشپزخانه‌ای دقیق با پنل‌های بلند، نورپردازی یکپارچه و صفحه‌های مقاوم برای استفاده روزانه.",
    palette: {
      base: "#8c7258",
      accent: "#d88f45",
      deep: "#15130f",
      soft: "#d8c4a8",
    },
  },
  {
    id: "mehr",
    title: "Mehr Boutique",
    titleFa: "مهر",
    location: "Shiraz",
    locationFa: "بوتیک مهر",
    year: "2025",
    category: "Retail",
    categoryFa: "تجاری",
    eyebrowFa: "فضای فروشگاهی",
    headlineFa: "نمایش محصول با زبان چوب",
    displayText: "DETAILS THAT SELL QUIETLY",
    description:
      "Curved display joinery and dark stained shelving create a tactile retail interior with gallery-like focus.",
    descriptionFa:
      "قفسه‌های تیره، فرم‌های منحنی و ویترین‌هایی که محصول را در فضایی گرم و لوکس برجسته می‌کنند.",
    palette: {
      base: "#5d4a39",
      accent: "#f26d21",
      deep: "#100d0a",
      soft: "#b98d67",
    },
  },
  {
    id: "azar",
    title: "Azar Workspace",
    titleFa: "آذر",
    location: "Isfahan",
    locationFa: "فضای کار آذر",
    year: "2024",
    category: "Office",
    categoryFa: "اداری",
    eyebrowFa: "محیط کار سفارشی",
    headlineFa: "تمرکز، نظم و گرمای چوب",
    displayText: "WORK, SOFTENED BY WOOD",
    description:
      "Modular desks, acoustic wall panels, and soft partitions bring a crafted residential warmth to the workspace.",
    descriptionFa:
      "میزهای ماژولار، پنل‌های آکوستیک و پارتیشن‌هایی که کار را منظم‌تر و فضا را انسانی‌تر می‌کنند.",
    palette: {
      base: "#6f7965",
      accent: "#e46a2b",
      deep: "#11170f",
      soft: "#b8c0a8",
    },
  },
];
