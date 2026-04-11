const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    output: 'export',
    basePath: isProd ? '/game-lore-website' : '',
    assetPrefix: isProd ? '/game-lore-website/' : '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
