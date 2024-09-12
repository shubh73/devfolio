import { GoogleAnalytics } from "@next/third-parties/google";
import { calibre, jetbrains_mono } from "public/fonts";
import { cn } from "utils/cn";
import { constructMetadata } from "utils/metadata";
import { GTAG } from "../constants";
import "../styles/globals.scss";

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn(calibre.variable, jetbrains_mono.variable)}>
      <body className="select-none scroll-smooth bg-black text-white antialiased">
        {children}
      </body>
      <GoogleAnalytics gaId={GTAG} />
    </html>
  );
}
