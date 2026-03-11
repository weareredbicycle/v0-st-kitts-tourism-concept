'use client'

import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-beach.jpg"
          alt="Pristine beach of St. Kitts with turquoise waters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Powered Travel Planning
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-foreground leading-tight tracking-tight text-balance">
            Discover the
            <span className="text-primary block">Soul of St. Kitts</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Experience Caribbean paradise like never before. Let our AI travel assistant craft your perfect island adventure, from pristine beaches to lush rainforests.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12"
            >
              Plan My Trip
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 h-12"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-semibold text-foreground">68</p>
              <p className="text-sm text-muted-foreground">Square Miles</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-semibold text-foreground">365</p>
              <p className="text-sm text-muted-foreground">Days of Sunshine</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-3xl font-semibold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">UNESCO Site</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
