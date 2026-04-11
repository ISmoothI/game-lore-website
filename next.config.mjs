const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    basePath: isProd ? "/game-lore-website" : ``,
    assetsPath: isProd ? "/game-lore-website/" : "/"
};

export default nextConfig;
