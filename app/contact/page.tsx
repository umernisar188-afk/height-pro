import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Height Pro | Questions and Feedback",
  description:
    "Contact Height Pro to report incorrect celebrity height information, broken links, privacy concerns, or general website feedback.",
};

const contactEmail = "heightpro.support.pk@gmail.com";

export default function ContactPage() {
  const emailSubject = encodeURIComponent("Contact Height Pro");

  return (
    <main className="min-h-screen bg-[#f7f2e8] px-4 py-12 text-[#172033] sm:px-8">
      <article className="mx-auto max-w-4xl border border-white/80 bg-white/70 p-6 shadow-xl sm:p-12">
        {/* HEADER */}
        <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
          We're Here to Help
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
          Contact Height Pro
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#172033]/80">
          Have a question about Height Pro, noticed an incorrect celebrity
          height, or found a broken link? We welcome your feedback and
          appreciate your help improving the website.
        </p>

        {/* CONTACT REASONS */}
        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            How Can We Help?
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="border border-white/80 bg-white/70 p-5 shadow-lg">
              <h3 className="text-lg font-black">
                Incorrect Height Information
              </h3>
              <p className="mt-3 leading-7 text-[#172033]/70">
                If you believe a listed height is inaccurate, tell us the
                person's name, the profile URL, and a reliable source
                supporting the correction.
              </p>
            </div>

            <div className="border border-white/80 bg-white/70 p-5 shadow-lg">
              <h3 className="text-lg font-black">
                Website Problems
              </h3>
              <p className="mt-3 leading-7 text-[#172033]/70">
                Let us know if you encounter a broken link, a comparison
                that doesn't work, or another technical problem.
              </p>
            </div>

            <div className="border border-white/80 bg-white/70 p-5 shadow-lg">
              <h3 className="text-lg font-black">
                Privacy Questions
              </h3>
              <p className="mt-3 leading-7 text-[#172033]/70">
                Contact us if you have a question about the website's
                privacy practices or the information described in our
                Privacy Policy.
              </p>
            </div>

            <div className="border border-white/80 bg-white/70 p-5 shadow-lg">
              <h3 className="text-lg font-black">
                General Feedback
              </h3>
              <p className="mt-3 leading-7 text-[#172033]/70">
                Have an idea for improving Height Pro? We welcome
                thoughtful suggestions about our profiles, comparisons,
                and tools.
              </p>
            </div>
          </div>
        </section>

        {/* EMAIL CONTACT */}
        <section className="mt-10 border-[3px] border-[#172033] bg-[#ffd43b] p-6 shadow-[6px_6px_0_#172033] sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Get in Touch
          </p>

          <h2 className="mt-3 text-2xl font-black uppercase">
            Send Us an Email
          </h2>

          <p className="mt-3 leading-7 text-[#172033]/80">
            Email us with your question or feedback. For correction
            requests, please include the relevant profile link and any
            supporting sources.
          </p>

          <a
            href={`mailto:${contactEmail}?subject=${emailSubject}`}
            className="mt-6 inline-flex border-[3px] border-[#172033] bg-[#ff5a1f] px-6 py-4 font-black uppercase text-white shadow-[4px_4px_0_#172033] transition hover:-translate-y-1 hover:bg-[#172033]"
          >
            Email Height Pro →
          </a>

          <p className="mt-4 text-sm text-[#172033]/70">
            Replace the example email address in the page code with
            your actual public contact email before publishing.
          </p>
        </section>

        {/* PRIVACY */}
        <section className="mt-10">
          <h2 className="text-2xl font-black uppercase">
            Privacy and Website Information
          </h2>

          <p className="mt-4 leading-7 text-[#172033]/80">
            For information about how Height Pro handles website usage
            information, analytics, cookies, and advertising technologies,
            please review our Privacy Policy.
          </p>

          <a
            href="/privacy-policy"
            className="mt-4 inline-block font-black uppercase text-[#ff5a1f] underline decoration-2 underline-offset-4"
          >
            Read Our Privacy Policy →
          </a>
        </section>

        {/* NAVIGATION */}
        <nav className="mt-12 flex flex-wrap gap-5 border-t border-[#172033]/10 pt-6">
          <a
            href="/"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            ← Home
          </a>

          <a
            href="/people"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            Browse People
          </a>

          <a
            href="/compare"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            Compare Heights
          </a>
        </nav>
      </article>
    </main>
  );
}