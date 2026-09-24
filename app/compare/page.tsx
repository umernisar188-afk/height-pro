import Link from "next/link";
import { people } from "../data/people";

const comparisonPairs = [
  ["lionel-messi", "cristiano-ronaldo"],
  ["lionel-messi", "kylian-mbappe"],
  ["cristiano-ronaldo", "kylian-mbappe"],
  ["lionel-messi", "neymar"],
  ["kylian-mbappe", "erling-haaland"],
  ["conor-mcgregor", "khabib-nurmagomedov"],
  ["jon-jones", "alex-pereira"],
  ["lebron-james", "stephen-curry"],
  ["tom-cruise", "dwayne-johnson"],
  ["shah-rukh-khan", "salman-khan"],
];

function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}

export const metadata = {
  title: "Celebrity Height Comparisons | Height Pro",
  description:
    "Compare the heights of celebrities, athletes, fighters, footballers, actors, musicians, and other public figures. See exact height differences with Height Pro.",
};

export default function CompareHubPage() {
  const comparisons = comparisonPairs
    .map(([firstSlug, secondSlug]) => {
      const first = getPerson(firstSlug);
      const second = getPerson(secondSlug);

      if (!first || !second) return null;

      return {
        first,
        second,
        difference: Math.abs(first.heightCm - second.heightCm),
        slug: `${first.slug}-vs-${second.slug}`,
      };
    })
    .filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f2e8] px-4 py-10 sm:px-8 sm:py-16">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#b9ef35]/40 blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#ff8c2a]/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#ffd43b]/35 blur-3xl" />
      </div>

      {/* TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #172033 0px, #172033 2px, transparent 2px, transparent 18px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* NAV */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">

          <Link
            href="/"
            className="border-[3px] border-[#172033] bg-white px-5 py-3 text-sm font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35]"
          >
            ← Height Race
          </Link>

          <Link
            href="/people"
            className="border-[3px] border-[#172033] bg-[#172033] px-5 py-3 text-sm font-black uppercase text-white shadow-[4px_4px_0_#ff8c2a] transition hover:-translate-y-1 hover:bg-[#ff5a1f]"
          >
            Browse Champions
          </Link>

        </div>

        {/* HERO */}
        <section className="border-[4px] border-[#172033] bg-white/65 p-7 shadow-[10px_10px_0_#172033] backdrop-blur-xl sm:p-12">

          <div className="inline-flex border-[3px] border-[#172033] bg-[#ffd43b] px-5 py-2 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0_#172033]">
            🏁 Height Pro
          </div>

          <p className="mt-8 font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
            Celebrity Height Comparison
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#172033] sm:text-7xl">
            Compare
            <span className="ml-3 text-[#ff5a1f]">
              Famous Heights
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#172033]/65">
            Compare celebrities, athletes, fighters, footballers, actors,
            musicians, and public figures side by side. See their listed
            heights and the exact difference between them.
          </p>

        </section>

        {/* POPULAR COMPARISONS */}
        <section className="mt-14">

          <div className="mb-7">
            <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
              Popular Battles
            </p>

            <h2 className="mt-2 text-4xl font-black uppercase text-[#172033] sm:text-5xl">
              Celebrity vs Celebrity
            </h2>

            <p className="mt-4 max-w-2xl text-[#172033]/60">
              Explore head-to-head height comparisons and see exactly how
              many centimeters separate each pair.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {comparisons.map((comparison) => {
              if (!comparison) return null;

              return (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="group border-[3px] border-[#172033] bg-white/70 p-6 shadow-[6px_6px_0_#172033] backdrop-blur-xl transition hover:-translate-y-2 hover:bg-[#b9ef35]/30"
                >

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-[#ff5a1f]">
                        Height Comparison
                      </p>

                      <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-[#172033]">
                        {comparison.first.name}
                        <span className="mx-2 text-[#ff5a1f]">
                          VS
                        </span>
                        {comparison.second.name}
                      </h3>
                    </div>

                    <div className="border-[3px] border-[#172033] bg-[#ffd43b] px-4 py-3 text-center shadow-[3px_3px_0_#172033]">
                      <p className="text-xs font-black uppercase">
                        Difference
                      </p>
                      <p className="mt-1 text-xl font-black">
                        {comparison.difference} CM
                      </p>
                    </div>

                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-4">

                    <div className="border-2 border-[#172033]/20 bg-white/70 p-4">
                      <p className="text-xs font-black uppercase text-[#172033]/50">
                        {comparison.first.name}
                      </p>

                      <p className="mt-2 text-3xl font-black text-[#172033]">
                        {comparison.first.heightCm}
                        <span className="ml-1 text-sm text-[#ff5a1f]">
                          CM
                        </span>
                      </p>
                    </div>

                    <div className="border-2 border-[#172033]/20 bg-white/70 p-4">
                      <p className="text-xs font-black uppercase text-[#172033]/50">
                        {comparison.second.name}
                      </p>

                      <p className="mt-2 text-3xl font-black text-[#172033]">
                        {comparison.second.heightCm}
                        <span className="ml-1 text-sm text-[#ff5a1f]">
                          CM
                        </span>
                      </p>
                    </div>

                  </div>

                  <p className="mt-6 font-black uppercase text-[#172033] group-hover:text-[#ff5a1f]">
                    See Full Comparison →
                  </p>

                </Link>
              );
            })}

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="mt-14 grid gap-6 sm:grid-cols-3">

          <div className="border-[3px] border-[#172033] bg-white/65 p-6 shadow-[5px_5px_0_#b9ef35]">
            <p className="text-3xl">📏</p>
            <h2 className="mt-4 text-xl font-black uppercase text-[#172033]">
              Compare Heights
            </h2>
            <p className="mt-3 leading-7 text-[#172033]/60">
              See two listed heights side by side and measure the exact
              difference.
            </p>
          </div>

          <div className="border-[3px] border-[#172033] bg-white/65 p-6 shadow-[5px_5px_0_#ffd43b]">
            <p className="text-3xl">🏆</p>
            <h2 className="mt-4 text-xl font-black uppercase text-[#172033]">
              See Who Is Taller
            </h2>
            <p className="mt-3 leading-7 text-[#172033]/60">
              Find out which person is taller and how large the difference
              is.
            </p>
          </div>

          <div className="border-[3px] border-[#172033] bg-white/65 p-6 shadow-[5px_5px_0_#ff8c2a]">
            <p className="text-3xl">👀</p>
            <h2 className="mt-4 text-xl font-black uppercase text-[#172033]">
              See It Visually
            </h2>
            <p className="mt-3 leading-7 text-[#172033]/60">
              Use the visual race to make the height difference easier to
              understand.
            </p>
          </div>

        </section>

        {/* PEOPLE LINKS */}
        <section className="mt-14 border-[3px] border-[#172033] bg-[#172033] p-7 text-white shadow-[7px_7px_0_#ff8c2a] sm:p-10">

          <p className="font-black uppercase tracking-[0.25em] text-[#b9ef35]">
            Explore Heights
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Browse Celebrity & Athlete Heights
          </h2>

          <p className="mt-4 max-w-2xl text-white/65">
            Visit individual height profiles to explore listed heights and
            continue into more comparisons.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            {[
              "lionel-messi",
              "cristiano-ronaldo",
              "kylian-mbappe",
              "neymar",
              "erling-haaland",
              "lebron-james",
              "conor-mcgregor",
              "drake",
            ].map((slug) => {
              const person = getPerson(slug);

              if (!person) return null;

              return (
                <Link
                  key={person.slug}
                  href={`/people/${person.slug}`}
                  className="border-2 border-white/30 bg-white/10 px-4 py-2 font-black uppercase transition hover:bg-[#b9ef35] hover:text-[#172033]"
                >
                  {person.name}
                </Link>
              );
            })}

          </div>

        </section>

        {/* FOOTER */}
        <p className="mt-10 text-center text-xs font-black uppercase tracking-[0.3em] text-[#172033]/45">
          Compare · Discover · Race
        </p>

      </div>
    </main>
  );
}