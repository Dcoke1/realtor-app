/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.ivanandmike.com", "nypost.com", "bayut-production.s3.eu-central-1.amazonaws.com", "estate-realtor.herokuapp.com"]
  }
}

module.exports = nextConfig
