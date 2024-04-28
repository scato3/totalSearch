import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import AdbyGoogle from "./_component/AdByGoogle";

export const metadata: Metadata = {
  title: "TOTAL SEARCH",
  description: "중고 거래 사이트를 한번에 검색하는 토탈 서치",
  icons: {
    icon: "/yellowstar.png",
  },
  openGraph: {
    title: "TOTAL SEARCH",
    description: "중고 거래 사이트를 한번에 검색하는 토탈 서치",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Script src="https://cdn.swygbro.com/public/widget/swyg-widget.js" />
      <body>
        <div>{children}</div>
        <AdbyGoogle />
      </body>
    </html>
  );
}
