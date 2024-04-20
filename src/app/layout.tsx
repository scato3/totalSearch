import type { Metadata } from "next";
import "./globals.css";
import RQProvider from "../_component/RQProvider";

export const metadata: Metadata = {
  title: "TOTAL SEARCH",
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
