"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/constants";
import SocialIcon from "@/components/SocialIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.06] top-[-10%] left-[-10%]"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-[var(--accent-secondary)] opacity-[0.05] bottom-[-10%] right-[-10%]"
        style={{ animation: "float 10s ease-in-out infinite 2s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--foreground-subtle) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-sm text-[var(--foreground-muted)]">
            {PERSONAL.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">{PERSONAL.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--foreground-muted)] font-light mb-8"
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            id="hero-cta-projects"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--background)] font-medium hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_30px_var(--accent-glow-strong)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="px-6 py-3 rounded-lg border border-[var(--surface-border)] text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`hero-social-${social.icon}`}
              className="w-10 h-10 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
              aria-label={social.label}
            >
              <SocialIcon name={social.icon} size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--surface-border)] flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
