import { useEffect, useState } from 'react'
import { fetchRepos, type Repo } from '../lib/github'
import { ProjectCard } from './ProjectCard'

type Status = 'loading' | 'error' | 'ready'

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [status, setStatus] = useState<Status>('loading')

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
        Live from GitHub — pulled directly from{' '}
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

      <div className="mt-10" role="status" aria-live="polite">
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
      </div>

      {status === 'ready' && repos.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </ul>
      )}
    </section>
  )
}
