import Link from "next/link";
import { notFound } from "next/navigation";
import { people } from "../../data/people";
import HeightRace from "./HeightRace";
function cmToFeetInches(cm: number) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  return `${feet} ft ${inches} in`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const person = people.find((p) => p.slug === slug);

  if (!person) {
    return {
      title: "Person Not Found",
    };
  }

  const heightFeet = cmToFeetInches(person.heightCm);

  return {
    title: `${person.name} Height`,
    description: `How tall is ${person.name}? ${person.name} is listed at ${person.heightCm} cm (${heightFeet}) tall. Compare their height with other celebrities and athletes.`,
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const person = people.find((p) => p.slug === slug);

  if (!person) {
    notFound();
  }

  const heightFeet = cmToFeetInches(person.heightCm);

  const relatedPeople = people
    .filter(
      (p) =>
        p.category === person.category &&
        p.slug !== person.slug
    )
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f2e8] px-4 py-10 sm:px-8 sm:py-16">

      {/* GRADIENT TEXTURE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#b9ef35]/40 blur-3xl" />

        <div className="absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#ff8c2a]/30 blur-3xl" />

        <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#ffd43b]/35 blur-3xl" />

      </div>

      {/* DIAGONAL RACING TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #172033 0px, #172033 2px, transparent 2px, transparent 18px)",
        }}
      />

      {/* DECORATIVE ELEMENTS */}
      <div className="pointer-events-none absolute left-[7%] top-28 text-5xl font-black text-[#ff8c2a]/40">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-40 text-6xl font-black text-[#b9ef35]/60">
        +
      </div>

      <div className="pointer-events-none absolute bottom-24 left-[12%] text-4xl font-black text-[#172033]/20">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* TOP NAVIGATION */}
        <div className="mb-10 flex items-center justify-between gap-4">

          <Link
            href="/people"
            className="border-[3px] border-[#172033] bg-white/70 px-5 py-3 text-sm font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#b9ef35]"
          >
            ← All People
          </Link>

          <Link
            href="/"
            className="border-[3px] border-[#172033] bg-[#172033] px-5 py-3 text-sm font-black uppercase text-white shadow-[4px_4px_0_#ff8c2a] transition hover:-translate-y-1 hover:bg-[#ff5a1f]"
          >
            Height Pro 🏁
          </Link>

        </div>

        {/* PROFILE CARD */}
        <section className="relative overflow-hidden border border-white/80 bg-white/55 p-6 shadow-2xl shadow-[#172033]/10 backdrop-blur-xl sm:p-12">

          {/* GLASS SHINE */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />

          {/* TOP COLOR STRIP */}
          <div className="absolute left-0 right-0 top-0 h-5 bg-gradient-to-r from-[#b9ef35] via-[#ffd43b] to-[#ff8c2a]" />

          <div className="relative">

            {/* CATEGORY */}
            <div className="mt-4 inline-flex border border-white/80 bg-[#b9ef35]/70 px-4 py-2 text-sm font-black uppercase tracking-widest text-[#172033] shadow-lg backdrop-blur-xl">
              {person.category}
            </div>

            {/* TITLE */}
            <div className="mt-8">

              <p className="font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
                Champion Profile
              </p>

              <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#172033] sm:text-7xl">
                {person.name}
              </h1>

              <p className="mt-6 text-lg font-medium text-[#172033]/60">
                How tall is {person.name}? Here is the listed height in both
                centimeters and feet.
              </p>

            </div>

            {/* HEIGHT DISPLAY */}
            <div className="mt-12 grid items-center gap-8 border-y border-white/80 py-8 sm:grid-cols-[1fr_auto]">

              <div>

                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#172033]/50">
                  Listed Height
                </p>

                <p className="mt-3 text-7xl font-black tracking-tight text-[#172033] sm:text-8xl">
                  {person.heightCm}
                  <span className="ml-3 text-3xl text-[#ff5a1f]">
                    CM
                  </span>
                </p>

                <p className="mt-3 text-2xl font-black uppercase text-[#172033]/60">
                  {heightFeet}
                </p>

              </div>

              <div className="flex h-32 w-32 items-center justify-center border border-white/80 bg-[#ffd43b]/70 text-6xl shadow-xl shadow-[#ff8c2a]/20 backdrop-blur-xl">
                📏
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-3xl">

              <h2 className="text-2xl font-black uppercase text-[#172033]">
                How Tall Is {person.name}?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                {person.name} is listed at{" "}
                <strong className="font-black text-[#172033]">
                  {person.heightCm} cm
                </strong>
                , which is approximately{" "}
                <strong className="font-black text-[#ff5a1f]">
                  {heightFeet}
                </strong>{" "}
                tall. Use Height Pro to compare this height with other famous
                athletes, celebrities, fighters, musicians, and public figures.
              </p>

            </div>

            {/* QUICK FACTS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="border border-white/80 bg-white/50 p-5 shadow-lg backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-wider text-[#172033]/40">
                  Height CM
                </p>

                <p className="mt-2 text-3xl font-black text-[#172033]">
                  {person.heightCm} CM
                </p>
              </div>

              <div className="border border-white/80 bg-white/50 p-5 shadow-lg backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-wider text-[#172033]/40">
                  Height Feet
                </p>

                <p className="mt-2 text-3xl font-black text-[#172033]">
                  {heightFeet}
                </p>
              </div>

              <div className="border border-white/80 bg-white/50 p-5 shadow-lg backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-wider text-[#172033]/40">
                  Category
                </p>

                <p className="mt-2 text-3xl font-black text-[#172033]">
                  {person.category}
                </p>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href={`/?heightB=${person.heightCm}&nameB=${encodeURIComponent(person.name)}`}
                className="border-[3px] border-[#172033] bg-[#ff5a1f] px-7 py-4 font-black uppercase text-white shadow-[6px_6px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35] hover:text-[#172033]"
              >
                Compare Heights 🏁
              </Link>

              <Link
                href="/people"
                className="border-[3px] border-[#172033] bg-white/70 px-7 py-4 font-black uppercase text-[#172033] shadow-[6px_6px_0_#ffd43b] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#ffd43b]"
              >
                Browse Champions →
              </Link>

            </div>

          </div>

        </section>
        <HeightRace
          celebrityName={person.name}
          celebrityHeight={person.heightCm}
        />

        {/* RELATED CHAMPIONS */}
        {relatedPeople.length > 0 && (
          <section className="mt-14">

            <div className="mb-6">

              <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
                Same League
              </p>

              <h2 className="mt-2 text-4xl font-black uppercase text-[#172033]">
                More {person.category} Champions
              </h2>

            </div>

            <div className="grid gap-5 sm:grid-cols-3">

              {relatedPeople.map((related, index) => {
                const colors = [
                  "bg-[#b9ef35]/45",
                  "bg-[#ffd43b]/45",
                  "bg-[#ff8c2a]/35",
                ];

                return (
                  <Link
                    key={related.slug}
                    href={`/people/${related.slug}`}
                    className={`group border border-white/80 ${
                      colors[index % colors.length]
                    } p-6 shadow-xl shadow-[#172033]/5 backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-2xl`}
                  >

                    <p className="text-xs font-black uppercase tracking-widest text-[#172033]/50">
                      {related.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-black uppercase text-[#172033]">
                      {related.name}
                    </h3>

                    <p className="mt-6 text-4xl font-black text-[#172033]">
                      {related.heightCm}
                      <span className="ml-2 text-lg text-[#ff5a1f]">
                        CM
                      </span>
                    </p>

                    <p className="mt-5 font-black uppercase text-[#172033]">
                      View Profile →
                    </p>

                  </Link>
                );
              })}

            </div>

          </section>
        )}

        {/* BOTTOM MESSAGE */}
        <p className="mt-12 text-center text-xs font-black uppercase tracking-[0.3em] text-[#172033]/50">
          Pick A Champion · Compare Heights · Start The Race
        </p>

      </div>

    </main>
  );
}