'use client'

import Image from 'next/image'
import { ArrowRight, UtensilsCrossed, Waves, Music, Sailboat, Umbrella, PartyPopper } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const beaches = [
  {
    name: 'South Friars Beach',
    description: 'Pristine golden sands with gentle waves, perfect for swimming and relaxation',
    image: '/images/south-friars-beach.jpg',
    tags: [
      { label: 'Restaurants', icon: UtensilsCrossed },
      { label: 'Water Sports', icon: Waves },
      { label: 'Beach Bars', icon: Umbrella },
    ],
  },
  {
    name: 'Cockleshell Beach',
    description: 'Stunning views of Nevis with vibrant beach bars and water activities',
    image: '/images/cockleshell-beach.jpg',
    tags: [
      { label: 'Beach Bars', icon: PartyPopper },
      { label: 'Boat Tours', icon: Sailboat },
      { label: 'Live Music', icon: Music },
    ],
  },
  {
    name: 'Frigate Bay Beach',
    description: 'Twin beaches offering both Caribbean calm and Atlantic waves with nightlife',
    image: '/images/frigate-bay-beach.jpg',
    tags: [
      { label: 'Nightlife', icon: Music },
      { label: 'Water Sports', icon: Waves },
      { label: 'Restaurants', icon: UtensilsCrossed },
    ],
  },
]

export function Beaches() {
  return (
    <section id="beaches" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Paradise Found
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
              Must-Visit Beaches
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-pretty">
              Discover the most beautiful shores of St. Kitts, from tranquil coves to vibrant beach bars
            </p>
          </div>
          <Button 
            variant="outline" 
            className="self-start lg:self-auto border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Beaches
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Beach Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {beaches.map((beach, index) => (
            <Card 
              key={beach.name}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                index === 0 ? 'aspect-[2/1] lg:aspect-[2.5/1]' : 'aspect-[4/3]'
              }`}>
                <Image
                  src={beach.image}
                  alt={beach.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {beach.tags.map((tag) => (
                      <span 
                        key={tag.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/20 backdrop-blur-md text-xs font-medium text-card border border-card/20"
                      >
                        <tag.icon className="w-3 h-3" />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className={`font-serif font-semibold text-card ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                  }`}>
                    {beach.name}
                  </h3>
                  <p className={`text-card/90 mt-2 leading-relaxed ${
                    index === 0 ? 'text-base max-w-xl' : 'text-sm'
                  }`}>
                    {beach.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="self-start mt-4 p-0 h-auto text-card hover:text-card hover:bg-transparent group/btn"
                  >
                    Explore
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
