'use client'

import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { 
  Sparkles, 
  Send, 
  MapPin, 
  Calendar, 
  Sun, 
  Palmtree,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const suggestedPrompts = [
  {
    icon: Calendar,
    text: "Plan a 5-day itinerary for a honeymoon",
  },
  {
    icon: Sun,
    text: "Best beaches for snorkeling",
  },
  {
    icon: MapPin,
    text: "Top historic sites to visit",
  },
  {
    icon: Palmtree,
    text: "Family-friendly activities",
  },
]

export function AiPlanner() {
  const [input, setInput] = useState('')
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleSuggestionClick = (suggestion: string) => {
    if (isLoading) return
    sendMessage({ text: suggestion })
  }

  return (
    <section id="plan" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Planning
            </div>
            
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
              Your Personal Travel Assistant
            </h2>
            
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Tell us about your dream Caribbean getaway, and our AI will craft a personalized itinerary just for you. From hidden gems to must-see landmarks, discover St. Kitts your way.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt.text}
                  onClick={() => handleSuggestionClick(prompt.text)}
                  disabled={isLoading}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <prompt.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{prompt.text}</span>
                </button>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-0">
              <div className="h-[500px] flex flex-col">
                <div className="flex items-center gap-3 p-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Kitti</p>
                    <p className="text-xs text-muted-foreground">Your St. Kitts Travel Guide</p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        Welcome to St. Kitts!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {"I'm Kitti, your AI travel assistant. Ask me anything about planning your perfect Caribbean adventure!"}
                      </p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground rounded-br-md'
                              : 'bg-muted text-foreground rounded-bl-md'
                          }`}
                        >
                          {message.parts.map((part, index) => {
                            if (part.type === 'text') {
                              return (
                                <p key={index} className="text-sm leading-relaxed whitespace-pre-wrap">
                                  {part.text}
                                </p>
                              )
                            }
                            return null
                          })}
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                        <Loader2 className="w-5 h-5 text-muted-foreground animate-spin" />
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about St. Kitts..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                    />
                    <Button 
                      type="submit" 
                      size="icon"
                      disabled={isLoading || !input.trim()}
                      className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
