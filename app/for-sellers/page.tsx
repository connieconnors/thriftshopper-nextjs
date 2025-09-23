"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Megaphone, CheckCircle } from "lucide-react"

export default function ForSellersPage() {
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
              the magic of predictive discovery
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
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
              Sell Smarter.
              <br />
              Reach More Buyers.
              <br />
              Stress Less.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
              ThriftShopper uses predictive AI and real-time data to help you sell faster and more profitably — while we
              actively bring buyers to your items.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 mb-8" onClick={() => window.open(airtableFormUrl, "_blank")}>
              Start Selling Smarter
            </Button>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ThriftShopper takes the guesswork out of selling. We analyze demand, pricing trends, and buyer behavior in
              real time — so you know exactly what to list and at what price. And we don't just wait for buyers to show
              up — we actively recruit them and make it easy for them to discover treasures they'll love. That means
              faster sales, better prices, and less work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Three Key Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-6" style={{ color: "#000080" }} />
                <h3 className="text-xl font-serif font-semibold mb-4">Smart Pricing & Demand Insights</h3>
                <p className="text-muted-foreground">
                  We analyze real-time data to help you know what to list and at what price.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Megaphone className="w-16 h-16 mx-auto mb-6" style={{ color: "#000080" }} />
                <h3 className="text-xl font-serif font-semibold mb-4">Active Buyer Recruitment</h3>
                <p className="text-muted-foreground">
                  We attract and engage buyers who are looking for exactly what you sell.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: "#000080" }} />
                <h3 className="text-xl font-serif font-semibold mb-4">Effortless Selling</h3>
                <p className="text-muted-foreground">
                  Our system matches your items to the right people, so you can sell faster with less work.
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
