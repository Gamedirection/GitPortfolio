import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CompaniesGallery } from './components/CompaniesGallery'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <CompaniesGallery />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
