import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using the Playmates Site, Application, and Services.",
};

export default function TermsPage() {
  return (
    <main className="relative bg-[#FAF6E9]">
      <Navbar />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">Terms and Conditions</h1>
          <p className="mt-3 text-sm text-neutral-500">Last Updated: {TERMS_LAST_UPDATED}</p>

          <div className="mt-12 space-y-12">
            {TERMS_SECTIONS.map((section, index) => (
              <div key={section.title}>
                <h2 className="font-serif text-2xl text-neutral-900">
                  {index + 1}. {section.title}
                </h2>

                <div className="mt-4 space-y-4 text-neutral-600">
                  {section.paragraphs?.map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {section.definitions && (
                    <dl className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
                      {section.definitions.map((d) => (
                        <div key={d.term}>
                          <dt className="font-bold text-neutral-900">{d.term}</dt>
                          <dd className="mt-1 leading-relaxed">{d.def}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
