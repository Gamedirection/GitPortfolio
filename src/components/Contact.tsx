import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'alex@gamedirection.net',
    href: 'mailto:alex@gamedirection.net',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/Gamedirection',
    href: 'https://github.com/Gamedirection',
    icon: '🐙',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gamedirection',
    href: 'https://www.linkedin.com/in/gamedirection/',
    icon: '💼',
  },
]

export function Contact() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 id="contact-heading" className="text-center text-3xl font-bold">
        Get in Touch
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-[var(--color-text-muted)]">
        Open to new opportunities and interesting problems — reach out
        through any of these.
      </p>

      <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center">
        {CONTACT_LINKS.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex-1"
          >
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 text-center transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <span aria-hidden="true" className="text-2xl">
                {link.icon}
              </span>
              <span className="font-semibold">{link.label}</span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {link.value}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
