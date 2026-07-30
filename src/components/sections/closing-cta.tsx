"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative isolate min-h-[420px] overflow-hidden rounded-[2.5rem] bg-brand px-8 py-12 sm:min-h-[520px] sm:px-12 sm:py-16 lg:min-h-[620px] lg:px-16 lg:py-20"
      >
        <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Stop scrolling.
          <br />
          Start playing.
        </h2>

        <Button
          size="lg"
          variant="outline"
          className="mt-8 h-11 rounded-full border-white/40 bg-transparent px-6 text-base text-white hover:bg-white/10"
        >
          Get the app
        </Button>

        {/* ponytail: brand wordmark repeated as an oversized watermark, sized off viewport width so it always fits fully inside the card */}
        <p
          aria-hidden
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(2.5rem,9vw,8rem)] font-black leading-none tracking-tight text-brand-dark sm:bottom-8 lg:bottom-10"
        >
          playmates
        </p>
      </motion.div>
    </section>
  );
}
