'use client'

import { 
  Waves, 
  Mountain, 
  UtensilsCrossed, 
  Music,
  Sailboat,
  TreePalm
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    icon: Waves,
    title: 'Beach & Water Sports',
    description: 'Snorkel vibrant reefs, kayak secluded coves, or simply relax on pristine beaches.',
  },
  {
    icon: Mountain,
    title: 'Volcano Hiking',
    description: 'Trek through tropical rainforest to the crater rim of Mount Liamuiga.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Caribbean Cuisine',
    description: 'Savor fresh seafood, jerk spices, and rum cocktails at beachside restaurants.',
  },
  {
    icon: Music,
    title: 'Local Culture',
    description: 'Experience calypso rhythms, colorful festivals, and warm Kittitian hospitality.',
  },
  {
    icon: Sailboat,
    title: 'Island Hopping',
    description: 'Set sail to neighboring Nevis or explore hidden beaches by catamaran.',
  },
  {
    icon: TreePalm,
    title: 'Eco Adventures',
    description: 'Zipline through rainforest canopy or discover wildlife on nature trails.',
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-20 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Experiences
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
            Unforgettable Moments Await
          </h2>
          <p className="mt-6 text-muted-foreground text-lg text-pretty">
            Whether you seek adventure or relaxation, St. Kitts offers experiences that create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card 
              key={experience.title}
              className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <experience.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
