import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Height Pro",
  description:
    "Learn how Height Pro handles website usage information, analytics, cookies, and advertising technologies.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] px-4 py-12 text-[#172033] sm:px-8">
      <article className="mx-auto max-w-4xl border border-white/80 bg-white/70 p-6 shadow-xl sm:p-12">
        <p className="font-black uppercase tracking-[0.25em] text-[#ff5a1f]">
          Height Pro
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-[#172033]/60">
          Effective date: October 13, 2026
        </p>

        <p className="mt-8 leading-8 text-[#172033]/80">
          This Privacy Policy explains how Height Pro handles information
          when you visit our website, browse celebrity profiles, or use our
          height-comparison tools.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-black">1. Information We Process</h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            When you use Height Pro, information you enter into a comparison
            tool, such as a height value, may be used to calculate and display
            your comparison.
          </p>
          <p className="mt-3 leading-7 text-[#172033]/80">
            Our hosting, security, and analytics services may process
            technical or usage information, such as browser details, device
            information, pages visited, referring pages, and interactions
            with the website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">
            2. Analytics and Cookies
          </h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            We use website analytics to understand how visitors use Height Pro
            and to improve its content and functionality. Analytics services
            may use cookies or similar technologies to collect usage
            information.
          </p>
          <p className="mt-3 leading-7 text-[#172033]/80">
            You can manage or disable cookies through your browser settings.
            Some website functionality may be affected by your choices.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">3. Advertising</h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            If advertising services such as Google AdSense are enabled,
            Google and other advertising partners may use cookies, web
            beacons, IP addresses, or similar technologies to serve and
            measure advertisements. Where permitted and applicable, these
            technologies may also be used for personalized advertising.
          </p>
          <p className="mt-3 leading-7 text-[#172033]/80">
            Learn how Google uses information on websites that use its
            services in{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              How Google uses information from sites or apps that use its
              services
            </a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">
            4. Third-Party Services and Links
          </h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            Height Pro may link to external websites, including official
            profiles and informational sources. Those websites operate under
            their own privacy policies and practices.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">5. Data Security</h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            We take reasonable steps to maintain the security of the website.
            However, no method of transmitting or storing information online
            can be guaranteed to be completely secure.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">
            6. Changes to This Policy
          </h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            We may update this Privacy Policy when our website, analytics,
            advertising services, or legal obligations change. The effective
            date above indicates when this version was published.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-black">7. Contact</h2>
          <p className="mt-3 leading-7 text-[#172033]/80">
            For privacy-related questions, please visit our{" "}
            <a
              href="/contact"
              className="font-bold underline underline-offset-4"
            >
              Contact page
            </a>.
          </p>
        </section>

        <nav className="mt-12 border-t border-[#172033]/10 pt-6">
          <a
            href="/"
            className="font-black uppercase text-[#ff5a1f] hover:underline"
          >
            ← Return to Height Pro
          </a>
        </nav>
      </article>
    </main>
  );
}