"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SHOWCASE_SCREENS } from "@/data/showcase";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Showcase() {
  return (
    <section id="showcase" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">App Screens</p>
        <h2 className="mx-auto mt-3 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
          See Playmates In Action
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="mt-16 flex snap-x snap-mandatory items-end gap-6 overflow-x-auto px-4 pb-4 xl:justify-center xl:overflow-visible xl:pb-0"
      >
        {SHOWCASE_SCREENS.map((screen) => (
          <motion.div
            key={screen.src}
            variants={item}
            className={`w-[140px] shrink-0 snap-center sm:w-[190px] ${screen.lift}`}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="220px"
              className="h-auto w-full"
            />
            <div className="mt-4 text-center">
              <p className="text-sm font-bold text-neutral-900">{screen.title}</p>
              <p className="mt-1 text-xs text-neutral-500">{screen.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-10 text-center text-sm font-semibold text-neutral-500">...and many more</p>
    </section>
  );
}
