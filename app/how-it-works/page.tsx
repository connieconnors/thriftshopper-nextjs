"use client"

export default function HowItWorksPage() {
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
        </div>
      </header>

      {/* How It Works Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center" style={{ color: "#000080" }}>
          How ThriftShopper AI Works
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed space-y-8 text-foreground">
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-xl font-semibold mb-4">
                ThriftShopper is designed to make an immediate impact as a predictive AI marketplace and, crucially, a
                market intelligence platform that drives arbitrage opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
                Overview
              </h2>
              <p>
                ThriftShopper AI is a predictive matching platform that addresses the problem of uncurated inventory and
                buyer confusion in the resale market. It intelligently matches sellers of pre-loved items with targeted
                buyers, not solely based on the specific item, but also on optimal timing. This predictive matching
                engine connects sellers' unique items with buyers' latest needs through advanced algorithms, surfacing
                the right match at the opportune moment to create liquidity where traditional marketplaces fall short.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
                How ThriftShopper Works
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Machine Learning Models</h3>
                  <p>
                    Dynamically trained on millions of items and trends. These models predict matches, preferences, and
                    optimal pricing. AI-powered engines are known to significantly boost e-commerce revenue (up to 300%)
                    and conversion rates (by 150%).
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Intuitive Discovery</h3>
                  <p>
                    Leverages natural language and image-based search to help buyers find items they might not have
                    known existed.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Style Assistants</h3>
                  <p>Personalised chatbots that inspire and guide buyers with suggestions and styling tips.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Visual Recognition and Pricing Prediction</h3>
                  <p>
                    Through API-powered detection, style classification, and demographic targeting. This helps to
                    categorize products and ensure accurate descriptions without extensive seller photography.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">AI Match Service and Dynamic Pricing Module</h3>
                  <p>
                    Core outputs of the ThriftShopper Engine, providing automated matching and pricing recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
                The Market Intelligence Platform
              </h2>
              <p className="mb-4">
                ThriftShopper is building the market intelligence backbone for the entire resale industry, beginning
                with thrift stores. It transforms thrift sellers into data-driven arbitrage engines, addressing the
                prevalent issue where inventory decisions are based on intuition rather than data, causing massive
                arbitrage opportunities to go unnoticed.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                The platform's core technology stack provides this intelligence:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Triple API Intelligence</h4>
                  <p className="text-sm">
                    Aggregates real-time market data from major platforms like eBay, Etsy, and WorthPoint. This unified
                    API integration is critical for scaling seamlessly and turning fragmented market signals into
                    actionable insights.
                  </p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Demographic Targeting</h4>
                  <p className="text-sm">Utilises Census data to identify high-value sourcing areas.</p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">AI Visual Analysis</h4>
                  <p className="text-sm">Photo recognition is used for efficient inventory assessment.</p>
                </div>

                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Predictive Algorithms</h4>
                  <p className="text-sm">
                    Leverages data like housing tenure and income to predict collectibles probability.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-muted/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Data Insights</h4>
                <p className="text-sm">
                  Offers market insights for brands, trend prediction analytics, consumer behaviour reports, and pricing
                  optimisation tools.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4" style={{ color: "#000080" }}>
                The Actionable Intelligence Platform
              </h2>
              <p className="mb-4">
                ThriftShopper explicitly aims to make physical goods trading profitable and predictable by providing
                specific, actionable alerts that highlight arbitrage opportunities.
              </p>

              <p className="mb-4">
                This means the system can identify when an item, like a Yankees bobblehead, sells for a certain price on
                another platform, note the lack of current listings, and observe high buyer interest, then signal to
                users that "now is the time to sell a Yankees bobblehead if you have one." This leverages a "geographic
                arbitrage model" by connecting items from wealthy suburbs to urban buyers.
              </p>

              <p>
                Ultimately, ThriftShopper isn't just another marketplace; it's a proprietary market intelligence moat
                that provides predictive sourcing and data-driven arbitrage, giving sellers an unfair advantage over
                traditional thrift stores that rely on random inventory and "hope-based pricing."
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h2 className="text-xl font-serif font-semibold mb-4">For More Information</h2>
              <p className="text-muted-foreground">
                Contact: Connie Connors
                <br />
                Email: connors.connie@gmail.com
                <br />
                Phone: 917-287-1710
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
