"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface MarketTrend {
  category: string
  description: string
  trend: string
  percentage: string
}

export function MarketIntelCard() {
  const [trends, setTrends] = useState<MarketTrend[]>([
    {
      category: "Royal Doulton Figurines",
      description: "Last sold: $185 (47 watchers)",
      trend: "↗️",
      percentage: "+340%",
    },
    {
      category: "Yankees Memorabilia",
      description: "Supply gap: Only 3 listed",
      trend: "↗️",
      percentage: "+275%",
    },
    {
      category: "Hallmark Ornaments",
      description: "Seasonal surge detected",
      trend: "↗️",
      percentage: "+189%",
    },
    {
      category: "Mid-Century Lamps",
      description: "Brooklyn searches +67%",
      trend: "↗️",
      percentage: "+167%",
    },
  ])

  useEffect(() => {
    // In a real implementation, this would call the eBay Finding API
    const fetchMarketData = async () => {
      try {
        // Simulated API call - in production this would be:
        // const response = await fetch('/api/ebay-trends')
        // const marketData = await response.json()

        // For demo purposes, using realistic trending data
        console.log("[v0] Market intelligence data loaded")
      } catch (error) {
        console.error("Error fetching market data:", error)
      }
    }

    fetchMarketData()
  }, [])

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] text-white p-5 rounded-t-lg">
        <h3 className="font-sans text-xl font-semibold">📈 Live Market Intelligence</h3>
      </CardHeader>
      <CardContent className="p-6">
        <h4 className="font-sans text-lg font-semibold text-[#000080] mb-4">Hot Categories (Last 7 Days)</h4>
        <div className="space-y-4">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <div className="font-semibold text-[#000080]">{trend.category}</div>
                <div className="text-sm text-gray-600">{trend.description}</div>
              </div>
              <div className="text-right">
                <span className="text-[#228B22] font-bold text-xl mr-2">{trend.trend}</span>
                <span className="text-[#228B22] font-bold">{trend.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
