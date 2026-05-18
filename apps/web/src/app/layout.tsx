import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gastronomy App",
  description: "A Next.js sample for the gastronomy monorepo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
