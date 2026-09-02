import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const parts = slug.split("-vs-");

  const a = parts[0]?.replace("cm", "").trim() || "0";
  const b = parts[1]?.replace("cm", "").trim() || "0";

  return {
    title: `${a}cm vs ${b}cm Height Comparison`,
    description: `Compare ${a}cm and ${b}cm instantly. See who is taller and the exact difference.`,
  };
}

export default async function ComparePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ name?: string }>;
}) {
  const { slug } = await params;
  const { name } = await searchParams;

  const celebrityName = name || "Person B";

  const parts = slug.split("-vs-");

  const heightA = Number(parts[0]?.replace("cm", "").trim()) || 0;
  const heightB = Number(parts[1]?.replace("cm", "").trim()) || 0;

  const winner =
    heightA > heightB ? "A" : heightB > heightA ? "B" : "tie";

  const difference = Math.abs(heightA - heightB);

  const maxHeight = Math.max(heightA, heightB, 1);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f2e8] px-4 py-10 sm:px-8 sm:py-14">

      {/* GRADIENT TEXTURE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#b9ef35]/50 blur-3xl" />

        <div className="absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#ff8c2a]/40 blur-3xl" />

        <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#ffd43b]/40 blur-3xl" />

      </div>

      {/* DIAGONAL RACING TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #172033 0px, #172033 2px, transparent 2px, transparent 18px)",
        }}
      />

      {/* DECORATIONS */}
      <div className="pointer-events-none absolute left-[7%] top-32 text-5xl font-black text-[#ff8c2a]/40">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[8%] top-48 text-6xl font-black text-[#b9ef35]/60">
        +
      </div>

      <div className="pointer-events-none absolute bottom-24 left-[10%] text-4xl font-black text-[#ffd43b]/50">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* TOP NAV */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">

          <Link
            href="/"
            className="border-[3px] border-[#172033] bg-white px-5 py-3 text-sm font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35]"
          >
            ← New Race
          </Link>

          <Link
            href="/people"
            className="border-[3px] border-[#172033] bg-[#172033] px-5 py-3 text-sm font-black uppercase text-white shadow-[4px_4px_0_#ff8c2a] transition hover:-translate-y-1 hover:bg-[#ff5a1f]"
          >
            Browse Champions
          </Link>

        </div>

        {/* MAIN CARD */}
        <section className="overflow-hidden border-[5px] border-[#172033] bg-white shadow-[12px_12px_0_#172033]">

          {/* RACE STRIP */}
          <div className="h-6 bg-gradient-to-r from-[#b9ef35] via-[#ffd43b] to-[#ff8c2a]" />

          {/* HEADER */}
          <div className="px-6 pt-10 text-center sm:px-10">

            <div className="inline-flex border-[3px] border-[#172033] bg-[#ffd43b] px-5 py-2 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0_#172033]">
              🏁 Height Race
            </div>

            <p className="mt-8 font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
              Head To Head
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#172033] sm:text-7xl">
              Height
              <span className="ml-3 text-[#ff5a1f]">
                Battle
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-[#172033]/60">
              Two heights enter the race. Only one can take the podium.
            </p>

          </div>

          {/* COMPETITORS */}
          <div className="relative mt-12 grid grid-cols-1 gap-6 px-6 sm:grid-cols-[1fr_auto_1fr] sm:px-10">

            {/* YOU */}
            <div
              className={`border-[4px] border-[#172033] p-6 text-center shadow-[6px_6px_0_#172033] ${
                winner === "A"
                  ? "bg-[#b9ef35]"
                  : winner === "tie"
                  ? "bg-[#ffd43b]"
                  : "bg-[#f7f2e8]"
              }`}
            >

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#172033]/60">
                You
              </p>

              <p className="mt-3 text-6xl font-black text-[#172033] sm:text-7xl">
                {heightA}
                <span className="ml-2 text-2xl">
                  CM
                </span>
              </p>

              {winner === "A" && (
                <div className="mt-5 inline-block border-[3px] border-[#172033] bg-[#ffd43b] px-4 py-2 font-black uppercase shadow-[3px_3px_0_#172033]">
                  🏆 Winner
                </div>
              )}

              {winner === "tie" && (
                <div className="mt-5 inline-block border-[3px] border-[#172033] bg-white px-4 py-2 font-black uppercase shadow-[3px_3px_0_#172033]">
                  🤝 Tie
                </div>
              )}

            </div>

            {/* VS */}
            <div className="flex items-center justify-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-[#172033] bg-[#ff5a1f] text-2xl font-black text-white shadow-[5px_5px_0_#172033]">
                VS
              </div>

            </div>

            {/* CELEBRITY */}
            <div
              className={`border-[4px] border-[#172033] p-6 text-center shadow-[6px_6px_0_#172033] ${
                winner === "B"
                  ? "bg-[#b9ef35]"
                  : winner === "tie"
                  ? "bg-[#ffd43b]"
                  : "bg-[#f7f2e8]"
              }`}
            >

              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#172033]/60">
                {celebrityName}
              </p>

              <p className="mt-3 text-6xl font-black text-[#172033] sm:text-7xl">
                {heightB}
                <span className="ml-2 text-2xl">
                  CM
                </span>
              </p>

              {winner === "B" && (
                <div className="mt-5 inline-block border-[3px] border-[#172033] bg-[#ffd43b] px-4 py-2 font-black uppercase shadow-[3px_3px_0_#172033]">
                  🏆 Winner
                </div>
              )}

              {winner === "tie" && (
                <div className="mt-5 inline-block border-[3px] border-[#172033] bg-white px-4 py-2 font-black uppercase shadow-[3px_3px_0_#172033]">
                  🤝 Tie
                </div>
              )}

            </div>

          </div>

          {/* RESULT */}
          <div className="mx-6 mt-10 border-[4px] border-[#172033] bg-[#172033] p-8 text-center text-white sm:mx-10">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#b9ef35]">
              Race Result
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase sm:text-5xl">

              {winner === "A"
                ? "You Take The Win 🏆"
                : winner === "B"
                ? `${celebrityName} Takes The Win 🏆`
                : "It's A Perfect Tie 🤝"}

            </h2>

            <p className="mt-4 text-lg font-bold text-white/70">
              {winner === "tie" ? (
                <>
                  Height difference:
                  <span className="ml-2 text-[#ffd43b]">
                    0 CM
                  </span>
                </>
              ) : (
                <>
                  Height difference:
                  <span className="ml-2 text-[#ffd43b]">
                    {difference} CM
                  </span>
                </>
              )}
            </p>

          </div>

          {/* VISUAL HEIGHT RACE */}
          <div className="mx-6 mt-10 border-[4px] border-[#172033] bg-[#f7f2e8] p-6 sm:mx-10 sm:p-10">

            <div className="text-center">

              <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
                Visual Race Track
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase text-[#172033]">
                See The Difference
              </h2>

            </div>

            <div className="mt-10 flex h-80 items-end justify-center gap-8 border-b-[5px] border-dashed border-[#172033] px-2 sm:gap-28 sm:px-4">

              {/* YOU BAR */}
              <div className="flex h-full flex-col items-center justify-end">

                {winner === "A" && (
                  <div className="mb-3 text-3xl">
                    🏆
                  </div>
                )}

                {winner === "tie" && (
                  <div className="mb-3 text-2xl">
                    🤝
                  </div>
                )}

                <div
                  className={`w-20 border-[4px] border-[#172033] sm:w-24 ${
                    winner === "A"
                      ? "bg-[#b9ef35]"
                      : winner === "tie"
                      ? "bg-[#ffd43b]"
                      : "bg-[#ff8c2a]"
                  }`}
                  style={{
                    height: `${Math.max(
                      (heightA / maxHeight) * 230,
                      30
                    )}px`,
                  }}
                />

                <p className="mt-4 text-center font-black uppercase text-[#172033]">
                  You
                  <br />
                  {heightA} CM
                </p>

              </div>

              {/* CELEBRITY BAR */}
              <div className="flex h-full flex-col items-center justify-end">

                {winner === "B" && (
                  <div className="mb-3 text-3xl">
                    🏆
                  </div>
                )}

                {winner === "tie" && (
                  <div className="mb-3 text-2xl">
                    🤝
                  </div>
                )}

                <div
                  className={`w-20 border-[4px] border-[#172033] sm:w-24 ${
                    winner === "B"
                      ? "bg-[#b9ef35]"
                      : winner === "tie"
                      ? "bg-[#ffd43b]"
                      : "bg-[#ff8c2a]"
                  }`}
                  style={{
                    height: `${Math.max(
                      (heightB / maxHeight) * 230,
                      30
                    )}px`,
                  }}
                />

                <p className="mt-4 max-w-[150px] text-center font-black uppercase text-[#172033]">
                  {celebrityName}
                  <br />
                  {heightB} CM
                </p>

              </div>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap justify-center gap-5 px-6 py-12">

            <Link
              href="/"
              className="border-[4px] border-[#172033] bg-[#ff5a1f] px-7 py-4 font-black uppercase text-white shadow-[6px_6px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35] hover:text-[#172033]"
            >
              ← Compare Again
            </Link>

            <Link
              href="/people"
              className="border-[4px] border-[#172033] bg-white px-7 py-4 font-black uppercase text-[#172033] shadow-[6px_6px_0_#ffd43b] transition hover:-translate-y-1 hover:bg-[#ffd43b]"
            >
              Browse Champions →
            </Link>

          </div>

        </section>

        <p className="mt-10 text-center text-sm font-black uppercase tracking-[0.2em] text-[#172033]/50">
          Measure. Compare. Find The Winner.
        </p>

      </div>

    </main>
  );
}