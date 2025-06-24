import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function HeroSection2() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-red-500 via-red-400 to-pink-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        {/* Centered text section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
              ✨ Embrace Your Healing Journey
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your Life with{" "}
              <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Compassionate Care
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Professional therapy services in Edmonton helping individuals, couples, and families find healing, growth,
              and lasting positive change.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 py-4 bg-white text-red-600 hover:bg-gray-100 shadow-xl w-full sm:w-auto font-semibold"
              >
                Start Your Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-red-600 backdrop-blur-sm w-full sm:w-auto"
              >
                Learn About Our Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 font-medium">5.0 Rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-white/90" />
                <span className="text-white/90 font-medium">200+ Happy Clients</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-white/90" />
                <span className="text-white/90 font-medium">Licensed Professionals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image section below text */}
        <div className="pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Main hero image */}
            <div className="relative mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Professional therapy session at Allegro Counselling"
                  width={800}
                  height={400}
                  className="rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover shadow-lg"
                />
              </div>

              {/* Floating feature cards */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Holistic Care</p>
                      <p className="text-xs text-gray-600">Mind, body & spirit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6" style={{ color: "#189799" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Expert Team</p>
                      <p className="text-xs text-gray-600">Licensed therapists</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 sm:-bottom-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Safe Space</p>
                      <p className="text-xs text-gray-600">Confidential & secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting images grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <Image
                  src="https://www.listonegiordano.com/wp-content/uploads/2022/12/JCZ02216-HDR.jpg"
                  alt="Comfortable therapy office"
                  width={300}
                  height={200}
                  className="rounded-xl w-full h-32 sm:h-40 object-cover mb-3"
                />
                <h4 className="font-semibold text-white text-sm sm:text-base">Comfortable Spaces</h4>
                <p className="text-white/80 text-xs sm:text-sm">Welcoming therapy environments</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <Image
                  src="https://media.istockphoto.com/id/1735412721/photo/psychologist-guiding-couple-in-resolving-marriage-issues.jpg?s=2048x2048&w=is&k=20&c=caZraK9XZwDnzKtnmUwvoDJ4pR_U6DP7F8kk_jsrM4M="
                  alt="Professional counselling"
                  width={300}
                  height={200}
                  className="rounded-xl w-full h-32 sm:h-40 object-cover mb-3"
                />
                <h4 className="font-semibold text-white text-sm sm:text-base">Expert Guidance</h4>
                <p className="text-white/80 text-xs sm:text-sm">Professional therapeutic support</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Peaceful environment"
                  width={300}
                  height={200}
                  className="rounded-xl w-full h-32 sm:h-40 object-cover mb-3"
                />
                <h4 className="font-semibold text-white text-sm sm:text-base">Peaceful Setting</h4>
                <p className="text-white/80 text-xs sm:text-sm">Calming healing atmosphere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
