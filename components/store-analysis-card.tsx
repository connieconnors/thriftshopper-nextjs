"use client"

import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface StoreAnalysisCardProps {
  storeName: string
}

export function StoreAnalysisCard({ storeName }: StoreAnalysisCardProps) {
  const [photoAnalysis, setPhotoAnalysis] = useState({
    organization: "High",
    customerTier: "Premium",
    inventoryType: "Mixed",
    avgTransaction: "$45",
  })

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      // In a real implementation, this would call Google Vision API
      // const formData = new FormData()
      // formData.append('image', file)
      // const response = await fetch('/api/analyze-photo', {
      //   method: 'POST',
      //   body: formData
      // })
      // const analysis = await response.json()

      console.log("[v0] Photo uploaded for analysis:", file.name)
      // For demo purposes, simulate analysis results
    } catch (error) {
      console.error("Error analyzing photo:", error)
    }
  }

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="bg-gradient-to-r from-[#feca57] to-[#ff9ff3] text-white p-5 rounded-t-lg">
        <h3 className="font-sans text-xl font-semibold">📸 Store Intelligence</h3>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-5 p-5 bg-gray-50 rounded-lg">
          <p className="text-gray-600 mb-3">📷 Photo Analysis</p>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" id="photo-upload" />
          <Button
            onClick={() => document.getElementById("photo-upload")?.click()}
            variant="outline"
            className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
          >
            Upload Store Interior Photo
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-2xl font-bold text-[#000080] mb-1">{photoAnalysis.organization}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Organization Level</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-2xl font-bold text-[#000080] mb-1">{photoAnalysis.customerTier}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Customer Tier</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-2xl font-bold text-[#000080] mb-1">{photoAnalysis.inventoryType}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Inventory Type</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border-l-4 border-[#000080]">
            <div className="text-2xl font-bold text-[#000080] mb-1">{photoAnalysis.avgTransaction}</div>
            <div className="text-sm text-gray-600 uppercase font-medium">Avg Transaction</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
