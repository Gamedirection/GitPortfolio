import { motion } from 'framer-motion'
import gamedirectionLogo from '../assets/logo.png'
import ctmsLogo from '../assets/logos/companies/ctms.png'
import accelSchoolsLogo from '../assets/logos/companies/accel-schools.png'
import pansophicLogo from '../assets/logos/companies/pansophic-learning.png'
import caiLogo from '../assets/logos/companies/cai.svg'
import cmsdLogo from '../assets/logos/companies/cmsd.svg'
import previouslyPlutoLogo from '../assets/logos/companies/previously-pluto.svg'
import riotLogo from '../assets/logos/companies/riot-games.svg'
import capcomLogo from '../assets/logos/companies/capcom.svg'
import hylandLogo from '../assets/logos/companies/hyland.png'
import tarkettLogo from '../assets/logos/companies/tarkett.svg'
import amourgisLogo from '../assets/logos/companies/amourgis.png'
import dreebotLogo from '../assets/logos/companies/dreebot.png'
import violetKnightLogo from '../assets/logos/companies/violet-knight.png'

const COMPANIES = [
  { name: 'CTMS', src: ctmsLogo, href: 'https://ctmsit.com' },
  { name: 'GameDirection', src: gamedirectionLogo, href: 'https://gamedirection.net' },
  { name: 'Accel Schools', src: accelSchoolsLogo, href: 'https://accelschools.com' },
  {
    name: 'Pansophic Learning',
    src: pansophicLogo,
    href: 'https://pansophiclearning.com',
  },
  { name: 'CAI', src: caiLogo, href: 'https://cai.io' },
  {
    name: 'Cleveland Metropolitan School District',
    src: cmsdLogo,
    href: 'https://www.clevelandmetroschools.org',
  },
  {
    name: 'Previously Pluto',
    src: previouslyPlutoLogo,
    href: 'https://previouslypluto.com',
  },
  { name: 'Riot Games', src: riotLogo, href: 'https://www.riotgames.com' },
  { name: 'Capcom', src: capcomLogo, href: 'https://www.capcom.com' },
  { name: 'Hyland OnBase', src: hylandLogo, href: 'https://www.hyland.com' },
  { name: 'Tarkett', src: tarkettLogo, href: 'https://www.tarkett.com' },
  { name: 'Amourgis & Associates', src: amourgisLogo, href: 'https://www.amourgis.com' },
  { name: 'DreeBot', src: dreebotLogo, href: 'https://dreebot.com' },
  { name: 'Violet Knight', src: violetKnightLogo, href: 'https://violet-knight.com' },
]

export function CompaniesGallery() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 id="experience-heading" className="text-center text-3xl font-bold">
        Companies I've Worked At
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-[var(--color-text-muted)]">
        Studios, schools, and software companies I've built things for.
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {COMPANIES.map((company, index) => (
          <motion.li
            key={company.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.05 }}
          >
            <a
              href={company.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={company.name}
              title={company.name}
              className="flex h-24 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={company.src}
                alt={company.name}
                className="max-h-12 max-w-full object-contain"
                loading="lazy"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
