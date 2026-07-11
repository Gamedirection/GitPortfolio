import { useEffect, useMemo, useState } from 'react'
import { fetchRepos, type Repo } from '../lib/github'
import { ProjectCard } from './ProjectCard'

type Status = 'loading' | 'error' | 'ready'

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [status, setStatus] = useState<Status>('loading')
  const [search, setSearch] = useState('')
  const [language, setLanguage] = useState('All')

  useEffect(() => {
    let cancelled = false

    fetchRepos()
      .then((data) => {
        if (cancelled) return
        setRepos(data)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  const languages = useMemo(() => {
    const distinct = new Set(
      repos.map((repo) => repo.language).filter((lang): lang is string => Boolean(lang)),
    )
    return ['All', ...Array.from(distinct).sort()]
  }, [repos])

  const filteredRepos = useMemo(() => {
    const query = search.trim().toLowerCase()
    return repos.filter((repo) => {
      const matchesLanguage = language === 'All' || repo.language === language
      const matchesQuery =
        !query ||
        repo.name.toLowerCase().includes(query) ||
        (repo.description ?? '').toLowerCase().includes(query)
      return matchesLanguage && matchesQuery
    })
  }, [repos, search, language])

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 id="projects-heading" className="text-center text-3xl font-bold">
        Projects
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-[var(--color-text-muted)]">
        Live from GitHub, pulled directly from{' '}
        <a
          href="https://github.com/Gamedirection"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-[var(--color-accent)] hover:underline"
        >
          github.com/Gamedirection
        </a>
        .
      </p>

      {status === 'ready' && repos.length > 0 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects by name or description…"
            className="w-full max-w-md rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus-visible:outline-3 focus-visible:outline-[var(--color-focus-ring)]"
          />

          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label="Filter projects by language"
          >
            {languages.map((lang) => {
              const active = lang === language
              return (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    active
                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-contrast)]'
                      : 'border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {lang}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="mt-6" role="status" aria-live="polite">
        {status === 'loading' && (
          <p className="text-center text-[var(--color-text-muted)]">
            Loading projects…
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-[var(--color-text-muted)]">
            Couldn't load projects from GitHub right now. Visit{' '}
            <a
              href="https://github.com/Gamedirection"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-[var(--color-accent)] hover:underline"
            >
              github.com/Gamedirection
            </a>{' '}
            directly.
          </p>
        )}
        {status === 'ready' && repos.length === 0 && (
          <p className="text-center text-[var(--color-text-muted)]">
            No public repositories to show yet.
          </p>
        )}
        {status === 'ready' && repos.length > 0 && (
          <p className="text-center text-sm text-[var(--color-text-muted)]">
            {filteredRepos.length === repos.length
              ? `${repos.length} projects`
              : `${filteredRepos.length} of ${repos.length} projects`}
          </p>
        )}
      </div>

      {status === 'ready' && filteredRepos.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </ul>
      )}

      {status === 'ready' && repos.length > 0 && filteredRepos.length === 0 && (
        <p className="mt-6 text-center text-[var(--color-text-muted)]">
          No projects match your search.
        </p>
      )}
    </section>
  )
}
