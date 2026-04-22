"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { fadeIn, viewportSettings } from "@/lib/animations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="border-t border-[var(--surface-border)] py-8 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--foreground-subtle)]">
          © {year}{" "}
          <span className="text-[var(--foreground-muted)]">{PERSONAL.fullName}</span>.
          All rights reserved.
        </p>
        <p className="text-xs text-[var(--foreground-subtle)]">
          Built with{" "}
          <span className="text-[var(--accent)]">Next.js</span>,{" "}
          <span className="text-[var(--accent)]">Tailwind CSS</span> &{" "}
          <span className="text-[var(--accent)]">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
}
