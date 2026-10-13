import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Height Pro | Celebrity Height Comparison",
  description:
    "Learn about Height Pro, our celebrity height profiles, and our interactive height comparison tools.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] px-4 py-12 text-[#172033] sm:px-8">
      <article className="mx-auto max-w-4xl border border-white/80 bg-white/70 p-6 shadow-xl sm:p-12">
        <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
          Welcome to Height Pro
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
          About Height Pro
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#172033]/80">
          Height Pro helps you explore celebrity heights and compare the
          listed heights of athletes, actors, musicians, fighters, and other
          public figures. Our goal is to make height information easy to
          explore through clear profiles and interactive comparisons.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            What Can You Do Here?
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-[#172033]/80">
            <p>
              <strong>Explore celebrity profiles.</strong> Browse individual
              profiles to see listed heights in centimetres and feet and
              inches.
            </p>

            <p>
              <strong>Compare heights.</strong> Explore comparisons between
              public figures and see the difference between their listed
              heights.
            </p>

            <p>
              <strong>Compare your own height.</strong> Use our interactive
              comparison tool to see how your height compares with a
              selected celebrity.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/people"
              className="border-[3px] border-[#172033] bg-[#b9ef35] px-5 py-3 font-black uppercase shadow-[4px_4px_0_#172033] transition hover:-translate-y-1"
            >
              Explore People
            </a>

            <a
              href="/compare"
              className="border-[3px] border-[#172033] bg-[#ffd43b] px-5 py-3 font-black uppercase shadow-[4px_4px_0_#172033] transition hover:-translate-y-1"
            >
              Compare Heights
            </a>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            Our Approach to Height Information
          </h2>

          <p className="mt-4 leading-7 text-[#172033]/80">
            Height Pro presents listed height information for public figures.
            Published measurements can vary between sources because of
            rounding, reporting differences, or changes in the information
            available. A listed height should not be interpreted as an
            independently measured value unless that has been established.
          </p>

          <p className="mt-4 leading-7 text-[#172033]/80">
            We aim to make our information clear and useful. Where appropriate,
            we provide source links so readers can examine the information
            themselves. If you notice an inaccurate figure or a broken link,
            please contact us with the relevant profile and details.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            Independent Website
          </h2>

          <p className="mt-4 leading-7 text-[#172033]/80">
            Height Pro is an independent informational website. Unless
            explicitly stated otherwise, references to public figures are
            provided for identification and comparison purposes and do not
            imply endorsement or affiliation.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            Get in Touch
          </h2>

          <p className="mt-4 leading-7 text-[#172033]/80">
            Found something that needs correcting, or have feedback about
            Height Pro? Visit our Contact page to get in touch.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-block font-black uppercase text-[#ff5a1f] underline decoration-2 underline-offset-4"
          >
            Contact Height Pro →
          </a>
        </section>

        <nav className="mt-12 flex flex-wrap gap-5 border-t border-[#172033]/10 pt-6">
          <a
            href="/"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            ← Home
          </a>

          <a
            href="/privacy-policy"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            Privacy Policy
          </a>
        </nav>
      </article>
    </main>
  );
}