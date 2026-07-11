import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CompaniesGallery } from './components/CompaniesGallery'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Background } from './components/Background'

function App() {
  return (
    <>
      <Background />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="relative z-10">
        <Header />
        <main id="main">
          <Hero />
          <CompaniesGallery />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
