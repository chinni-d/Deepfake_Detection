"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, Shield, Zap, Brain } from "lucide-react"
import { DeveloperTeam } from "@/components/developer-team"
import { Footer } from "@/components/footer"

const timelineEvents = [
  {
    year: "2017",
    title: "First Deepfakes",
    description: "Early deepfake technology emerges using basic neural networks",
  },
  {
    year: "2019",
    title: "Mainstream Awareness",
    description: "Deepfakes gain public attention, raising concerns about misinformation",
  },
  {
    year: "2021",
    title: "Advanced Detection",
    description: "AI-powered detection systems become more sophisticated",
  },
  {
    year: "2023",
    title: "Real-time Detection",
    description: "Modern systems achieve real-time analysis with high accuracy",
  },
  {
    year: "2024",
    title: "Current State",
    description: "Widespread deployment of detection tools across platforms",
  },
]

const implications = [
  {
    icon: AlertTriangle,
    title: "Misinformation Risks",
    description: "Deepfakes can spread false information and manipulate public opinion",
    type: "negative",
  },
  {
    icon: Shield,
    title: "Identity Protection",
    description: "Detection tools help protect individuals from unauthorized use of their likeness",
    type: "positive",
  },
  {
    icon: Zap,
    title: "Creative Applications",
    description: "Legitimate uses in entertainment, education, and digital art",
    type: "positive",
  },
  {
    icon: Brain,
    title: "AI Advancement",
    description: "Drives innovation in both generation and detection technologies",
    type: "neutral",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex-1 w-full">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight mb-4">About Deepfakes</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding AI-generated media, its implications, and the technology behind detection systems.
              </p>
            </div>

            {/* What are Deepfakes */}
            <section className="mb-16">
              <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">What are Deepfakes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Deepfakes are synthetic media created using artificial intelligence and deep learning techniques.
                    The term combines "deep learning" and "fake," referring to AI-generated videos, images, or audio
                    that appear authentic but are actually fabricated.
                  </p>
                  <p>
                    These technologies use neural networks, particularly Generative Adversarial Networks (GANs), to
                    analyze and replicate patterns in existing media. By training on large datasets of images or videos,
                    the AI learns to generate new content that mimics the original subject's appearance, voice, or
                    mannerisms.
                  </p>
                  <p>
                    While the technology has legitimate applications in entertainment, education, and digital art, it
                    also poses significant challenges for information integrity and personal privacy.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* How They're Created */}
            <section className="mb-16">
              <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">How Deepfakes Are Created</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">1. Data Collection</h3>
                      <p className="text-muted-foreground text-sm">
                        Thousands of images or video frames of the target person are collected to train the AI model on
                        their facial features and expressions.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">2. Model Training</h3>
                      <p className="text-muted-foreground text-sm">
                        Neural networks learn to encode and decode facial features, understanding how to map one
                        person's expressions onto another's face.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">3. Generation</h3>
                      <p className="text-muted-foreground text-sm">
                        The trained model generates new frames by swapping faces while maintaining realistic lighting,
                        shadows, and facial movements.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">4. Post-Processing</h3>
                      <p className="text-muted-foreground text-sm">
                        Additional techniques smooth temporal inconsistencies and enhance realism to create the final
                        synthetic media.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Real-world Implications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Real-world Implications</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {implications.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={`h-full border-0 ${
                        item.type === "positive"
                          ? "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                          : item.type === "negative"
                            ? "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20"
                            : "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${
                              item.type === "positive"
                                ? "bg-green-500"
                                : item.type === "negative"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                            }`}
                          >
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <Badge
                            variant={
                              item.type === "positive"
                                ? "default"
                                : item.type === "negative"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {item.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Timeline - KEEPING SCROLL REVEAL EFFECTS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Evolution of Deepfake Technology</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="space-y-8">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                        <Card className="border-0 bg-gradient-to-br from-background to-muted/50">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline">{event.year}</Badge>
                            </div>
                            <h3 className="font-semibold mb-2">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative z-10">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Developer Team */}
            <DeveloperTeam />

            {/* Resources */}
            <section>
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Learn More</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore additional resources to deepen your understanding of deepfake technology and detection
                    methods.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" className="group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Research Papers
                    </Button>
                    <Button variant="outline" className="group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      GitHub Repository
                    </Button>
                    <Button variant="outline" className="group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Technical Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
