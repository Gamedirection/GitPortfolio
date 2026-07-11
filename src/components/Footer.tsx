export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
      <p>
        © {new Date().getFullYear()} Alexander Sierputowski. Built with
        React, Tailwind, and Framer Motion.
      </p>
    </footer>
  )
}
