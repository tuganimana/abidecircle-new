import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}