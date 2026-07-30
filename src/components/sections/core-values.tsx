"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CORE_VALUES } from "@/data/core-values";

const [community, accessibility, innovation, trust, growth] = CORE_VALUES;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function Card({ value }: { value: (typeof CORE_VALUES)[number] }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex h-full flex-col rounded-[2rem] bg-white p-7 shadow-sm"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand">
        <value.icon className="size-5" />
      </span>
      <h3 className="mt-5 font-serif text-xl text-neutral-900">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{value.description}</p>
    </motion.div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-teal-50 py-20 sm:py-28">
      <Image
        aria-hidden
        src="/screens/illustration-lines.png"
        alt=""
        width={760}
        height={140}
        className="pointer-events-none absolute left-1/2 bottom-0 w-[1300px] max-w-none -translate-x-1/2 translate-y-1/3 opacity-15"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl text-neutral-900 sm:text-5xl">Ethics</h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={container}
          className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-[1.2fr_1fr_1fr]"
        >
          <div className="col-span-2 lg:col-span-1 lg:row-span-2">
            <Card value={community} />
          </div>
          <Card value={accessibility} />
          <Card value={trust} />
          <Card value={innovation} />
          <Card value={growth} />
        </motion.div>
      </div>
    </section>
  );
}
