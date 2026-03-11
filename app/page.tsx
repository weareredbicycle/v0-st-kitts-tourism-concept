import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { AiPlanner } from '@/components/ai-planner'
import { TripStyles } from '@/components/trip-styles'
import { Beaches } from '@/components/beaches'
import { Destinations } from '@/components/destinations'
import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AiPlanner />
        <TripStyles />
        <Beaches />
        <Destinations />
        <Experiences />
      </main>
      <Footer />
    </>
  )
}
