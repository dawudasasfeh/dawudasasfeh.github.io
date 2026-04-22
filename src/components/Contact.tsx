"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";
import SocialIcon from "@/components/SocialIcon";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div
        className="glow-orb w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.05] bottom-[-20%] left-[-15%]"
        style={{ animation: "float 9s ease-in-out infinite" }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <SectionHeading
          title="Contact"
          subtitle="Interested in working together? Let's connect."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="glass-card rounded-2xl p-8 md:p-12 mb-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
            Let&apos;s Build Something Together
          </h3>
          <p className="text-[var(--foreground-muted)] mb-8 max-w-md mx-auto">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to say hello, feel free to reach out.
          </p>

          <a
            href={`mailto:${PERSONAL.email}`}
            id="contact-email-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--background)] font-semibold hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_40px_var(--accent-glow-strong)] text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Say Hello
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex items-center justify-center gap-4"
        >
          {SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              variants={staggerItem}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              id={`contact-social-${social.icon}`}
              className="w-12 h-12 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
              aria-label={social.label}
            >
              <SocialIcon name={social.icon} size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
