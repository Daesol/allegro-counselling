import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone, Star, Heart, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-red-100/30 rounded-full blur-2xl"></div>
      </div>

      {/* Floating decorative flowers */}
      <div className="absolute top-10 right-20 w-16 h-16 opacity-20">
        <Image
          src="https://i.postimg.cc/MpTnmZXC/5014039d-8308-40a9-9d58-7833744eb093-removebg-preview.png"
          alt="Decorative flower"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-16 w-20 h-20 opacity-15 scale-x-[-1]">
        <Image
          src="https://i.postimg.cc/MpTnmZXC/5014039d-8308-40a9-9d58-7833744eb093-removebg-preview.png"
          alt="Decorative flower"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6 shadow-xl">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Healing Journey?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards a healthier, happier you. Schedule your complimentary 30-minute consultation and
            discover how we can support your path to wellness.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/70 backdrop-blur-sm border-red-100 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                  <span>Get In Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-red-50/50 rounded-lg">
                  <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">(825) 605-4453</p>
                    <p className="text-sm text-gray-600">Call or text anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-red-50/50 rounded-lg">
                  <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 break-all">admin@allegrocounselling.com</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50/50 rounded-lg">
                  <MapPin className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Edmonton, AB</p>
                    <p className="text-sm text-gray-600">Online & in-person sessions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-teal-50/50 rounded-lg">
                  <Clock className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Flexible Scheduling</p>
                    <p className="text-sm text-gray-600">Evening & weekend appointments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-white/70 backdrop-blur-sm border-green-100 shadow-xl">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Why Choose Us
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Licensed professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Confidential & secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">200+ satisfied clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Free consultation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Main CTA */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

              <div className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Start Your Free Consultation</h3>
                <p className="text-red-100 mb-6 leading-relaxed">
                  No commitment, no pressure. Just a warm conversation about how we can support your healing journey.
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="rounded-full w-full bg-white text-red-600 hover:bg-red-50 text-lg font-semibold py-4 shadow-lg"
                  >
                    Book Free 30-Min Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full w-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg py-4"
                  >
                    Schedule Regular Appointment
                  </Button>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <span className="text-white/90 font-medium">5.0 Rating</span>
                  </div>
                  <p className="text-red-100 text-sm">Join 200+ clients who found their path to healing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Insurance & Payment */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-purple-100">
                <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100">
                <div className="text-2xl font-bold text-green-600 mb-1">5.0★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What to Expect</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your first consultation is completely free and pressure-free. We'll discuss your goals, answer your
              questions, and explore how we can best support you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-red-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900">Book Your Call</h4>
              <p className="text-sm text-gray-600">
                Schedule your free 30-minute consultation at a time that works for you.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-teal-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900">Connect & Explore</h4>
              <p className="text-sm text-gray-600">
                We'll discuss your needs, goals, and how our approach can help you.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900">Begin Healing</h4>
              <p className="text-sm text-gray-600">
                Start your personalized therapy journey with confidence and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
