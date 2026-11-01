import type { Metadata } from "next";
import HomeClient from "./home-client";
export const metadata: Metadata = {
  title: {
    absolute: "Height Comparison Tool: Compare Celebrity Heights | Height Pro",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}