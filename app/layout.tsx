import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "He K / Makes Things",
  description: "何 K 的个人展示页：网页、工具、系统和一些可以点的小世界。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "He K / Makes Things",
    description: "没事就造点东西。",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
