import Image from "next/image";

import { About } from "@/components/sections/about";
import { ClosingCta } from "@/components/sections/closing-cta";
import { CoreValues } from "@/components/sections/core-values";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Showcase } from "@/components/sections/showcase";

export default function Home() {
  return (
    <main className="relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/screens/illustration-lines.png"
          alt=""
          width={760}
          height={140}
          className="absolute left-1/2 top-1/3 w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        />
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <About />
      <CoreValues />
      <ClosingCta />
      <Footer />
    </main>
  );
}
