import { METADATA } from "../constants";

export const constructMetadata = () => {
  return {
    metadataBase: new URL(METADATA.url),
    title: METADATA.title,
    description: METADATA.description,
    keywords: METADATA.keywords,
    creator: METADATA.author.name,
    authors: [
      {
        name: METADATA.author,
        url: METADATA.url,
      },
    ],
    openGraph: {
      type: "website",
      url: METADATA.url,
      title: METADATA.title,
      description: METADATA.description,
      images: METADATA.image,
      siteName: METADATA.title,
    },
    twitter: {
      title: METADATA.title,
      description: METADATA.description,
      card: "summary_large_image",
      site: METADATA.twitter,
      creator: METADATA.twitter,
      images: METADATA.image,
    },
    icons: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicons/favicon-16x16.png",
      },
    ],
    manifest: "/manifest.json",
  };
};
