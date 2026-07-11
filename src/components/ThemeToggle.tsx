import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = usePrefersReducedMotion()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-1 transition-colors focus-visible:outline-none"
    >
      <motion.span
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm"
        animate={{ x: isDark ? 28 : 0 }}
        transition={
          reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 30 }
        }
      >
        <span aria-hidden="true">{isDark ? '🌙' : '☀️'}</span>
      </motion.span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  )
}
