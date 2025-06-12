"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Eye, Brain, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Eye,
    title: "Upload Content",
    description: "Upload your image or video file through our secure interface",
    step: "01",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced neural networks analyze the content for manipulation signs",
    step: "02",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Get Results",
    description: "Receive detailed results with confidence scores and explanations",
    step: "03",
    color: "from-green-500 to-emerald-500",
  },
]

export function IllustratedSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/50 to-background w-full">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              Our three-step process makes deepfake detection simple and reliable
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0" />

            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 sm:p-8 text-center border-0 bg-background shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    {/* Step Number */}
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg`}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 text-center px-4 sm:px-0"
          >
            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border shadow-lg max-w-md mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Try our deepfake detection technology today and see the results for yourself.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/detect"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-sm sm:text-base"
                >
                  Start Detection
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
