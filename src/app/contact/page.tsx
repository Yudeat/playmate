import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Playmates team.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#FAF6E9]">
      <Navbar />

      {/* Contact form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-neutral-900 sm:text-6xl">Contact us</h1>
          <p className="mx-auto mt-6 max-w-xl text-neutral-600">
            Get in touch and ask us anything. Whether it&apos;s booking a venue, listing your
            gym, partnering with us, or joining a tournament — we answer it all.
          </p>
        </div>

        <form
          action="mailto:admin@askplaymates.com?subject=New%20message%20from%20playmatesapp.com"
          method="post"
          encType="text/plain"
          className="mx-auto mt-12 max-w-2xl space-y-4 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:outline-none"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:outline-none"
            />
            <select
              name="interest"
              required
              defaultValue=""
              className="rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-600 focus:border-brand focus:outline-none"
            >
              <option value="" disabled>
                Interested in
              </option>
              <option value="general">General Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="venue">List My Venue</option>
              <option value="support">Support</option>
              <option value="media">Media & Press</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            rows={6}
            required
            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:outline-none"
          />

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full bg-brand px-8 text-base text-brand-foreground hover:bg-brand/90"
            >
              Send your message
            </Button>
            <p className="mt-4 text-xs text-neutral-500">
              By clicking, you agree to our <a href="#" className="underline hover:text-neutral-800">Terms &amp; Conditions</a>,{" "}
              <a href="#" className="underline hover:text-neutral-800">Privacy and Data Protection Policy</a>.
            </p>
          </div>
        </form>
      </section>

      {/* Location */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Birgunj, Nepal</p>
          <h2 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">
            Get in touch with Playmates
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
          <div className="h-[420px] overflow-hidden rounded-3xl lg:h-auto">
            <iframe
              title="Playmates office location"
              src="https://www.google.com/maps?q=Bypass+road,+opposite+Himal+Hotel,+Ward+no.+8,+Birgunj&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="rounded-3xl bg-neutral-200 p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Address</p>
            <p className="mt-2 font-bold text-neutral-900">
              Bypass road, opposite Himal Hotel, Ward no. 8, Birgunj
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</p>
            <p className="mt-2 font-bold text-neutral-900">admin@askplaymates.com</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-neutral-500">Phone</p>
            <p className="mt-2 font-bold text-neutral-900">9855074067, 9855035067</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
