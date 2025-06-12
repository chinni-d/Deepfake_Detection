"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageDetection } from "@/components/image-detection"
import { VideoDetection } from "@/components/video-detection"
import { Footer } from "@/components/footer"

export default function DetectPage() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex-1 w-full">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Deepfake Detection</h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Upload your images or videos to analyze them for AI-generated content. Our advanced algorithms will
                provide detailed results with confidence scores.
              </p>
            </div>

            <Tabs defaultValue="image" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
                <TabsTrigger value="image" className="text-sm sm:text-base">
                  Image Detection
                </TabsTrigger>
                <TabsTrigger value="video" className="text-sm sm:text-base">
                  Video Detection
                </TabsTrigger>
              </TabsList>

              <TabsContent value="image">
                <ImageDetection />
              </TabsContent>

              <TabsContent value="video">
                <VideoDetection />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
