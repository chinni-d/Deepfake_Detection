"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react"
import { GridBackground } from "./grid-background"

export function HeroSection() {
  return (
    <GridBackground>
      <section className="relative overflow-hidden w-full pt-24 pb-0 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-lg">
                <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Advanced AI Detection Technology
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Deepfake Detection
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
                Identify AI-generated videos and images with confidence using our state-of-the-art machine learning
                algorithms and real-time analysis powered by cutting-edge neural networks.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                >
                  <Link href="/detect">
                    Start Detection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto backdrop-blur-sm bg-background/50"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
                <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                  <span>Real-time Analysis</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>95%+ Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  )
}
