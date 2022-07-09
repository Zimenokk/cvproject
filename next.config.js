/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['localhost'] },//TODO:ТУТ ДОМЕН З ПРОДАКШЕНУ
  env: {
    APP_URL: process.env.REACT_APP_UURL,
    APP_ENV: process.env.REACT_APP_ENV
  }
};

module.exports = nextConfig;