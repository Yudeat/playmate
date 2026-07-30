import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { LegalDocument } from "@/components/sections/legal-document";
import { Navbar } from "@/components/sections/navbar";
import { PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Playmates collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative bg-[#FAF6E9]">
      <Navbar />
      <LegalDocument title="Privacy Policy" lastUpdated={PRIVACY_LAST_UPDATED} sections={PRIVACY_SECTIONS} />
      <Footer />
    </main>
  );
}
