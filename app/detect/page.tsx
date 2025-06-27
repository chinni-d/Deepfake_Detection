"use client"
import { useUser } from "@clerk/nextjs"
import { SignIn } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageDetection } from "@/components/image-detection"
import { VideoDetection } from "@/components/video-detection"
import { Footer } from "@/components/footer"

export default function DetectPage() {
  const { isSignedIn } = useUser()

  // Show sign-in if user is not authenticated
  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex-1 w-full flex items-center justify-center">
          <SignIn routing="hash" />
        </div>
        <Footer />
      </div>
    )
  }

  // Show full detection interface for authenticated users
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="flex-1 w-full">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Deepfake Detection</h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Upload your images or videos to analyze them for AI-generated content. Our advanced algorithms will
                provide detailed results with confidence scores.
              </p>
            </div>

            <Tabs defaultValue="image" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-2 rounded-lg bg-muted p-1.5">
                <TabsTrigger
                  value="image"
                  className="rounded-md text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:text-base"
                >
                  Image Detection
                </TabsTrigger>
                <TabsTrigger
                  value="video"
                  className="rounded-md text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:text-base"
                >
                  Video Detection
                </TabsTrigger>
              </TabsList>
              <div className="mt-6 sm:mt-8">
                <TabsContent value="image">
                  <ImageDetection />
                </TabsContent>

                <TabsContent value="video">
                  <VideoDetection />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
