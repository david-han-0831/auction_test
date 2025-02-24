import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "경매 시스템",
  description: "프로게이머 드래프트 경매 시스템",
  openGraph: {
    title: "경매 시스템",
    description: "프로게이머 드래프트 경매 시스템",
    url: "https://auction-test-five.vercel.app/",
    siteName: "경매 시스템",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "경매 시스템",
    description: "프로게이머 드래프트 경매 시스템",
    images: ["/og-image.jpg"], // 트위터 공유 시 표시될 이미지
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
