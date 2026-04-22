"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Where I have gained professional knowledge."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative"
        >
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--surface-border)] to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow-strong)]" />

              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--foreground)]">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[var(--accent)]">{exp.company}</p>
                  </div>
                  <span className="text-xs text-[var(--foreground-subtle)] bg-[var(--surface)] px-3 py-1 rounded-full border border-[var(--surface-border)]">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {exp.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
