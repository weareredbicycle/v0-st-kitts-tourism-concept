'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { 
  Sparkles, 
  Send, 
  MapPin, 
  Calendar, 
  Sun, 
  Palmtree,
  Loader2,
  Mic,
  ImagePlus,
  Clock,
  Utensils
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const suggestedPrompts = [
  "Plan a 4-day trip to St Kitts",
  "Best beaches for families",
  "Adventure activities in St Kitts",
]

export function AiPlanner() {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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

  // Helper function to render formatted message content
  const renderMessageContent = (text: string) => {
    // Check if it's an itinerary response (contains "Day" patterns)
    if (text.includes('Day 1') || text.includes('Day 2')) {
      return (
        <div className="space-y-4">
          {text.split(/(?=Day \d)/).map((section, idx) => {
            if (!section.trim()) return null
            const lines = section.trim().split('\n')
            const dayTitle = lines[0]
            const activities = lines.slice(1).filter(l => l.trim())
            
            if (dayTitle.startsWith('Day')) {
              return (
                <div key={idx} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {dayTitle}
                  </h4>
                  <ul className="space-y-1.5">
                    {activities.map((activity, aIdx) => (
                      <li key={aIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                        {activity.includes('AM') || activity.includes('PM') ? (
                          <>
                            <Clock className="w-3 h-3 mt-1 text-primary/60 shrink-0" />
                            <span>{activity.replace(/^[•\-]\s*/, '')}</span>
                          </>
                        ) : activity.toLowerCase().includes('lunch') || activity.toLowerCase().includes('dinner') || activity.toLowerCase().includes('breakfast') ? (
                          <>
                            <Utensils className="w-3 h-3 mt-1 text-primary/60 shrink-0" />
                            <span>{activity.replace(/^[•\-]\s*/, '')}</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="w-3 h-3 mt-1 text-primary/60 shrink-0" />
                            <span>{activity.replace(/^[•\-]\s*/, '')}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
            return <p key={idx} className="text-sm">{section}</p>
          })}
        </div>
      )
    }
    
    return <p className="text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
  }

  return (
    <section id="ai-planner" className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Planning
          </div>
          
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-foreground text-balance">
            AI Travel Planner
          </h2>
          
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Tell us about your dream Caribbean getaway, and our AI will craft a personalized itinerary just for you.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">St. Kitts AI Assistant</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Online & Ready to Help
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-[450px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-muted/30 to-card">
                {messages.length === 0 ? (
                  <div className="flex flex-col h-full">
                    {/* Welcome Message */}
                    <div className="flex gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="bg-card border border-border rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
                        <p className="text-foreground text-sm leading-relaxed">
                          {"Hello! I'm your AI travel assistant for St. Kitts. I can help you plan the perfect trip. Try asking me something like:"}
                        </p>
                        <ul className="mt-3 space-y-2">
                          <li className="text-sm text-primary font-medium">{'"Plan a 4-day trip to St. Kitts"'}</li>
                          <li className="text-sm text-primary font-medium">{'"Best beaches for families"'}</li>
                          <li className="text-sm text-primary font-medium">{'"Romantic dinner spots"'}</li>
                        </ul>
                      </div>
                    </div>

                    {/* Suggestion Pills */}
                    <div className="mt-auto">
                      <p className="text-xs text-muted-foreground mb-3">Quick suggestions:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedPrompts.map((prompt) => (
                          <button
                            key={prompt}
                            onClick={() => handleSuggestionClick(prompt)}
                            disabled={isLoading}
                            className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {prompt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                            <Sparkles className="w-5 h-5 text-primary-foreground" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground rounded-br-sm'
                              : 'bg-card border border-border text-foreground rounded-tl-sm'
                          }`}
                        >
                          {message.parts.map((part, index) => {
                            if (part.type === 'text') {
                              return message.role === 'assistant' ? (
                                <div key={index}>
                                  {renderMessageContent(part.text)}
                                </div>
                              ) : (
                                <p key={index} className="text-sm leading-relaxed">
                                  {part.text}
                                </p>
                              )
                            }
                            return null
                          })}
                        </div>
                        {message.role === 'user' && (
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                            <span className="text-sm font-medium text-muted-foreground">You</span>
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                          <Sparkles className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="bg-card border border-border rounded-2xl rounded-tl-sm p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 text-primary animate-spin" />
                            <span className="text-sm text-muted-foreground">Planning your trip...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything about St. Kitts..."
                      disabled={isLoading}
                      className="w-full px-4 py-3 pr-24 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <button
                        type="button"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Voice input"
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Upload image"
                      >
                        <ImagePlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
