"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ForBuyersPage() {
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col ml-2 md:ml-8 min-w-0 flex-1">
            <a
              href="/"
              className="text-lg md:text-2xl font-serif font-bold truncate hover:opacity-80"
              style={{ color: "#000080" }}
            >
              ThriftShopper AI
            </a>
            <p className="text-xs font-sans hidden sm:block" style={{ color: "#DAA520" }}>
              the magic of discovery™
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </Button>
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
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance"
              style={{ color: "#000080" }}
            >
              Discover Joy,
              <br />
              Not Just Stuff.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
              Tell us what you love — we'll find it for you. Get alerts your way, on your schedule, and discover
              treasures without endless scrolling.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 mb-8" onClick={() => window.open(airtableFormUrl, "_blank")}>
              Start Discovering
            </Button>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ThriftShopper is where you discover amazing things you didn't even know you were looking for. Think of it
              as your personal treasure hunter. Instead of endless scrolling through random stuff, we predict what
              matches your style and alert you – when and how you want to be alerted – where your treasure is located,
              either near or far.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Part Value Proposition */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-6"
                  style={{ color: "#000080" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">Personalized Discovery</h3>
                <p className="text-muted-foreground">
                  No more digging through thousands of listings — we surface what matters to you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-6"
                  style={{ color: "#000080" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">Custom Alerts</h3>
                <p className="text-muted-foreground">
                  Choose exactly how and when you want to be notified when the perfect item appears.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-6"
                  style={{ color: "#000080" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <h3 className="text-xl font-serif font-semibold mb-4">Happy Surprises</h3>
                <p className="text-muted-foreground">
                  Find things you didn't know you wanted — and feel the joy of the perfect find.
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
              <p className="text-sm opacity-90">the magic of discovery™</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About Us
              </a>
              <a href="/how-it-works" className="hover:opacity-80 transition-opacity">
                Why & How it Works
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
