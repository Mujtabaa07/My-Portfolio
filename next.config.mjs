/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Add the domain of the external image source
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  