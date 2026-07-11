import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      'Alex S. performed a miracle saving my files when the computer crashed.',
    name: 'Marcia L.',
    role: 'Westpark Community Elementary',
  },
  {
    quote: 'Alex did a great job getting my laptop going again.',
    name: 'Danette W.',
    role: 'Westpark Community Elementary',
  },
  {
    quote: 'Very responsive and polite.',
    name: 'Sharon M.',
    role: 'Westpark Community Elementary',
  },
  {
    quote:
      "I'm so glad you are part of the team. You are always so helpful!",
    name: 'Jean R.',
    role: 'Westpark Community Elementary',
  },
  {
    quote:
      'Alexander did a fantastic job. He fixed all my problems and quickly explained the steps.',
    name: 'Brenda I.',
    role: 'Parma Day Drive Elementary',
  },
  {
    quote: 'Excellent job, Alex. Nailed it.',
    name: 'Enrique T.',
    role: 'CEO, CTMS',
  },
  {
    quote: 'Absolutely fantastic job.',
    name: 'Tyler G.',
    role: 'CTMS',
  },
  {
    quote:
      "He's probably the best one to help troubleshoot and document the client applications.",
    name: 'Brian L.',
    role: 'VP of Infrastructure & Security, Pansophic Learning',
  },
]

const STATS = [
  { value: '4,900+', label: 'Tickets handled' },
  { value: '3,300+', label: 'Resolved personally' },
  { value: '1.25 yrs', label: 'Across multiple schools' },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 id="testimonials-heading" className="text-center text-3xl font-bold">
        What People Say
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-[var(--color-text-muted)]">
        Real feedback from the people and teams I've worked with.
      </p>

      <dl className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-4 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="text-2xl font-bold text-[var(--color-accent)]">
              {stat.value}
            </dt>
            <dd className="text-xs text-[var(--color-text-muted)]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.li
            key={testimonial.name + testimonial.quote}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
            className="project-card flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <span
              aria-hidden="true"
              className="text-3xl leading-none text-[var(--color-accent)]"
            >
              &ldquo;
            </span>
            <p className="mt-1 flex-1 text-sm text-[var(--color-text)]">
              {testimonial.quote}
            </p>
            <footer className="mt-4 border-t border-[var(--color-border)] pt-3">
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {testimonial.role}
              </p>
            </footer>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
