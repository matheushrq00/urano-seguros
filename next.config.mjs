/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.uranoseguros.com.br",
          },
        ],
        destination: "https://uranoseguros.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;