import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const calibre = localFont({
  src: [
    {
      path: "./Calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-calibre",
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
