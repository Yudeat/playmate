import { NAV_LINKS, LEGAL_LINKS } from "@/data/nav";

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Find Your Next
            <br />
            Game With Us
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-brand-foreground/80 sm:text-base">
            Playmates is a one-stop sports platform connecting athletes, coaches, venues, event
            organizers, and fitness communities across Nepal.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/15 border-t border-white/15">
          <div className="grid gap-3 py-6 sm:grid-cols-2">
            <p className="text-sm font-medium text-brand-foreground/70">Sitemap</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-foreground/90 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact" className="text-sm text-brand-foreground/90 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-3 py-6 sm:grid-cols-2">
            <p className="text-sm font-medium text-brand-foreground/70">Visit</p>
            <p className="text-sm text-brand-foreground/90">
              Bypass road, opposite Himal Hotel,
              <br />
              Ward no. 8, Birgunj
            </p>
          </div>

          <div className="grid gap-3 py-6 sm:grid-cols-2">
            <p className="text-sm font-medium text-brand-foreground/70">Work With Us</p>
            <div className="space-y-1 text-sm text-brand-foreground/90">
              <a href="mailto:admin@askplaymates.com" className="block hover:text-white">
                admin@askplaymates.com
              </a>
              <a href="tel:9855074067" className="block hover:text-white">
                9855074067, 9855035067
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="mt-4 select-none overflow-hidden whitespace-nowrap pl-4 text-[clamp(4rem,17vw,13rem)] font-black leading-none tracking-tight sm:pl-6 lg:pl-8"
      >
        playmates
      </p>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 pb-8 text-sm text-brand-foreground/70 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p>© 2026 Playmates, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
