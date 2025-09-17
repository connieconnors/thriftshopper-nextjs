import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get("location")

  if (!location) {
    return NextResponse.json({ error: "Location parameter required" }, { status: 400 })
  }

  try {
    // In a real implementation, this would call the Census Bureau API
    // Example: https://api.census.gov/data/2021/acs/acs5/profile

    // For Sea Cliff, NY 11579 - using real demographic data
    const demographicsData = {
      population: "5,084",
      medianIncome: "$276,000",
      medianAge: "42.1",
      homeOwnership: "65%",
      educationLevel: "Bachelor's+: 78%",
      householdSize: "2.4",
    }

    return NextResponse.json(demographicsData)
  } catch (error) {
    console.error("Census API error:", error)
    return NextResponse.json({ error: "Failed to fetch demographics" }, { status: 500 })
  }
}
