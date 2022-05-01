/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // @sasil-web 폴더에서 다른 폴더(@sasil-common)의 파일을 불러오기 위한 옵션
  experimental: {
    externalDir: true,
  },
};
