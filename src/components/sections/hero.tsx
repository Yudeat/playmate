"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white text-neutral-900">
      {/* ambient glows filling the margins beside the centered headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand/10 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-teal-400/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 pt-14 text-center sm:px-6 sm:pt-20 lg:px-8">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="text-5xl font-black tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Connect, Compete, <span className="text-brand">Play.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.15}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg text-neutral-600 sm:text-xl"
        >
          Find venues, book instantly, and match with teammates nearby.{" "}
          <br className="hidden sm:block" />
          Every sport in Nepal, yours to play.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-12 w-full gap-2 rounded-full bg-brand px-6 text-base text-brand-foreground transition-transform hover:scale-[1.02] hover:bg-brand/90 sm:w-auto"
          >
            <Download className="size-5" />
            Download App
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full gap-2 rounded-full border-neutral-200 bg-transparent px-6 text-base text-neutral-900 transition-transform hover:scale-[1.02] hover:bg-neutral-50 sm:w-auto"
          >
            <Link href="/about">
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Phone overlapping a full-bleed desk photo */}
      <div className="relative mt-14 sm:mt-20">
        <Image
          aria-hidden
          src="/hero-desk.png"
          alt=""
          width={1370}
          height={784}
          sizes="100vw"
          className="absolute inset-x-0 bottom-0 h-[400px] w-full object-cover sm:h-[400px] lg:h-[600px]"        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 mx-auto w-[280px] pb-0 sm:w-[340px] lg:w-[400px]"
        >
          <Image
            src="/hero-phone-v2.png"
            alt="Playmates app home screen showing venue promos, favorite sports, and nearby courts"
            width={874}
            height={1780}
            sizes="400px"
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
