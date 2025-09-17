"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function StrategyInsightsCard() {
  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader style={{ backgroundColor: "#000080" }} className="text-white p-5 rounded-t-lg">
        <h3 className="font-sans text-xl font-semibold">🎯 Strategic Insights</h3>
      </CardHeader>
      <CardContent className="p-6">
        <h4 className="font-sans text-lg font-semibold text-[#000080] mb-4">Priority Actions</h4>

        <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] text-white p-5 rounded-lg mb-4 text-center font-semibold animate-pulse">
          🚨 IMMEDIATE: Source Royal Doulton figurines - 340% demand spike detected
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4 border-l-4 border-[#228B22]">
          <p className="font-semibold text-[#000080]">Timing Opportunity:</p>
          <p className="text-gray-700">Yankees playoff memorabilia showing supply gap with proven $150+ demand</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-500">
          <p className="font-semibold text-[#000080]">Seasonal Alert:</p>
          <p className="text-gray-700">Holiday ornament searches up 89% in target buyer markets (Brooklyn/Queens)</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#4A90E2]">
          <p className="font-semibold text-[#000080]">Market Forecast:</p>
          <p className="text-gray-700">Mid-century furniture demand will peak in next 30 days based on Etsy trends</p>
        </div>
      </CardContent>
    </Card>
  )
}
