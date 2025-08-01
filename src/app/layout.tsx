import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeVibe - Developer Community Platform",
  description: "개발자들이 함께 성장하는 커뮤니티. 질문하고, 배우고, 공유하며 여러분의 코딩 여정을 함께 만들어가세요.",
  keywords: "개발자, 커뮤니티, 코딩, 프로그래밍, 학습, 튜토리얼",
  openGraph: {
    title: "CodeVibe - Developer Community Platform",
    description: "개발자들이 함께 성장하는 커뮤니티",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
