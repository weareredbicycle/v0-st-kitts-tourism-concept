import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Destinations } from '@/components/destinations'
import { Experiences } from '@/components/experiences'
import { AiPlanner } from '@/components/ai-planner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AiPlanner />
        <Destinations />
        <Experiences />
      </main>
      <Footer />
    </>
  )
}
