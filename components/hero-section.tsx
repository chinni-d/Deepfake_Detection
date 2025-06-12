"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 w-full">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm shadow-lg"
            >
              <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced AI Detection Technology
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Deepfake Detection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0"
            >
              Identify AI-generated videos and images with confidence using our state-of-the-art machine learning
              algorithms and real-time analysis powered by cutting-edge neural networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0"
            >
              <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span>95%+ Accuracy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          />
        </div>
        <div className="absolute left-1/4 top-1/4">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-xl"
          />
        </div>
        <div className="absolute right-1/4 bottom-1/4">
          <motion.div
            animate={{
              y: [20, -20, 20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-xl"
          />
        </div>
      </div>
    </section>
  )
}
