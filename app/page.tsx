import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { IllustratedSection } from "@/components/illustrated-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex-1 w-full">
        <HeroSection />
        <FeaturesSection />
        <IllustratedSection />
      </div>
      <Footer />
    </div>
  )
}
