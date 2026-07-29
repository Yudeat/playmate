"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  ABOUT_SECTION_FOR_PLAYERS as FOR_PLAYERS,
  ABOUT_SECTION_FOR_BUSINESSES as FOR_BUSINESSES,
  ABOUT_SECTION_SCREENS as SCREENS,
} from "@/data/about";

export function About() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  const [screenIndex, setScreenIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setScreenIndex(progress > 0.5 ? 1 : 0);
  });

  const screen = SCREENS[screenIndex];

  return (
    <section id="about" className="relative mt-16 bg-neutral-50 sm:mt-24">
      {/* scroll runway: on lg+ the whole view (text + phone) stays pinned in one place while this scrolls past, driving the swap.
          Below lg there isn't room to pin a screen-tall block without clipping content, so it just flows normally. */}
      <div ref={runwayRef} className="relative lg:h-[200vh]">
        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:sticky lg:top-0 lg:min-h-screen lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-neutral-800 sm:text-5xl">
              Our Platform
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Playmates is Nepal&apos;s first complete sports &amp; fitness ecosystem, connecting
              players, venues, coaches, academies, and events on one platform.
            </p>
          </div>

          <div className="mt-12 grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto aspect-[612/1250] w-[170px] sm:w-[220px] lg:mx-0 lg:w-[260px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={screen.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} sizes="260px" className="h-auto w-full" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              <div className="grid gap-8 text-left sm:grid-cols-2">
                <div>
                  <h3 className="font-bold text-neutral-900">For Players</h3>
                  <ul className="mt-4 space-y-3">
                    {FOR_PLAYERS.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900">For Sports Businesses</h3>
                  <ul className="mt-4 space-y-3">
                    {FOR_BUSINESSES.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-8 h-11 gap-2 rounded-full border-neutral-200 bg-transparent px-6 text-base text-neutral-900 transition-transform hover:scale-[1.02] hover:bg-neutral-50"
              >
                <a href="/about">
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
