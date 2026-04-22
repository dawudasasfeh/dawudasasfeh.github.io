"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportSettings } from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Certificates"
          subtitle="Professional courses and certifications I have completed."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                  style={{ animation: "shimmer 2s infinite" }}
                />
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary-glow)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-[var(--accent-secondary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-[var(--foreground)] mb-1 text-sm">
                  {cert.title}
                </h3>
                {cert.issuer && (
                  <p className="text-xs text-[var(--foreground-subtle)] mb-3">
                    By {cert.issuer}
                  </p>
                )}

                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`cert-link-${i}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-secondary)] hover:text-[var(--accent)] transition-colors mt-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
