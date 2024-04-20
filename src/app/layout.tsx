import type { Metadata } from "next";
import "./globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
}
