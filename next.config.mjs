const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    output: "export",
    basePath: isProd ? "/game-lore-website" : ``,
    assetPrefix: isProd ? "/game-lore-website/" : "/"
};

export default nextConfig;
