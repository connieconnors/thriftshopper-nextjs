"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DemographicsCard } from "@/components/demographics-card"
import { MarketIntelCard } from "@/components/market-intel-card"
import { StoreAnalysisCard } from "@/components/store-analysis-card"
import { StrategyInsightsCard } from "@/components/strategy-insights-card"
import { LoadingCard } from "@/components/loading-card"

export default function ThriftShopperDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [storeName, setStoreName] = useState("aBeautiful Mess")
  const [location, setLocation] = useState("Sea Cliff, NY 11579")

  const runAnalysis = async () => {
    setIsAnalyzing(true)
    setShowResults(false)

    // Simulate API calls with realistic timing
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <div className="p-5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-8">
            <h1 className="font-serif text-5xl font-bold mb-3" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
              ThriftShopper Intelligence
            </h1>
            <p className="font-sans text-xl opacity-90">The Bloomberg Terminal for Collectibles Markets</p>
          </div>

          {/* Demo Input */}
          {!isAnalyzing && !showResults && (
            <Card className="mb-8 shadow-2xl">
              <CardContent className="p-8 text-center">
                <h2 className="font-sans text-2xl font-semibold text-[#000080] mb-6">
                  Live Demo: Market Intelligence Analysis
                </h2>
                <div className="flex justify-center items-center gap-5 mb-6">
                  <Input
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="Store Name"
                    className="w-64 text-lg p-3"
                  />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="w-64 text-lg p-3"
                  />
                </div>
                <div
                  onClick={runAnalysis}
                  className="inline-block gradient-button text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  🔍 Analyze Market Intelligence
                </div>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {isAnalyzing && <LoadingCard />}

          {/* Results Grid */}
          {showResults && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DemographicsCard location={location} />
              <MarketIntelCard />
              <StoreAnalysisCard storeName={storeName} />
              <StrategyInsightsCard />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
