import Hero from '../components/Home/Hero'
import TrustBar from '../components/Home/TrustBar'
import About from '../components/Home/About'
import LearningAreas from '../components/Home/LearningAreas'
import AudienceImpact from '../components/Home/AudienceImpact'
import CtaBanner from '../components/Home/CtaBanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <LearningAreas />
      <AudienceImpact />
      <CtaBanner />
    </main>
  )
}