"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface DemographicsData {
  population: string
  medianIncome: string
  medianAge: string
  homeOwnership: string
}

interface DemographicsCardProps {
  location: string
}

export function DemographicsCard({ location }: DemographicsCardProps) {
  const [data, setData] = useState<DemographicsData>({
    population: "5,084",
    medianIncome: "$276K",
    medianAge: "42.1",
    homeOwnership: "65%",
  })

  useEffect(() => {
    // In a real implementation, this would call the Census Bureau API
    // For now, we'll use the Sea Cliff, NY data as specified
    const fetchDemographics = async () => {
      try {
        // Simulated API call - in production this would be:
        // const response = await fetch(`/api/census?location=${encodeURIComponent(location)}`)
        // const censusData = await response.json()

        // For demo purposes, using real Sea Cliff, NY data
        setData({
          population: "5,084",
          medianIncome: "$276K",
          medianAge: "42.1",
          homeOwnership: "65%",
        })
      } catch (error) {
        console.error("Error fetching demographics:", error)
      }
    }

    fetchDemographics()
  }, [location])

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader style={{ backgroundColor: "#000080" }} className="text-white p-5 rounded-t-lg">
        <h3 className="font-sans text-xl font-semibold">📊 Demographics Intelligence</h3>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-3xl font-bold text-[#000080] mb-1">{data.population}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Population</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-3xl font-bold text-[#000080] mb-1">{data.medianIncome}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Avg HH Income</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-3xl font-bold text-[#000080] mb-1">{data.medianAge}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Median Age</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-3xl font-bold text-[#000080] mb-1">{data.homeOwnership}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">40+ Year Ownership</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24] text-white p-5 rounded-lg text-center font-semibold animate-pulse">
          🏆 GOLDMINE ALERT: High-income, established community with multigenerational wealth
        </div>
      </CardContent>
    </Card>
  )
}
