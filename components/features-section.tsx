"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ImageIcon, Video, Shield, Clock, Target, Brain, Database } from "lucide-react"

const features = [
	{
		icon: Zap,
		title: "Real-time Analysis",
		description:
			"Get instant results with our lightning-fast detection algorithms that process content in seconds.",
		color: "from-yellow-500 to-orange-500",
	},
	{
		icon: ImageIcon,
		title: "Image Support",
		description:
			"Detect manipulated photos and AI-generated images with high precision and detailed analysis.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: Video,
		title: "Video Detection",
		description:
			"Analyze video content frame-by-frame to identify deepfake manipulations and synthetic media.",
		color: "from-purple-500 to-pink-500",
	},
	{
		icon: Target,
		title: "95%+ Accuracy",
		description:
			"Industry-leading accuracy rates backed by extensive testing and continuous model improvements.",
		color: "from-green-500 to-emerald-500",
	},
	{
		icon: Shield,
		title: "Secure Processing",
		description:
			"Your uploaded content is processed securely and deleted immediately after analysis.",
		color: "from-red-500 to-rose-500",
	},
	{
		icon: Clock,
		title: "Batch Processing",
		description:
			"Upload multiple files simultaneously for efficient bulk analysis and reporting.",
		color: "from-indigo-500 to-blue-500",
	},
	{
		icon: Brain,
		title: "AI-Powered",
		description:
			"Advanced neural networks trained on millions of samples for superior detection capabilities.",
		color: "from-violet-500 to-purple-500",
	},
	{
		icon: Database,
		title: "Cloud Infrastructure",
		description:
			"Scalable cloud processing ensures fast analysis regardless of file size or complexity.",
		color: "from-teal-500 to-cyan-500",
	},
]

export function FeaturesSection() {
	return (
		<section className="py-16 sm:py-20 lg:py-24 relative w-full">
			<div className="mx-auto max-w-7xl px-4">
				<div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4"
					>
						Powerful Detection Features
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-base sm:text-lg text-muted-foreground px-4 sm:px-0"
					>
						Advanced AI technology meets user-friendly design to deliver the most reliable deepfake detection
						solution available.
					</motion.p>
				</div>

				<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="group"
						>
							<Card className="h-full border-0 bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-background/80 text-center sm:text-left">
								<CardHeader className="pb-3 sm:pb-4">
									<div
										className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
									>
										<feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
									</div>
									<CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0">
									<CardDescription className="text-xs sm:text-sm leading-relaxed">
										{feature.description}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
