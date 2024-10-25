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
      {
              protocol:'https',
              hostname:'t0.gstatic.com',
      }

      ],

    },
  };
  
  export default nextConfig;
  