import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

/** 英文：Inter（螢幕最佳化、Stripe / Apple 系產品常用） */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Mark Biomedical | 原益菌 — Original Probiotics",
  description:
    "從實驗室到日常，以科學實證與精準定殖技術，重新定義體內微生態。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={cn("theme font-sans", inter.variable)}
    >
      <body
        className="min-h-dvh bg-brand-ice bg-[radial-gradient(ellipse_120%_85%_at_50%_-15%,#ffffff_0%,#F0F7FF_40%,#E2EDFF_100%)] text-brand-navy antialiased [font-synthesis-weight:none] [text-rendering:optimizeLegibility]"
      >
        {children}
      </body>
    </html>
  );
}
