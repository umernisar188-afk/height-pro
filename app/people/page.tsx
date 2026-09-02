"use client";

import Link from "next/link";
import { useState } from "react";
import { people } from "../data/people";

export default function PeoplePage() {
  const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  "Football",
  "UFC",
  "Cricket",
  "Basketball",
  "Hollywood",
  "Bollywood",
  "Music",
  "WWE",
];
  const filteredPeople = people.filter((person) => {
  const matchesSearch = `${person.name} ${person.category}`
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    person.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7e6] via-[#fffdf8] to-[#eefcf3] px-4 py-10 sm:px-8">
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full bg-[#b9ef35]/30 blur-3xl" />

        <div className="absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-[#ff8c2a]/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#ffd43b]/30 blur-3xl" />
      </div>

      {/* GLASS TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #172033 1px, transparent 1px), linear-gradient(45deg, #172033 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* DECORATIONS */}
      <div className="pointer-events-none absolute left-[8%] top-32 text-5xl font-black text-[#ff8c2a]/30">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-44 text-6xl font-black text-[#b9ef35]/50">
        +
      </div>

      <div className="pointer-events-none absolute bottom-24 left-[12%] text-5xl font-black text-[#ffd43b]/50">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="border border-white/70 bg-white/45 p-6 text-center shadow-xl shadow-[#172033]/5 backdrop-blur-xl sm:p-10">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/80 bg-white/60 px-5 py-2 text-sm font-black uppercase tracking-wider text-[#172033] shadow-lg backdrop-blur-md">
            <span>📏</span>
            Height Pro
          </div>

          <p className="font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
            Champion Database
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-[#172033] sm:text-7xl">
            Celebrity
            <span className="ml-3 text-[#ff5a1f]">Heights</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#172033]/60">
            Search famous athletes, fighters, musicians, actors, and public
            figures. Pick a champion and start your height race.
          </p>

          {/* SEARCH */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl">
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a champion..."
                className="w-full border border-white/80 bg-white/60 px-14 py-4 text-base font-semibold text-[#172033] shadow-lg shadow-[#172033]/5 outline-none backdrop-blur-xl transition placeholder:text-[#172033]/40 focus:bg-white/80 focus:ring-4 focus:ring-[#b9ef35]/30"
              />
            </div>
            </div>
</div>

{/* CATEGORY FILTERS */}
<div className="mt-6 flex flex-wrap justify-center gap-3">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`border px-4 py-2 text-sm font-black uppercase tracking-wide backdrop-blur-xl transition ${
        selectedCategory === category
          ? "border-[#172033] bg-[#b9ef35] text-[#172033] shadow-[3px_3px_0_#172033]"
          : "border-white/80 bg-white/50 text-[#172033]/70 hover:-translate-y-1 hover:bg-white/80"
      }`}
    >
      {category === "Football" && "⚽ "}
      {category === "UFC" && "🥊 "}
      {category === "Cricket" && "🏏 "}
      {category === "Basketball" && "🏀 "}
      {category === "Hollywood" && "🎬 "}
      {category === "Bollywood" && "🎥 "}
      {category === "Music" && "🎤 "}
      {category === "WWE" && "🤼 "}
      {category === "All" && "🏁 "}

      {category}
    </button>
  ))}
</div>

{/* RESULTS */}
{filteredPeople.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPeople.map((person, index) => {
              const cardColors = [
                "from-[#ffffff]/70 to-[#b9ef35]/25",
                "from-[#ffffff]/70 to-[#ffd43b]/25",
                "from-[#ffffff]/70 to-[#ff8c2a]/20",
              ];

              return (
                <Link
                  key={person.slug}
                  href={`/people/${person.slug}`}
                  className={`group relative overflow-hidden border border-white/80 bg-gradient-to-br ${
                    cardColors[index % cardColors.length]
                  } p-6 shadow-xl shadow-[#172033]/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  {/* GLASS SHINE */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-70" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex border border-white/80 bg-white/50 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#172033]/60 backdrop-blur-md">
                          {person.category}
                        </div>

                        <h2 className="mt-4 text-2xl font-black uppercase text-[#172033] transition group-hover:text-[#ff5a1f]">
                          {person.name}
                        </h2>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center border border-white/80 bg-white/50 text-2xl shadow-lg backdrop-blur-md transition group-hover:scale-110">
                        📏
                      </div>
                    </div>

                    {/* HEIGHT */}
                    <div className="mt-8 border-t border-white/70 pt-5">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#172033]/45">
                        Listed Height
                      </p>

                      <p className="mt-2 text-5xl font-black tracking-tight text-[#172033]">
                        {person.heightCm}
                        <span className="ml-2 text-xl text-[#ff5a1f]">
                          CM
                        </span>
                      </p>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-7 flex items-center justify-between">
                      <span className="font-black uppercase text-[#172033]">
                        View Profile
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center border border-white/80 bg-white/60 font-black text-[#172033] shadow-md backdrop-blur-md transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 border border-white/80 bg-white/50 p-12 text-center shadow-xl backdrop-blur-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center border border-white/80 bg-white/60 text-4xl shadow-lg backdrop-blur-md">
              🔎
            </div>

            <h2 className="mt-6 text-3xl font-black uppercase text-[#172033]">
              No Champion Found
            </h2>

            <p className="mt-3 text-[#172033]/60">
              Try searching for another name, sport, or category.
            </p>
          </div>
        )}

        {/* BOTTOM ACTION */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-[3px] border-[#172033] bg-white/60 px-7 py-4 font-black uppercase text-[#172033] shadow-[5px_5px_0_#172033] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#b9ef35]"
          >
            ← Back To Height Race
          </Link>
        </div>

        <p className="mt-10 text-center text-xs font-black uppercase tracking-[0.3em] text-[#172033]/40">
          Search · Compare · Race
        </p>
      </div>
    </main>
  );
}