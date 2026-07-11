import { motion } from 'framer-motion'
import dockerIcon from '../assets/logos/tech/docker.svg'
import helmIcon from '../assets/logos/tech/helm.svg'
import pythonIcon from '../assets/logos/tech/python.svg'
import rustIcon from '../assets/logos/tech/rust.svg'
import postgresqlIcon from '../assets/logos/tech/postgresql.svg'
import goIcon from '../assets/logos/tech/go.svg'
import jsonIcon from '../assets/logos/tech/json.svg'
import yamlIcon from '../assets/logos/tech/yaml.svg'
import typescriptIcon from '../assets/logos/tech/typescript.svg'
import javascriptIcon from '../assets/logos/tech/javascript.svg'
import csharpIcon from '../assets/logos/tech/csharp.svg'
import html5Icon from '../assets/logos/tech/html5.svg'
import css3Icon from '../assets/logos/tech/css3.svg'
import bashIcon from '../assets/logos/tech/bash.svg'
import cIcon from '../assets/logos/tech/c.svg'
import awsIcon from '../assets/logos/tech/aws.svg'
import gitIcon from '../assets/logos/tech/git.svg'
import linuxIcon from '../assets/logos/tech/linux.svg'
import vscodeIcon from '../assets/logos/tech/vscode.svg'

const TECH_STACK = [
  { name: 'Docker', src: dockerIcon },
  { name: 'Helm', src: helmIcon },
  { name: 'Python', src: pythonIcon },
  { name: 'Rust', src: rustIcon },
  { name: 'PostgreSQL', src: postgresqlIcon },
  { name: 'Go', src: goIcon },
  { name: 'JSON', src: jsonIcon },
  { name: 'YAML', src: yamlIcon },
  { name: 'TypeScript', src: typescriptIcon },
  { name: 'JavaScript', src: javascriptIcon },
  { name: 'C#', src: csharpIcon },
  { name: 'HTML5', src: html5Icon },
  { name: 'CSS3', src: css3Icon },
  { name: 'Shell', src: bashIcon },
  { name: 'C', src: cIcon },
  { name: 'AWS', src: awsIcon },
  { name: 'Git', src: gitIcon },
  { name: 'Linux', src: linuxIcon },
  { name: 'VS Code', src: vscodeIcon },
]

export function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 id="stack-heading" className="text-center text-3xl font-bold">
        Tech Stack
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-[var(--color-text-muted)]">
        Languages and tools I reach for most, pulled from what actually
        shows up across my repos.
      </p>

      <ul className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {TECH_STACK.map((tech, index) => (
          <motion.li
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: Math.min(index, 12) * 0.04 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <img
                src={tech.src}
                alt=""
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-medium text-[var(--color-text-muted)]">
              {tech.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
