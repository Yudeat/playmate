"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/nav";

const menuContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const menuItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`flex shrink-0 items-center overflow-hidden rounded-full border border-neutral-200/80 bg-white/95 px-4 py-2 backdrop-blur-sm transition-shadow duration-300 sm:px-5 sm:py-2.5 ${
            scrolled ? "shadow-md" : "shadow-sm"
          }`}
        >
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <AnimatePresence mode="wait" initial={false}>
              {scrolled ? (
                <motion.div
                  key="icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src="/app-icon.png" alt="Playmates" width={64} height={64} priority className="size-8 rounded-lg sm:size-9" />
                </motion.div>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image src="/logo.png" alt="Playmates" width={140} height={71} priority className="h-10 w-auto sm:h-12" />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>

        <div
          className={`flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white/95 p-1.5 backdrop-blur-sm transition-shadow duration-300 sm:gap-2 sm:p-2 ${
            scrolled ? "shadow-md" : "shadow-sm"
          }`}
        >
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex size-8 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 sm:size-9"
          >
            <Menu className="size-5" />
          </button>

          <Button className="h-8 rounded-full bg-brand px-4 text-sm text-brand-foreground hover:bg-brand/90 sm:h-9 sm:px-5 sm:text-base">
            Get the app
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex h-dvh w-screen flex-col bg-white px-4 py-4 sm:px-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Image src="/app-icon.png" alt="Playmates" width={64} height={64} className="size-10 rounded-lg" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-lg border border-brand/40 text-neutral-900"
              >
                <X className="size-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={menuContainer}
              className="flex flex-1 flex-col items-center justify-center gap-2 text-center"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  variants={menuItem}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-neutral-900 transition-colors hover:text-brand"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
              <a href="/contact" onClick={() => setOpen(false)} className="text-sm text-neutral-500 hover:text-neutral-900">
                Contact Us
              </a>
              <a href="mailto:admin@askplaymates.com" className="text-sm text-neutral-500 hover:text-neutral-900">
                admin@askplaymates.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
