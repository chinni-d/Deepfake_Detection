"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const developers = [
  {
    name: "Alex Chen",
    role: "AI Research Lead",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["Deep Learning", "Computer Vision"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Architect",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["React", "TypeScript"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Backend Engineer",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["Node.js", "AWS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Emily Zhang",
    role: "ML Engineer",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["TensorFlow", "MLOps"],
    color: "from-orange-500 to-red-500",
  },
  {
    name: "David Kim",
    role: "DevOps Specialist",
    avatar: "/placeholder.svg?height=120&width=120",
    skills: ["Docker", "Kubernetes"],
    color: "from-indigo-500 to-blue-500",
  },
]

export function DeveloperTeam() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our experts in AI, machine learning, and software development.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {developers.map((dev, index) => (
          <motion.div
            key={dev.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-full">
              <div className={`h-1 bg-gradient-to-r ${dev.color}`} />
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-background shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={dev.avatar || "/placeholder.svg"}
                    alt={dev.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>

                <h3 className="font-semibold text-sm mb-1">{dev.name}</h3>
                <p className={`text-xs font-medium bg-gradient-to-r ${dev.color} bg-clip-text text-transparent mb-3`}>
                  {dev.role}
                </p>

                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {dev.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs px-2 py-0.5">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-2">
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
                    aria-label={`${dev.name}'s GitHub`}
                  >
                    <Github className="h-3 w-3" />
                  </a>
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
                    aria-label={`${dev.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-3 w-3" />
                  </a>
                  <a
                    href="#"
                    className="p-1.5 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
                    aria-label={`${dev.name}'s Twitter`}
                  >
                    <Twitter className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
