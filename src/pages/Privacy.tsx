import { Link } from "react-router";
import { sections } from "../data/privacysections";
export default function Privacy() {
  return (
    <main className="max-w-[680px] mx-auto px-4 md:px-8 py-16 md:py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-d-ink-mid no-underline mb-12 hover:text-d-ink transition-colors"
      >
        ← Back to Dodo
      </Link>

      <div className="mb-10">
        <span className="text-3xl">🐦</span>
        <h1
          className="font-['Syne'] font-extrabold text-d-ink tracking-[-1.5px] mt-3"
          style={{ fontSize: "clamp(28px, 5vw, 42px)" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-d-ink-soft font-semibold mt-2">
          Last updated: March 2025
        </p>
      </div>

      <div className="flex flex-col gap-10 text-d-ink-mid leading-[1.75] text-[15px]">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-['Syne'] font-extrabold text-d-ink text-lg mb-3">
              {section.title}
            </h2>
            {section.content ? (
              <p>{section.content}</p>
            ) : (
              <p>
                For any questions or to request deletion of your data, please
                contact us at{" "}
                <Link
                  to="mailto:support@rasty.uk"
                  className="text-d-ink hover:underline break-all"
                >
                  support@rasty.uk
                </Link>
                .
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
