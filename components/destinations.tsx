'use client'

import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const destinations = [
  {
    title: 'Frigate Bay',
    description: 'Twin beaches offering both Caribbean calm and Atlantic waves',
    image: '/images/frigate-bay.jpg',
    tag: 'Beach',
  },
  {
    title: 'Brimstone Hill',
    description: 'UNESCO World Heritage fortress with panoramic island views',
    image: '/images/brimstone-hill.jpg',
    tag: 'Heritage',
  },
  {
    title: 'Mount Liamuiga',
    description: 'Hike the dormant volcano through lush tropical rainforest',
    image: '/images/mount-liamuiga.jpg',
    tag: 'Adventure',
  },
  {
    title: 'Basseterre',
    description: 'Explore the charming capital with colonial architecture',
    image: '/images/basseterre.jpg',
    tag: 'Culture',
  },
]

export function Destinations() {
  return (
    <section id="explore" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Explore
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
              Iconic Destinations
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            From volcanic peaks to sugar-white beaches, discover the diverse landscapes that make St. Kitts unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.title}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[240px] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-card/20 backdrop-blur-sm text-xs font-medium text-card">
                      <MapPin className="w-3 h-3 mr-1" />
                      {destination.tag}
                    </span>
                  </div>
                  <h3 className={`font-serif font-semibold text-card ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {destination.title}
                  </h3>
                  <p className={`text-card/80 mt-2 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {destination.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="self-start mt-4 p-0 h-auto text-card hover:text-card hover:bg-transparent group/btn"
                  >
                    Explore
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
