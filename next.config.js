/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APPWRITE_PROJECT_ID: '651a5268f35c3164c78d',
    NEXT_PUBLIC_DATABASE_ID: '651a55e0dcc392079b35',
    NEXT_PUBLIC_TODOS_COLLECTION_ID: '651a576dd047324dbc29',
    OPENAI_API_KEY: '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'
  },

  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "1000logos.net",
          port: '',
        },
      ],
    },
}

module.exports = nextConfig
