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
  icons: {
 icon: "/icon.png?v=2",
},
  title: {
    default: "Height Pro | Compare Heights & Celebrity Heights",
    template: "%s | Height Pro",
  },

  description:
    "Compare heights instantly and discover the heights of your favorite celebrities, athletes, fighters, actors, musicians, and public figures.",

  keywords: [
    "height comparison",
    "compare heights",
    "celebrity heights",
    "how tall is",
    "height difference",
    "height calculator",
    "athlete heights",
    "celebrity height comparison",
  ],

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Height Pro | Compare Heights & Celebrity Heights",
    description:
      "Compare heights instantly and discover the heights of famous celebrities, athletes, fighters, actors, and public figures.",
    type: "website",
    url: "https://your-domain.com",
    siteName: "Height Pro",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Height Pro | Compare Heights & Celebrity Heights",
    description:
      "Compare heights instantly and discover celebrity heights.",
  },

  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">
  <nav className="border-b-2 border-slate-200 bg-slate-950 text-white shadow-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <a href="/" className="text-2xl font-black tracking-tight">
  🏁 Height Pro
</a>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/people" className="hover:underline">
          People
        </a>
      </div>
    </div>
  </nav>

  {children}
</body>
    </html>
  );
}