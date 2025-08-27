// <CHANGE> Converting Next.js page to React App component
import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { ModelsSection } from "./components/models-section"
import { HeritageSection } from "./components/heritage-section"
import { InnovationSection } from "./components/innovation-section"
import { ExperienceSection } from "./components/experience-section"
import { Footer } from "./components/footer.tsx"

function App() {
  return (
    <div className="min-h-screen dark">
      <Navigation />
      <HeroSection />
      <ModelsSection />
      <HeritageSection />
      <InnovationSection />
      <ExperienceSection />
      <Footer />
    </div>
  )
}

export default App
