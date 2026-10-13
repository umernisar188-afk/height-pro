import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

  metadataBase: new URL("https://heightproapp.com"),

  openGraph: {
    title: "Height Pro | Compare Heights & Celebrity Heights",
    description:
      "Compare heights instantly and discover the heights of famous celebrities, athletes, fighters, actors, and public figures.",
    type: "website",
    url: "https://heightproapp.com",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BZN1TK2X50"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BZN1TK2X50');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* MAIN NAVIGATION */}
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

        {/* PAGE CONTENT */}
        {children}

        {/* SITE FOOTER */}
        <footer className="mt-auto border-t-2 border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <a
                href="/"
                className="text-xl font-black tracking-tight hover:underline"
              >
                🏁 Height Pro
              </a>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                Explore celebrity heights, discover height differences,
                and compare yourself with your favorite public figures.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"
            >
              <a href="/about" className="hover:underline">
                About
              </a>

              <a href="/contact" className="hover:underline">
                Contact
              </a>

              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </nav>
          </div>

          <div className="border-t border-white/10">
            <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-400">
              © {new Date().getFullYear()} Height Pro. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}