/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "1000logos.net",
          port: '',
        },
        {
          protocol: 'https',
          hostname: "cloud.appwrite.io",
          port: '',
        },
      ],
    },
}

module.exports = nextConfig
