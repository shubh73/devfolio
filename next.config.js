/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp3|wav)$/i,
        use: {
          loader: "file-loader",
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;
