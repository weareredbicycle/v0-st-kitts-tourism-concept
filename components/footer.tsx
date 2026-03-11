import Link from 'next/link'
import { Compass, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  explore: [
    { label: 'Beaches', href: '#' },
    { label: 'Rainforest', href: '#' },
    { label: 'Historic Sites', href: '#' },
    { label: 'Adventure', href: '#' },
  ],
  plan: [
    { label: 'AI Planner', href: '#plan' },
    { label: 'Travel Guides', href: '#' },
    { label: 'Accommodations', href: '#' },
    { label: 'Transportation', href: '#' },
  ],
  about: [
    { label: 'Our Story', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Compass className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl font-semibold">
                St. Kitts
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Discover the authentic Caribbean on the island where beauty meets adventure.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Plan</h4>
            <ul className="space-y-3">
              {footerLinks.plan.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-background/60 text-sm mb-4">
              Get travel tips and exclusive offers delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border-0 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} Discover St. Kitts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/40 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/40 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
