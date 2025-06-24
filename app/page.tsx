import AboutSection from "@/components/sections/AboutSection"
import BooksSection from "@/components/sections/BooksSection"
import CompassionSection from "@/components/sections/CompassionSection"
import HeroSection3 from "@/components/sections/HeroSection3"
import NormalizeStruggleSection from "@/components/sections/NormalizeStruggleSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import Contact2 from "@/components/sections/ContactSection2"
import TeamSectionCarousel from "@/components/sections/TeamSectionCarousel"

export default function AllegroLanding() {
  return (
    <div className="min-h-screen">
      <HeroSection3 />
      <CompassionSection />
      <NormalizeStruggleSection />
      <AboutSection />
      <TeamSectionCarousel />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <Contact2 />
      <BooksSection />
    </div>
  )
}
