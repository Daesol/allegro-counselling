import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <Badge className="hover:bg-red-100 inline-flex" style={{ backgroundColor: "#F8E6E7", color: "#A83E41" }}>
              Embrace Your Healing Journey
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Begin Your Path to Healing with <span style={{ color: "#D95E61" }}>Allegro Counselling</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Compassionate, Personalized Therapy for Individuals, Couples, and Families in Edmonton
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-3 text-white hover:bg-red-700 w-full sm:w-auto"
                style={{ backgroundColor: "#D95E61" }}
              >
                Book Your Free 30-Minute Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Trusted by 200+ clients</span>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6 sm:p-8">
              <Image
                src="https://images.unsplash.com/photo-1534169256946-e453674146c3?q=80&w=3822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sasha Campbell, Registered Psychologist and Clinic Director"
                width={400}
                height={400}
                className="rounded-xl shadow-lg mx-auto w-full max-w-sm lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
