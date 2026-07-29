"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FEATURES } from "@/data/features";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Features() {
  return (
    <section id="features" className="mt-16 bg-violet-50 py-24 sm:mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Application Features</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-neutral-900 sm:text-4xl lg:text-5xl">
            We Like To Find Simple Solutions To Complex Challenges
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-3xl p-8 ${feature.bg} ${feature.text} ${feature.span ?? ""}`}
            >
              <span className={`inline-flex size-12 items-center justify-center rounded-full ${feature.iconWrap}`}>
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{feature.description}</p>
            </motion.div>
          ))}

          <motion.a
            href="#home"
            variants={item}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col justify-between rounded-3xl bg-brand-dark p-8 text-white lg:col-span-2"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/15">
              <Download className="size-6" />
            </span>
            <span className="mt-6 text-2xl font-extrabold">Download App</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
