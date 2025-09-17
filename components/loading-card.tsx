"use client"

import { Card, CardContent } from "@/components/ui/card"

export function LoadingCard() {
  return (
    <Card className="shadow-xl">
      <CardContent className="p-10 text-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[#000080] rounded-full animate-spin mx-auto mb-5"></div>
        <p className="text-lg text-gray-600 mb-2">Analyzing market intelligence...</p>
        <p className="text-gray-500">Connecting to Census Bureau, eBay, and Google Vision APIs...</p>
      </CardContent>
    </Card>
  )
}
