import type { Metadata } from "next";
import "./globals.css";
import RQProvider from "../_component/RQProvider";

export const metadata: Metadata = {
  title: "중고 거래 통합 서치 사이트",
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
