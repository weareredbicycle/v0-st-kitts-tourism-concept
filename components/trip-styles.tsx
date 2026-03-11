'use client'

import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const tripStyles = [
  {
    title: 'Beach Relaxation',
    description: 'Perfect for couples seeking tranquility and romantic sunsets',
    image: '/images/beach-relaxation.jpg',
    rating: 5,
    reviews: 248,
  },
  {
    title: 'Adventure Seeker',
    description: 'Hiking, zip-lining, snorkeling and water sports',
    image: '/images/adventure-seeker.jpg',
    rating: 5,
    reviews: 186,
  },
  {
    title: 'Family Fun',
    description: 'Kid-friendly beaches, activities and dining options',
    image: '/images/family-fun.jpg',
    rating: 4,
    reviews: 312,
  },
  {
    title: 'Culture & History',
    description: 'Explore colonial heritage and local traditions',
    image: '/images/culture-history.jpg',
    rating: 4,
    reviews: 157,
  },
]

export function TripStyles() {
  return (
    <section id="trip-styles" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Curated Itineraries
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
            Popular Trip Styles
          </h2>
          <p className="mt-6 text-muted-foreground text-lg text-pretty">
            Choose a pre-made itinerary or customize your own perfect Caribbean escape
          </p>
        </div>

        {/* Trip Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tripStyles.map((trip) => (
            <Card 
              key={trip.title}
              className="group overflow-hidden border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {trip.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < trip.rating 
                            ? 'fill-accent text-accent' 
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({trip.reviews} reviews)
                  </span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Plan
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
