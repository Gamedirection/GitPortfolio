export type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  fork: boolean
  archived: boolean
  homepage: string | null
}

const GITHUB_USERNAME = 'Gamedirection'

// Forks worth showing despite the fork filter below (real contribution work).
const PINNED_FORKS = new Set(['AffinityOnLinux'])

export async function fetchRepos(): Promise<Repo[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    { headers: { Accept: 'application/vnd.github+json' } },
  )

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`)
  }

  const repos: Repo[] = await response.json()

  return repos
    .filter(
      (repo) =>
        (!repo.fork || PINNED_FORKS.has(repo.name)) && !repo.archived,
    )
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )
}
