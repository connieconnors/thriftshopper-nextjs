"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function ForSellersPage() {
  const [demoState, setDemoState] = useState<"initial" | "processing" | "result">("initial")
  const airtableFormUrl = process.env.NEXT_PUBLIC_AIRTABLE_FORM_URL || "#"

  const startDemo = () => {
    setDemoState("processing")
    setTimeout(() => {
      setDemoState("result")
    }, 3000)
  }

  const showSignup = () => {
    window.open(airtableFormUrl, "_blank")
  }

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
              ThriftShopper
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
              onClick={() => (window.location.href = "/for-buyers")}
            >
              For Buyers
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm md:text-base px-3 md:px-4 bg-transparent"
              onClick={() => (window.location.href = "/our-story")}
            >
              Our Story
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 md:py-24 px-4"
        style={{ background: "linear-gradient(135deg, #000080 0%, #4169E1 100%)" }}
      >
        <div className="container mx-auto text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 inline-block mb-8">
            <p className="text-sm font-medium">Currently in beta development - Join the waitlist for early access</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
              Stop Researching.
              <br />
              Stop Guessing.
              <br />
              Just Take a Photo.
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-pretty opacity-95">
              ThriftShopper's AI instantly identifies your items, researches market prices, writes listings, and finds
              buyers already looking for exactly what you have.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="demo-content">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
                Watch the Magic Happen
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="bg-muted/30 p-5 rounded-xl border-l-4 border-primary text-lg">
                  📸 Take a photo of any item you want to sell
                </li>
                <li className="bg-muted/30 p-5 rounded-xl border-l-4 border-primary text-lg">
                  🤖 AI instantly identifies what it is and researches market prices
                </li>
                <li className="bg-muted/30 p-5 rounded-xl border-l-4 border-primary text-lg">
                  💰 Get optimal pricing based on real sales data
                </li>
                <li className="bg-muted/30 p-5 rounded-xl border-l-4 border-primary text-lg">
                  👥 We show you exactly who wants to buy it
                </li>
                <li className="bg-muted/30 p-5 rounded-xl border-l-4 border-primary text-lg">
                  📝 Complete listing generated automatically
                </li>
              </ul>
              <p className="text-muted-foreground italic text-lg">Try it with the demo on the right →</p>
            </div>

            <div className="upload-demo">
              <Card className="bg-muted/30 border-2 border-dashed border-primary rounded-2xl p-8 relative overflow-hidden">
                <CardContent className="p-0">
                  {demoState === "initial" && (
                    <div
                      className="text-center cursor-pointer transition-transform hover:scale-105"
                      onClick={startDemo}
                    >
                      <div className="text-6xl mb-6">📷</div>
                      <div className="text-xl font-semibold mb-3" style={{ color: "#000080" }}>
                        Try Our Demo
                      </div>
                      <div className="text-muted-foreground">Click to see how we identify a vintage Pyrex bowl</div>
                    </div>
                  )}

                  {demoState === "processing" && (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
                      <p className="text-lg font-semibold mb-3">AI analyzing your item...</p>
                      <p className="text-sm text-muted-foreground">
                        Scanning image → Identifying item → Researching prices → Finding buyers
                      </p>
                    </div>
                  )}

                  {demoState === "result" && (
                    <div className="bg-background rounded-xl p-6 border-2 border-accent shadow-lg animate-in slide-in-from-bottom-4 duration-500">
                      <div className="flex items-center mb-6">
                        <span className="text-3xl mr-4">🥣</span>
                        <div className="flex-1">
                          <div className="text-lg font-semibold">Pyrex Butterprint Mixing Bowl</div>
                          <div className="text-sm text-muted-foreground">1970s, 2.5 quart, rare pattern</div>
                        </div>
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          AI IDENTIFIED
                        </span>
                      </div>

                      <div className="text-4xl font-bold text-center mb-6" style={{ color: "#4CBB17" }}>
                        $45 - $67
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold" style={{ color: "#000080" }}>
                            12
                          </div>
                          <div className="text-sm text-muted-foreground">Recent Sales</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold" style={{ color: "#000080" }}>
                            3
                          </div>
                          <div className="text-sm text-muted-foreground">Interested Buyers</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold" style={{ color: "#000080" }}>
                            Sun 2PM
                          </div>
                          <div className="text-sm text-muted-foreground">Best List Time</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold" style={{ color: "#000080" }}>
                            92%
                          </div>
                          <div className="text-sm text-muted-foreground">Sell Probability</div>
                        </div>
                      </div>

                      <div className="bg-accent/10 p-4 rounded-lg mb-6 text-sm">
                        <strong>💡 Why this price:</strong> Similar Butterprint bowls sold for $52, $61, and $58 in the
                        last two weeks. Demand is high for this pattern in your area.
                      </div>

                      <Button className="w-full text-lg py-6 bg-accent hover:bg-accent/90" onClick={showSignup}>
                        🚀 Get Early Access When We Launch - List This Item
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6" style={{ color: "#000080" }}>
            Why Sellers Love ThriftShopper
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Stop spending hours on research and guesswork. Our AI does the heavy lifting so you can focus on finding
            great items.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-xl font-serif font-semibold mb-4">Instant Item Intelligence</h3>
                <p className="text-muted-foreground">
                  Photo → Identification → Market Price in 10 seconds. No more spending hours on Google wondering "what
                  is this worth?"
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-xl font-serif font-semibold mb-4">Smarter Pricing = More Money</h3>
                <p className="text-muted-foreground">
                  Our sellers average 40% higher prices because we price based on real demand data, not guesswork or
                  outdated sold listings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-6">👥</div>
                <h3 className="text-xl font-serif font-semibold mb-4">We Find Your Buyers</h3>
                <p className="text-muted-foreground">
                  Stop waiting for random people to stumble across your listings. We actively notify collectors and
                  buyers looking for your specific items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12" style={{ color: "#000080" }}>
            What Our Beta Sellers Want
          </h2>

          <Card className="max-w-4xl mx-auto mb-16" style={{ background: "linear-gradient(135deg, #000080, #4169E1)" }}>
            <CardContent className="p-8 text-white">
              <p className="text-xl md:text-2xl italic mb-6 leading-relaxed">
                "I want to spend 5 minutes instead of 2 hours per listing, while making 60% more per item. I want AI to
                handle the research and pricing so I can focus on finding great items."
              </p>
              <p className="font-semibold opacity-90">— Early Beta Seller</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#4CBB17" }}>
                40%
              </div>
              <div className="text-muted-foreground">Higher Average Prices</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#4CBB17" }}>
                85%
              </div>
              <div className="text-muted-foreground">Faster Sale Times</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#4CBB17" }}>
                90%
              </div>
              <div className="text-muted-foreground">Less Time Per Listing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ background: "linear-gradient(135deg, #4CBB17, #228B22)" }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Sell Smarter?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Coming Soon: Be Among the first sellers to experience AI-powered listing and buyer matching.
          </p>
          <Button
            size="lg"
            className="bg-white text-accent hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-bold transition-transform hover:scale-105"
            onClick={showSignup}
          >
            Get Early Access When We Launch - It's Free
          </Button>
          <p className="mt-6 opacity-80">No spam, ever. Just updates on launch date and early access.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000080] text-white py-12">
        <div className="max-w-7xl mx-auto px-[10px] md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-2">ThriftShopper</h3>
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
            <p className="text-sm opacity-90">&copy; 2025 ThriftShopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
