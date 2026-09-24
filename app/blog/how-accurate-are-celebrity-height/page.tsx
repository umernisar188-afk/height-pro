import Link from "next/link";

export const metadata = {
  title: "How Accurate Are Celebrity Heights? | Height Pro",
  description:
    "Why celebrity heights can differ between sources, how standing height is measured, and how to interpret listed celebrity heights when comparing people.",
};

export default function CelebrityHeightAccuracyPage() {
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

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* NAV */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">

          <Link
            href="/"
            className="border-[3px] border-[#172033] bg-white px-5 py-3 text-sm font-black uppercase text-[#172033] shadow-[4px_4px_0_#172033] transition hover:-translate-y-1 hover:bg-[#b9ef35]"
          >
            ← Height Race
          </Link>

          <Link
            href="/compare"
            className="border-[3px] border-[#172033] bg-[#172033] px-5 py-3 text-sm font-black uppercase text-white shadow-[4px_4px_0_#ff8c2a] transition hover:-translate-y-1 hover:bg-[#ff5a1f]"
          >
            Compare Heights →
          </Link>

        </div>

        {/* ARTICLE */}
        <article className="overflow-hidden border-[4px] border-[#172033] bg-white/75 shadow-[10px_10px_0_#172033] backdrop-blur-xl">

          <div className="h-6 bg-gradient-to-r from-[#b9ef35] via-[#ffd43b] to-[#ff8c2a]" />

          <div className="p-7 sm:p-12">

            <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
              Height Pro Guide
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#172033] sm:text-7xl">
              How Accurate Are
              <span className="block text-[#ff5a1f]">
                Celebrity Heights?
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-8 text-[#172033]/65">
              Celebrity height numbers can look very precise online, but a
              listed height is not necessarily the same thing as a recent,
              independently verified measurement. Here is why different
              sources can disagree and how to interpret height comparisons.
            </p>

            {/* QUICK ANSWER */}
            <section className="mt-10 border-[3px] border-[#172033] bg-[#ffd43b]/45 p-6 shadow-[5px_5px_0_#172033]">
              <h2 className="text-2xl font-black uppercase text-[#172033]">
                The quick answer
              </h2>

              <p className="mt-4 text-lg leading-8 text-[#172033]/75">
                Celebrity heights should usually be treated as <strong className="font-black text-[#172033]">
                  listed figures
                </strong>, not as perfectly fixed measurements. Differences
                can come from measurement conditions, timing, posture,
                footwear, source quality, rounding, or simply different
                published figures.
              </p>
            </section>

            {/* SECTION 1 */}
            <section className="mt-12">

              <h2 className="text-3xl font-black uppercase text-[#172033]">
                1. Height is a measurement, not a permanent number
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#172033]/70">
                Human standing height changes during the day. Research has
                found measurable decreases in stature between morning and
                later measurements, followed by recovery during periods of
                rest and sleep.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                In one adult study, participants lost an average of about
                6.9 millimeters for men and 7.4 millimeters for women between
                measurements taken roughly seven hours apart.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                That means two otherwise careful measurements taken at
                different times can legitimately differ by several
                millimeters.
              </p>

            </section>

            {/* SECTION 2 */}
            <section className="mt-12">

              <h2 className="text-3xl font-black uppercase text-[#172033]">
                2. How is height measured accurately?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#172033]/70">
                Standardized standing-height protocols remove shoes and bulky
                clothing, use a firm level surface, keep the feet positioned
                consistently, and control the person's head and body position.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                A stadiometer or properly positioned height rule can then be
                used to record the measurement. Small differences in posture
                or positioning can affect the recorded result.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                That is one reason a casual height claim and a standardized
                clinical measurement should not automatically be treated as
                equivalent.
              </p>

            </section>

            {/* SECTION 3 */}
            <section className="mt-12">

              <h2 className="text-3xl font-black uppercase text-[#172033]">
                3. Why can celebrity listings disagree?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#172033]/70">
                Public figures often have height numbers repeated across many
                websites. Once a number becomes widely published, other
                pages may copy it without independently measuring the person.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                Different sources may also use different dates, rounding,
                measurement conditions, or source material. A person might
                also appear taller or shorter because of footwear, posture,
                camera angle, or the way two people are standing.
              </p>

              <div className="mt-7 border-[3px] border-[#172033] bg-[#b9ef35]/35 p-6">
                <p className="font-black uppercase text-[#172033]">
                  Height Pro's approach
                </p>

                <p className="mt-3 text-lg leading-8 text-[#172033]/70">
                  Height Pro uses the values stored in its database as
                  <strong className="font-black text-[#172033]">
                    {" "}listed heights
                  </strong>
                  so comparisons remain consistent across the site. We do
                  not claim that Height Pro personally measured every public
                  figure.
                </p>
              </div>

            </section>

            {/* SECTION 4 */}
            <section className="mt-12">

              <h2 className="text-3xl font-black uppercase text-[#172033]">
                4. Why photos can be misleading
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#172033]/70">
                A photograph is not a measuring instrument. Camera distance,
                lens choice, perspective, posture, footwear, and the relative
                position of two people can change how a height difference
                looks.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                This is why a visual comparison can feel surprising even when
                the underlying numbers are correct.
              </p>

            </section>

            {/* SECTION 5 */}
            <section className="mt-12">

              <h2 className="text-3xl font-black uppercase text-[#172033]">
                5. So how should you use celebrity height comparisons?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#172033]/70">
                The most useful approach is to treat celebrity heights as
                reference figures rather than absolute laboratory measurements.
                For a comparison, consistency matters: using one stated value
                for each person lets you calculate and visualize the difference
                clearly.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#172033]/70">
                If two websites disagree by a centimeter or two, that does not
                automatically mean one of them is correct and the other is
                wrong. The underlying source and measurement conditions matter.
              </p>

            </section>

            {/* CTA */}
            <section className="mt-14 border-[3px] border-[#172033] bg-[#172033] p-7 text-white shadow-[6px_6px_0_#ff8c2a] sm:p-9">

              <p className="font-black uppercase tracking-[0.25em] text-[#b9ef35]">
                Put the numbers to work
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                See The Difference For Yourself
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                Compare celebrities and athletes side by side and see the
                exact height difference with Height Pro.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">

                <Link
                  href="/compare/lionel-messi-vs-cristiano-ronaldo"
                  className="border-[3px] border-white bg-[#ff5a1f] px-6 py-3 font-black uppercase text-white transition hover:-translate-y-1 hover:bg-[#b9ef35] hover:text-[#172033]"
                >
                  Messi vs Ronaldo →
                </Link>

                <Link
                  href="/people"
                  className="border-[3px] border-white/40 bg-white/10 px-6 py-3 font-black uppercase text-white transition hover:-translate-y-1 hover:bg-white/20"
                >
                  Browse Heights →
                </Link>

              </div>

            </section>

            {/* SOURCES */}
            <section className="mt-12 border-t-[3px] border-[#172033]/15 pt-8">

              <h2 className="text-2xl font-black uppercase text-[#172033]">
                Sources
              </h2>

              <ul className="mt-5 space-y-3 text-[#172033]/70">

                <li>
                  <a
                    href="https://www.cdc.gov/bmi/child-teen-calculator/measure-child-height-weight.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#ff5a1f] underline"
                  >
                    CDC: Measuring height accurately
                  </a>
                </li>

                <li>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28400060/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#ff5a1f] underline"
                  >
                    PubMed: Factors influencing diurnal variation in height
                  </a>
                </li>

                <li>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/1734826/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#ff5a1f] underline"
                  >
                    PubMed: Further observations on diurnal variation in standing height
                  </a>
                </li>

              </ul>

            </section>

          </div>
        </article>

        <p className="mt-10 text-center text-xs font-black uppercase tracking-[0.3em] text-[#172033]/45">
          Measure · Compare · Understand
        </p>

      </div>
    </main>
  );
}