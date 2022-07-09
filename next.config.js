/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['localhost'] }, //TODO:тут вказати ще свій домен, котрий буде на проді
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV
  }
};

module.exports = nextConfig;
