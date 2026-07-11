import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const SKILLS = [
  'Full-Stack Development',
  'Business Automation',
  'FastAPI & Postgres',
  'Systems Integration',
  'Game Design',
]

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reducedMotion ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center sm:pt-28"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col items-center gap-6"
      >
        <motion.p
          variants={item}
          className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]"
        >
          Senior Fullstack Developer
        </motion.p>
        <motion.h1
          id="hero-heading"
          variants={item}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Alexander Sierputowski
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]"
        >
          I build scalable business automation systems and full-stack
          applications, from FastAPI and Postgres backends to Microsoft 365,
          Paycom, and Duo integrations, with a background in game design
          that shaped how I think about modular, maintainable, long-lasting
          software.
        </motion.p>
        <motion.ul
          variants={item}
          className="flex flex-wrap items-center justify-center gap-2"
          aria-label="Core skills"
        >
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-3 py-1 text-sm text-[var(--color-text-muted)]"
            >
              {skill}
            </li>
          ))}
        </motion.ul>
        <motion.div variants={item} className="mt-2 flex gap-3">
          <a
            href="#projects"
            className="rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-contrast)] transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--color-bg-subtle)]"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
