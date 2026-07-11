import { motion } from 'framer-motion'
import type { Repo } from '../lib/github'
import typescriptIcon from '../assets/logos/tech/typescript.svg'
import javascriptIcon from '../assets/logos/tech/javascript.svg'
import pythonIcon from '../assets/logos/tech/python.svg'
import csharpIcon from '../assets/logos/tech/csharp.svg'
import html5Icon from '../assets/logos/tech/html5.svg'
import css3Icon from '../assets/logos/tech/css3.svg'
import goIcon from '../assets/logos/tech/go.svg'
import bashIcon from '../assets/logos/tech/bash.svg'
import cIcon from '../assets/logos/tech/c.svg'
import rustIcon from '../assets/logos/tech/rust.svg'

const LANGUAGE_ICONS: Record<string, string> = {
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  Python: pythonIcon,
  'C#': csharpIcon,
  HTML: html5Icon,
  CSS: css3Icon,
  Go: goIcon,
  Shell: bashIcon,
  C: cIcon,
  Rust: rustIcon,
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Shell: '#89e051',
  C: '#555555',
  Rust: '#dea584',
}

export function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  const languageIcon = repo.language ? LANGUAGE_ICONS[repo.language] : undefined
  const languageColor = repo.language
    ? (LANGUAGE_COLORS[repo.language] ?? '#8b8b93')
    : null

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
      className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[var(--color-accent)] hover:underline"
          >
            {repo.name}
          </a>
        </h3>
        {repo.stargazers_count > 0 && (
          <span
            className="flex shrink-0 items-center gap-1 text-sm text-[var(--color-text-muted)]"
            aria-label={`${repo.stargazers_count} stars`}
          >
            <span aria-hidden="true">★</span>
            {repo.stargazers_count}
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
        {repo.description ?? 'No description provided.'}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        {repo.language ? (
          <span className="flex items-center gap-1.5">
            {languageIcon ? (
              <img src={languageIcon} alt="" className="h-3.5 w-3.5" />
            ) : (
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: languageColor ?? undefined }}
              />
            )}
            {repo.language}
          </span>
        ) : (
          <span />
        )}
        <a
          href={repo.homepage || repo.html_url}
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-[var(--color-accent)] hover:underline"
        >
          {repo.homepage ? 'Live demo →' : 'View repo →'}
        </a>
      </div>
    </motion.li>
  )
}
