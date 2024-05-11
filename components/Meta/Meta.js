import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = ({ children }) => {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <meta name="keywords" content={METADATA.keywords} />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content={METADATA.language} />
        <meta name="author" content={METADATA.author} />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={METADATA.title} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:image" content={METADATA.image} />
        <meta property="og:url" content={METADATA.siteUrl} />
        <meta property="og:site_name" content={METADATA.title} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={METADATA.title} />
        <meta property="twitter:description" content={METADATA.description} />
        <meta property="twitter:site" content={METADATA.twitterHandle} />
        <meta name="twitter:creator" content={METADATA.twitterHandle} />
        <meta property="twitter:url" content={METADATA.siteUrl} />
        <meta property="twitter:image" content={METADATA.image} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#7000FF" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
