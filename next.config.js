module.exports = {
  reactStrictMode: true,
  experimental: {
    isrMemoryCacheSize: 0,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/static": { page: "/static" },
    };
  },
};
