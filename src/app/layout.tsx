import type { Metadata } from "next";
import "./globals.css";
import RQProvider from "../_component/RQProvider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "당근마켓, 번개장터, 중고나라 통합 검색 사이트",
  description: "totalSearch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <RQProvider>
          <div>{children}</div>
        </RQProvider>
        <div id="portal" />
      </body>
    </html>
  );
}
