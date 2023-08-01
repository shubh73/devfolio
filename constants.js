export const METADATA = {
  author: "Shubh Porwal",
  title: "Portfolio | Shubh Porwal",
  description:
    "Shubh Porwal is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Shubh Porwal",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: shubhporwal73@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubhporwal/",
  },
  {
    name: "github",
    url: "https://github.com/shubh73",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shubhii73/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/shubh731",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    // "cpp",
    // "java",
    // "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Dukaan",
    title: "Frontend Developer",
    location: "Bangalore, Karnataka",
    range: "December - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Aviate",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
