"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/animations";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="glow-orb w-[400px] h-[400px] bg-[var(--accent-secondary)] opacity-[0.04] top-1/4 right-[-15%]"
        style={{ animation: "float 12s ease-in-out infinite" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Highlighted work that showcases my skills and passions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6 mb-12"
        >
          {featured.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-subtle)] mt-1">
                      {project.role}
                    </p>
                  </div>
                  {"badge" in project && project.badge && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-pill text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
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
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {others.length > 0 && (
          <>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center text-sm font-semibold text-[var(--foreground-muted)] uppercase tracking-wider mb-8"
            >
              Frontend Mentor Challenges
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid sm:grid-cols-2 gap-4"
            >
              {others.map((project) => (
                <motion.a
                  key={project.title}
                  variants={staggerItem}
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  id={`project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="glass-card rounded-xl p-5 group cursor-pointer block"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors text-sm">
                      {project.title}
                    </h4>
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} shrink-0 mt-1.5`}
                    />
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)] mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--surface-border)] text-[var(--foreground-subtle)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex items-center gap-1.5 mt-4 text-xs text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors">
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
                      Live Demo
                    </div>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
