"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Zap } from "lucide-react"

export default function HomePage() {
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col ml-2 md:ml-8 min-w-0 flex-1">
            <h1 className="text-lg md:text-2xl font-serif font-bold truncate" style={{ color: "#000080" }}>
              ThriftShopper AI
            </h1>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of predictive discovery
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              variant="default"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4"
              onClick={() => window.open(airtableFormUrl, "_blank")}
            >
              <span className="hidden sm:inline">Join the Network</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-11 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6" style={{ color: "#000080" }}>
              ThriftShopper AI
            </h1>
            <p className="text-2xl md:text-4xl font-serif mb-8" style={{ color: "#DAA520" }}>
              the magic of predictive discovery
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-sans text-foreground mb-8">
              Coming Soon: AI-Powered Thrift Marketplace
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be among the first to experience a revolutionary platform that connects buyers and sellers through
              intelligent matching and predictive discovery.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.open(airtableFormUrl, "_blank")}>
                Join the Network
              </Button>
              <p className="text-sm text-muted-foreground">*It's free to join</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-11 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-8">How ThriftShopper Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-serif font-semibold mb-4">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI connects buyers with sellers based on preferences, location, and behavioral patterns for
                  perfect matches.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-serif font-semibold mb-4">Perfect Discoveries</h3>
                <p className="text-muted-foreground">
                  Get personalized notifications how and when you want about items that match your style and surprise
                  you on occasion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-serif font-semibold mb-4">AI Learning</h3>
                <p className="text-muted-foreground">
                  Our multi-agent system utilizes information about browsing patterns, predicts when and how items are
                  bought or sold and uncovers both the most unusual finds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12">
        <div className="max-w-7xl mx-auto px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-2">ThriftShopper AI</h3>
              <p className="text-sm opacity-90">the magic of predictive discovery</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About Us
              </a>
              <a href="/how-it-works" className="hover:opacity-80 transition-opacity">
                How it Works
              </a>
              <button
                onClick={() => {
                  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "#"
                  window.open(contactFormUrl, "_blank")
                }}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                Contact
              </button>
              <a href="/privacy" className="hover:opacity-80 transition-opacity">
                Privacy
              </a>
              <a href="/terms" className="hover:opacity-80 transition-opacity">
                Terms
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">&copy; 2025 ThriftShopper AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
