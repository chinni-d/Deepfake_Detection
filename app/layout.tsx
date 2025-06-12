import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { GridBackground } from "@/components/grid-background"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeepDetect - Professional Deepfake Detection",
  description: "Identify AI-generated videos and images with confidence using advanced deepfake detection technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <GridBackground>
            <ScrollToTop />
            <Navigation />
            <main className="relative min-h-screen flex flex-col items-center pt-16">{children}</main>
          </GridBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
