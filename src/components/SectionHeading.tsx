"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        <span className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider">
          {title}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === 0 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              <span className="text-[var(--foreground)]"> {word}</span>
            )}
          </span>
        ))}
      </h2>

      <p className="mt-3 text-[var(--foreground-muted)] max-w-lg mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
