/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, options) => {
    // if (!options.dev) {
      config.devtool = options.false
    // }
    return config
  },
}
module.exports = nextConfig
