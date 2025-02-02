/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080", // Ensure it matches your WordPress port
        pathname: "/university/wordpress/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
