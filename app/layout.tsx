import type React from "react"
import type { Metadata } from "next"
import { Merriweather as Meriweather, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const meriweather = Meriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-meriweather",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "ThriftShopper AI - The Magic of Predictive Discovery",
  description: "AI-powered thrift marketplace connecting buyers and sellers through predictive matching",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${meriweather.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
