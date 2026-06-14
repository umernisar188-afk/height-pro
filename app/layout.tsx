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
export const metadata = {
  title: "Height Comparison Tool",
  description: "Compare heights instantly and see who is taller.",
  openGraph: {
    title: "Height Comparison Tool",
    description: "Compare heights instantly and see who is taller.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Height Comparison Tool",
    description: "Compare heights instantly and see who is taller.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
