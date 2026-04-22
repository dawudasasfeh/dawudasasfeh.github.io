"use client";

import { motion } from "framer-motion";
import { PERSONAL, EDUCATION, AWARDS } from "@/lib/constants";
import { fadeUp, fadeLeft, fadeRight, viewportSettings } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[var(--surface-border)]" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A quick overview of who I am and what I do."
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="md:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              <p className="text-[var(--foreground-muted)] leading-relaxed text-base md:text-lg">
                {PERSONAL.about}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="md:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--foreground)]">
                  Education
                </h3>
              </div>
              <p className="text-sm text-[var(--accent)] font-medium">
                {EDUCATION.degree}
              </p>
              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                {EDUCATION.institution}
              </p>
              <p className="text-xs text-[var(--foreground-subtle)] mt-1">
                {EDUCATION.duration}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-glow)] text-xs font-medium text-[var(--accent)]">
                GPA: {EDUCATION.gpa}
              </div>
            </div>

            {AWARDS.map((award, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h0A3.375 3.375 0 0 0 9.75 14.25v4.5m6.75 0h-6.75" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    Award
                  </h3>
                </div>
                <p className="text-sm text-amber-400 font-medium">
                  {award.title}
                </p>
                <p className="text-xs text-[var(--foreground-muted)] mt-2">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
