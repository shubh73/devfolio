import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const calibre = localFont({
  src: [
    {
      path: "./Calibre/Calibre-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Calibre/Calibre-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Calibre/Calibre-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-calibre",
});

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
