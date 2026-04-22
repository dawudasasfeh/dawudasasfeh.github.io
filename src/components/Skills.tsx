"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES, STRENGTHS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills & Tools"
          subtitle="The technologies and concepts I work with daily."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid sm:grid-cols-2 gap-6 mb-16"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-[var(--accent)] mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h3 className="text-center text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-8">
            Core Strengths
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid sm:grid-cols-3 gap-6"
          >
            {STRENGTHS.map((strength) => (
              <motion.div
                key={strength.title}
                variants={staggerItem}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--accent-glow-strong)] transition-colors">
                  <StrengthIcon name={strength.icon} />
                </div>
                <h4 className="font-semibold text-[var(--foreground)] mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StrengthIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-[var(--accent)]";
  switch (name) {
    case "puzzle":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.089 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.421 48.421 0 0 0-4.185.3c-.418.063-.83.196-1.2.393A2.04 2.04 0 0 0 4.25 8.875v0c0 .621.504 1.125 1.125 1.125h.375c.621 0 1.125.504 1.125 1.125v0c0 .621-.504 1.125-1.125 1.125h-.375A1.125 1.125 0 0 0 4.25 13.375v.875c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125.504 1.125 1.125v0c0 .621-.504 1.125-1.125 1.125h-.75a.75.75 0 0 0-.75.75v.375c0 .621.504 1.125 1.125 1.125h12.5c.621 0 1.125-.504 1.125-1.125v-.375a.75.75 0 0 0-.75-.75h-.75c-.621 0-1.125-.504-1.125-1.125v0c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125-.504 1.125-1.125v-.875a1.125 1.125 0 0 0-1.125-1.125h-.375c-.621 0-1.125-.504-1.125-1.125v0c0-.621.504-1.125 1.125-1.125h.375c.621 0 1.125-.504 1.125-1.125v0c0-.76-.415-1.453-1.058-1.951a2.868 2.868 0 0 0-1.2-.393 48.394 48.394 0 0 0-4.185-.3.64.64 0 0 1-.657-.643v0Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      );
    case "chip":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
        </svg>
      );
    default:
      return null;
  }
}
