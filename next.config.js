/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    API_BASE_URL: "https://tutorial-interactivo-sql.onrender.com/api/v1",
    API_BASE_URL_V2: "https://tutorial-interactivo-sql-2.onrender.com/api/v2/",
    BASEPUP: process.env.BASEPUP,
    JUDGE0_URL: process.env.JUDGE0_URL,
  },
  webpack: (config, { isServer, webpack }) => {
    console.log(`Webpack version: ${webpack.version}`)

    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
}
