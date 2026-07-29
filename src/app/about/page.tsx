import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Compass, Users } from "lucide-react";

import { CoreValues } from "@/components/sections/core-values";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import {
  ABOUT_PAGE_FOR_PLAYERS as FOR_PLAYERS,
  ABOUT_PAGE_FOR_BUSINESSES as FOR_BUSINESSES,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Playmates is Nepal's first complete sports & fitness ecosystem — connecting players, venues, coaches, academies, and events on one platform.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Intro */}
      <section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-28">
        <Image
          aria-hidden
          src="/screens/illustration-lines.png"
          alt=""
          width={760}
          height={140}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-neutral-800 sm:text-5xl">
            Nepal&apos;s First Complete Sports &amp; Fitness Ecosystem
          </h1>

          <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-neutral-600">
            <p>
              Playmates is a Nepal-based sports technology company dedicated to transforming how
              people discover, play, and experience sports. We are building the country&apos;s
              most comprehensive sports ecosystem by connecting players, venues, coaches,
              academies, fitness centres, sporting events, and communities through one
              intelligent digital platform.
            </p>
            <p>
              Whether you&apos;re looking to book a futsal ground, join a badminton game, find a
              gym, participate in a marathon, discover a coach, or connect with people who share
              your passion for sports, Playmates makes it simple.
            </p>
            <p>
              We believe everyone deserves easy access to sports, fitness, and meaningful social
              connections. Our technology removes the hassle of organising games, managing
              bookings, and finding the right people to play with, allowing users to spend more
              time doing what they love.
            </p>
          </div>
        </div>
      </section>

      {/* Our Platform */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-neutral-800 sm:text-4xl">Our Platform</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Playmates is more than a booking application. It is an integrated platform
              designed for every participant in Nepal&apos;s sporting ecosystem.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8">
              <h3 className="text-xl font-bold text-neutral-900">For Players</h3>
              <ul className="mt-5 space-y-3">
                {FOR_PLAYERS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8">
              <h3 className="text-xl font-bold text-neutral-900">For Sports Businesses</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Playmates helps venue owners, academies, coaches, gyms, and event organisers
                digitise their operations through:
              </p>
              <ul className="mt-5 space-y-3">
                {FOR_BUSINESSES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl bg-brand p-8 text-brand-foreground">
              <Compass className="size-8" />
              <h2 className="mt-5 font-serif text-2xl">Our Vision</h2>
              <p className="mt-3 leading-relaxed text-brand-foreground/90">
                To become South Asia&apos;s leading digital sports ecosystem, making sports more
                accessible, connected, and engaging while empowering healthier communities.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8">
              <Users className="size-8 text-brand" />
              <h2 className="mt-5 font-serif text-2xl text-neutral-800">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-neutral-600">
                To inspire active lifestyles by bringing every part of the sports industry
                together on one seamless digital platform that benefits players, businesses, and
                communities alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Playmates */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-neutral-800 sm:text-4xl">Why Playmates?</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-600">
            <p>
              The sports industry in Nepal has grown significantly, yet players still struggle to
              find venues, teammates, events, and reliable information. At the same time, sports
              businesses often rely on manual bookings and traditional marketing.
            </p>
            <p>
              Playmates bridges this gap by creating one trusted platform where technology powers
              every sporting experience — from discovering a game to building long-term sporting
              communities.
            </p>
          </div>
        </div>
      </section>

      <CoreValues />

      {/* Building the future */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-neutral-800 sm:text-4xl">
            Building the Future of Sports in Nepal
          </h2>
          <div className="mt-6 space-y-5 text-left text-lg leading-relaxed text-neutral-600">
            <p>
              Our ambition extends beyond digital bookings. Playmates is creating a connected
              ecosystem where every player, venue, coach, organiser, and fitness business can
              grow together.
            </p>
            <p>
              As Nepal&apos;s sports culture continues to evolve, Playmates aims to become the
              country&apos;s trusted platform for discovering opportunities, building
              communities, and encouraging healthier lifestyles through sports.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline banner */}
      <section className="bg-brand py-16">
        <p className="px-4 text-center text-2xl font-extrabold uppercase tracking-tight text-brand-foreground sm:text-3xl">
          One Platform. Every Sport. Every Player. Every Game.
        </p>
      </section>

      <Footer />
    </main>
  );
}
