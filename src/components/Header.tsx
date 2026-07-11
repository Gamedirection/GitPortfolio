import { ThemeToggle } from './ThemeToggle'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <span className="flex items-center gap-2 font-semibold tracking-tight">
          <img src={logo} alt="" width="28" height="28" className="rounded-full" />
          Alexander Sierputowski
        </span>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
