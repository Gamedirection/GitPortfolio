import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Tooltip({
  label,
  children,
}: {
  label: ReactNode
  children: (tooltipId: string) => ReactNode
}) {
  const [visible, setVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const tooltipId = useId()

  return (
    <div
      className="relative flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children(tooltipId)}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            id={tooltipId}
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 6,
              scale: reducedMotion ? 1 : 0.95,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : 6,
              scale: reducedMotion ? 1 : 0.95,
            }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] shadow-lg"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
