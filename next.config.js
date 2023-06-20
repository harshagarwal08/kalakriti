module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['gateway.pinata.cloud'],
    formats: ["image/webp"],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  }
};
