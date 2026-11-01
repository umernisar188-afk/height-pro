import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Celebrity Heights: How Tall Are Famous People? | Height Pro",
  },
  description:
    "Search the heights of famous athletes, fighters, actors and musicians. Pick a celebrity and compare their height with yours.",
  alternates: { canonical: "/people" },
};

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}