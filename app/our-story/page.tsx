"use client"

import { Button } from "@/components/ui/button"

export default function OurStoryPage() {
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
              onClick={() => (window.location.href = "/for-sellers")}
            >
              For Sellers
            </Button>
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
              className="text-sm md:text-base px-3 md:px-4 bg-transparent border-2"
              style={{ borderColor: "#000080", color: "#000080" }}
            >
              Our Story
            </Button>
          </div>
        </div>
      </header>

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-12" style={{ color: "#000080" }}>
            ThriftShopper Mission Statement
          </h1>

          <div className="prose prose-lg md:prose-xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-sans leading-relaxed text-foreground">
              We believe every preloved item carries a story - and deserves a future. Our mission is to help sellers
              move beyond "post and pray" to predictive discovery, connecting treasures with the people meant to love
              them next. Through intelligent matching, we honor both the history held within vintage finds and the new
              stories waiting to be written.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
              Founder Connie's Why
            </h2>

            <div className="prose prose-lg md:prose-xl mx-auto">
              <div className="text-left space-y-6">
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  My love for secondhand started in 2006 when my youngest son asked me to sell his old cleats on eBay.
                  When they sold, I was so excited that I called his school so he could hear the news right away. Soon
                  he had me selling all my Barbies, and I discovered how much I loved finding the right buyer for the
                  right item.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  Years later, after moving to a small town during Covid, I began volunteering at my church thrift shop.
                  I saw patterns everywhere — the kinds of donations that came in, what sold right away, and how payday
                  weeks, moves, and even local news shaped what people bought.
                </p>
                <p className="text-lg md:text-xl font-sans leading-relaxed text-foreground">
                  For me, every item carries a story, and every sale connects people in unexpected ways. ThriftShopper
                  grew out of that — a way to make those connections easier, to help people find what they love, and to
                  give every good thing a second life.
                </p>
              </div>
            </div>
          </div>
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
