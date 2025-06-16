"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const developers = [
	{
		name: "Renuka Darapureddy",
		role: "Data Science & AI Developer",
		avatar: "renu.png",
		color: "from-blue-500 to-cyan-500",
		githubUrl: "#", // Placeholder
		linkedinUrl: "#", // Placeholder
		twitterUrl: "#", // Placeholder
		description:
			"Crafting intelligent solutions and advancing AI capabilities for deepfake detection.",
	},
	{
		name: "Garlapati Priya sri",
		role: "Web Developer",
		avatar: "priya.jpg",
		color: "from-purple-500 to-pink-500",
		githubUrl: "#", // Placeholder
		linkedinUrl: "#", // Placeholder
		twitterUrl: "#", // Placeholder
		description:
			"Building responsive and user-friendly web interfaces for our detection platform.",
	},
	{
		name: "G.Pujitha",
		role: "Cloud Computing Developer",
		avatar: "pujitha.jpg",
		color: "from-green-500 to-emerald-500",
		githubUrl: "", // Placeholder
		linkedinUrl: "#", // Placeholder
		twitterUrl: "#", // Placeholder
		description:
			"Ensuring scalable and reliable cloud infrastructure for our services.",
	},
	{
		name: "Madakam Bindu Madhavi",
		role: "Full Stack Developer",
		avatar: "bindu.jpg",
		color: "from-orange-500 to-red-500",
		githubUrl: "#", // Placeholder
		linkedinUrl: "#", // Placeholder
		twitterUrl: "#", // Placeholder
		description:
			"Developing end-to-end features, from backend logic to frontend interactions.",
	},
	{
		name: "Gangavarapu Jaya Sri Durga",
		role: "Data Analytics Developer",
		avatar: "jaya.jpg",
		color: "from-indigo-500 to-blue-500",
		githubUrl: "#", // Placeholder
		linkedinUrl: "#", // Placeholder
		twitterUrl: "#", // Placeholder
		description:
			"Analyzing data to improve detection accuracy and provide valuable insights.",
	},
]

export function DeveloperTeam() {
	return (
		<section className="py-20">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
					Meet Our Team
				</h2>
				<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
					Our experts in AI, machine learning, and software development bringing
					cutting-edge deepfake detection technology to life.
				</p>
			</div>

			<div className="flex flex-col items-center gap-8 max-w-full mx-auto px-4">
				{developers.map((dev, index) => (
					<motion.div
						key={dev.name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className="group w-full max-w-xl"
					>
						<Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 bg-card h-auto min-h-[280px] w-full flex flex-col">
							<div className={`h-2 bg-gradient-to-r ${dev.color}`} />
							<CardContent className="p-6 text-center flex flex-col justify-between flex-grow">
								<div>
									<div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-background shadow-md group-hover:scale-105 transition-transform duration-300">
										<Image
											src={dev.avatar || "/placeholder.svg"}
											alt={dev.name}
											width={80}
											height={80}
											className="object-cover w-full h-full"
										/>
									</div>

									<h3 className="font-bold text-base mb-2 text-foreground">
										{dev.name}
									</h3>
									<p
										className={`text-sm font-medium bg-gradient-to-r ${dev.color} bg-clip-text text-transparent mb-3`}
									>
										{dev.role}
									</p>
									<p className="text-xs text-muted-foreground mb-4 px-2 leading-relaxed">
										{dev.description}
									</p>
								</div>

								<div className="flex justify-center space-x-3 mt-auto">
									<a
										href={dev.githubUrl || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
										aria-label={`${dev.name}'s GitHub`}
									>
										<Github className="h-4 w-4" />
									</a>
									<a
										href={dev.linkedinUrl || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
										aria-label={`${dev.name}'s LinkedIn`}
									>
										<Linkedin className="h-4 w-4" />
									</a>
									<a
										href={dev.twitterUrl || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
										aria-label={`${dev.name}'s Twitter`}
									>
										<Twitter className="h-4 w-4" />
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
