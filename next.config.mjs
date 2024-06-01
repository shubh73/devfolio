import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "pages/sw.js",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
});

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
};

export default withSerwist(nextConfig);
