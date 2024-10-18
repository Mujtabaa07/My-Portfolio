/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Add the domain of the external image source
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
        },
      {
        protocol:'https',
        hostname:'i.ibb.co',

      },

      ],

    },
  };
  
  export default nextConfig;
  