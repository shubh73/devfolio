export const METADATA = {
  author: "Shubh Porwal",
  title: "Portfolio | Shubh Porwal",
  description:
    "Shubh Porwal is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Shubh Porwal",
    "Frontend Engineer",
    "React Native Engineer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
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
  "A pragmatic Frontend Engineer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:shubhporwal73@gmail.com",
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
    url: "https://x.com/shubhporwal24",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack",
  ],
  librariesAndFrameworks: [
    "expo",
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "cursor", "sanity"],
};

export const PROJECTS = [
  {
    name: "NextBoss",
    imageKey: "nextboss",
    description: "Get hired through DMs not resumes 🤝",
    gradient: ["#FF69B4", "#FFB6C1"], // hot pink to light pink (cherry blossom inspired)
    url: null,
    tech: ["typescript", "react", "expo", "react-query"],
  },
  {
    name: "ReadyAI",
    imageKey: "ready-ai",
    description: "AI that gets you interview ready 🎯",
    gradient: ["#F4D03F", "#58D68D"], // warm gold to fresh green
    url: "https://play.google.com/store/apps/details?id=com.app.readyai",
    tech: ["typescript", "react"],
  },
  {
    name: "Grapevine Round1 AI",
    imageKey: "round1",
    description: "Ace your round one in 9 minutes  💼",
    gradient: ["#5D4037", "#8D6E63"], // dark brown to medium brown
    url: "https://play.google.com/store/apps/details?id=com.app.gvine",
    tech: ["typescript", "react", "react-query"],
  },
  {
    name: "React Native Directory",
    imageKey: "react-native-directory",
    description: "Search & filter React Native libraries via Raycast ⌨️",
    gradient: ["#000000", "#1A1A1A"], // pure black to dark gray
    url: "https://www.raycast.com/shubh_porwal/react-native-directory",
    tech: ["typescript", "react", "expo", "raycast"],
  },
  {
    name: "Buywow",
    imageKey: "buywow",
    description: "Official Wow Skin Science app 🌿",
    gradient: ["#FFD54F", "#FFB300"], // bright golden yellow to deep orange
    url: "https://play.google.com/store/apps/details?id=co.tapcart.app.id_99G6QNo3nu",
    tech: ["typescript", "react", "react-query"],
  },
  {
    name: "Bot9",
    imageKey: "bot9",
    description: "Automate support with AI 🤖",
    gradient: ["#3F51B5", "#7986CB"], // indigo to medium blue
    url: "https://bot9.ai/",
    tech: ["typescript", "react", "nextjs", "tailwindcss"],
  },
  {
    name: "Dukaan",
    imageKey: "dukaan",
    description: "Shopify for India 🛍️",
    gradient: ["#1976D2", "#1565C0"], // material blue to deep blue
    url: "https://play.google.com/store/apps/details?id=com.dukaan.app",
    tech: ["typescript", "react", "firebase", "tailwindcss", "react-query"],
  },
  {
    name: "Tesla",
    imageKey: "tesla",
    description: "Built with Expo 🏎️",
    gradient: ["#0F172A", "#1E293B"], // midnight blue to dark slate (electric/tech feel)
    url: "https://github.com/shubh73/tesla",
    tech: ["javascript", "expo"],
  },
  {
    name: "Airbnb",
    imageKey: "airbnb",
    description: "Built with NextJS + Tailwind CSS 🛏️",
    gradient: ["#1F2937", "#6B7280"], // dark gray to medium gray
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["javascript", "react", "nextjs", "mapbox", "tailwindcss"],
  },
  {
    name: "Medium",
    imageKey: "medium",
    description: "Built with NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FF9800", "#F57C00"], // warm orange to deep orange
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity"],
  },
  {
    name: "Inshorts",
    imageKey: "inshorts",
    description: "Voice-enabled news using Alan AI 🎙",
    gradient: ["#6366F1", "#4F46E5"], // indigo to deep indigo
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["javascript", "react", "chakra-ui", "alan"],
  },
];

export const WORK_CONTENTS = {
  GRAPEVINE: [
    {
      title: "Grapevine",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
      title: "Pioneering",
      description:
        "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Elevate",
      description:
        "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
  ],
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
