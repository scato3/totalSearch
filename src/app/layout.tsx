import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOTAL SEARCH",
  description: "중고 거래 사이트를 한번에 검색하는 토탈 서치",
  icons: {
    icon: "/yellowstar.png",
  },
  openGraph: {
    title: "OTAL SEARCH",
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
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
