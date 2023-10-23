/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  env: {
    API_BASE_URL:'https://tutorial-interactivo-sql.onrender.com/api/v1'
  },
  webpack: (config, { isServer, webpack }) => {
    console.log(`Webpack version: ${webpack.version}`);

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

