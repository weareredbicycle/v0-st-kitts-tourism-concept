'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Compass, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-primary" />
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">
              St. Kitts
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Explore
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Beaches</DropdownMenuItem>
                <DropdownMenuItem>Rainforest</DropdownMenuItem>
                <DropdownMenuItem>Historic Sites</DropdownMenuItem>
                <DropdownMenuItem>Adventure</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="#experiences" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Experiences
            </Link>
            <Link href="#plan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Plan Your Trip
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Planning
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <Link href="#explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Explore
              </Link>
              <Link href="#experiences" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Experiences
              </Link>
              <Link href="#plan" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Plan Your Trip
              </Link>
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start text-sm">
                  Sign In
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Planning
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
