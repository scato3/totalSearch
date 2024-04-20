const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/search/:path*", // 클라이언트에서 요청하는 경로 패턴
        destination: "https://www.daangn.com/search/:path*", // 실제 API 엔드포인트로의 프록시 경로
      },
      {
        source: "/api/:path*", // 클라이언트에서 요청하는 경로 패턴
        destination: "https://api.bunjang.co.kr/api/:path*", // 실제 API 엔드포인트로의 프록시 경로
      },
      // {
      //   source: "/v3/:path*",
      //   destination: "https://search-api.joongna.com/v3/:path*",
      // },
    ];
  },
};

export default nextConfig;
