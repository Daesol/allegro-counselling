"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, CheckCircle, Star, Phone, Mail, Brain, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ServicePageProps {
  service: {
    title: string
    subtitle: string
    description: string
    fullDescription?: string
    icon: any
    iconColor: string
    iconBg: string
    heroImage: string
    benefits: string[]
    specificServices?: {
      title: string
      description: string
      details: string[]
      icon: any
      iconColor: string
      iconBg: string
      imageUri?: string
    }[]
    whatToExpected: {
      title: string
      description: string
      steps: {
        step: number
        title: string
        description: string
      }[]
    }
    approaches: {
      name: string
      description: string
      icon: any
    }[]
    faqs: {
      question: string
      answer: string
    }[]
    relatedServices: string[]
    therapists: {
      name: string
      image: string
      specialization: string
      experience: string
      imageSrc?: string
    }[]
    pricing: {
      individual: string
      couples?: string
      family?: string
    }
  }
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Function to get therapist booking URL
  const getTherapistBookingUrl = (therapistName: string) => {
    const firstName = therapistName.split(" ")[0].toLowerCase()
    switch (firstName) {
      case "sasha":
        return "https://calendly.com/allegrocounselling"
      case "tianna":
        return "https://calendly.com/tianna-allegrocounselling"
      case "ava":
        return "https://calendly.com/allegroadmin"
      case "katey":
        return "https://calendly.com/katey-allegrocounselling/1-hour-session?month=2025-06"
      default:
        return "https://calendly.com/allegroadmin"
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200/15 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Content */}
            <div className="space-y-6">
              <Badge
                className="inline-flex backdrop-blur-md border border-white/30"
                style={{ backgroundColor: "rgba(248, 230, 231, 0.7)", color: "#A83E41" }}
              >
                Professional Therapy Services
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">{service.subtitle}</p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {service.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full text-white hover:bg-red-700 px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 text-lg mr-[30%]"
                  style={{ backgroundColor: "#D95E61" }}
                  onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
                >
                  Book Free Consultation
                </Button>
              </div>

              {/* Pricing */}
            </div>

            {/* Right column - Hero Image */}
            <div className="relative h-full">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl h-full flex items-center">
                <div className="relative w-full">
                  <Image
                    src={service.heroImage || "/placeholder.svg"}
                    alt={`${service.title} therapy session`}
                    width={500}
                    height={600}
                    priority={true}
                    className="rounded-2xl w-full h-[500px] lg:h-[600px] object-cover shadow-lg"
                  />

                  {/* Floating service icon */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: service.iconBg }}
                  >
                    {service.icon && <service.icon className="h-8 w-8" style={{ color: service.iconColor }} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      {service.fullDescription && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/25 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-200/20 rounded-full blur-xl"></div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-8 shadow-xl">
                {service.icon && <service.icon className="h-10 w-10 text-white" />}
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Understanding{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how our comprehensive approach can transform your relationships and emotional well-being
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Left Column - Key Points */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    Why Choose Our Approach?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Evidence-Based Methods</h4>
                        <p className="text-sm text-gray-600">Proven therapeutic techniques backed by research</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Personalized Care</h4>
                        <p className="text-sm text-gray-600">Tailored treatment plans for your unique situation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Safe Environment</h4>
                        <p className="text-sm text-gray-600">Confidential space for healing and growth</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Experienced Team</h4>
                        <p className="text-sm text-gray-600">Licensed professionals with years of expertise</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">1000+</div>
                      <div className="text-blue-100 text-sm">Clients Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">15+</div>
                      <div className="text-blue-100 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-blue-100 text-sm">Client Centered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">5.0</div>
                      <div className="text-blue-100 text-sm">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy & Approach</h3>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Heart className="h-5 w-5 text-red-500 mr-3" />
                          Understanding Your Journey
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          We believe in the transformative power of connection and understand that every relationship is
                          unique, facing its own set of challenges. Our dedicated team of experienced counsellors are
                          committed to guiding individuals and couples through the intricate dance of relationships with
                          compassion and expertise.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Users className="h-5 w-5 text-blue-500 mr-3" />
                          Creating Safe Spaces
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Our services are designed to provide a safe and confidential space for individuals and couples
                          to explore their feelings, communicate openly, and develop a deeper understanding of
                          themselves and their partners. Whether you're navigating romantic relationships, family
                          dynamics, or seeking to improve communication, our skilled therapists are here to support you.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-3" />
                          Evidence-Based Excellence
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Allegro Counselling employs evidence-based therapeutic approaches, fostering an environment of
                          empathy, respect, and growth. Our goal is to empower individuals and couples to build
                          stronger, more resilient connections through personalized counseling sessions that address
                          communication breakdowns, trust issues, intimacy concerns, and life transitions.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Sparkles className="h-5 w-5 text-purple-500 mr-3" />
                          Your Path Forward
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          If you're ready to harmonize your relationships and create more fulfilling connections,
                          Allegro Counselling is here to guide you on your journey. Discover the joy of meaningful
                          connections and the harmony that comes from understanding and supporting each other. Take the
                          first step towards a more harmonious and satisfying relationship with our compassionate team.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call-to-action */}
                  <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ready to Start Your Journey?</h4>
                        <p className="text-gray-600 text-sm">
                          Book a free consultation and take the first step toward healing
                        </p>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105"
                        onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Confidential & Secure</h3>
                <p className="text-gray-600 text-sm">
                  Your privacy is our priority with complete confidentiality guaranteed
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">Licensed professionals with specialized training and experience</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Compassionate Care</h3>
                <p className="text-gray-600 text-sm">Warm, empathetic support throughout your healing journey</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Acknowledging Pain Section --- */}
      <section className="py-16 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/25 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">We See Your Pain</h2>
          <p className="text-lg text-gray-700 mb-8">
            Healing begins with being seen and heard. We understand that reaching out for help can be difficult, and that your pain is real and valid. Our team is here to walk alongside you, offering compassion, expertise, and a safe space for your healing journey. You are not alone.
          </p>
          <Button
            size="lg"
            className="rounded-full text-white bg-pink-600 hover:bg-pink-700 px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
            onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
          >
            Book Your Session Now
          </Button>
        </div>
      </section>

      {/* Specific Services Section */}
      {service.specificServices && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Specialized Services
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive relationship counselling services tailored to your unique needs and circumstances
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.specificServices.map((specificService, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          specificService.imageUri
                            ? specificService.imageUri.includes("unsplash.com")
                              ? specificService.imageUri.replace("w=1000", "w=400").replace("q=60", "q=80")
                              : specificService.imageUri
                            : `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(specificService.title)}`
                        }
                        alt={`${specificService.title} therapy session`}
                        width={400}
                        height={200}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Service Icon Overlay */}
                      <div
                        className="absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: specificService.iconBg }}
                      >
                        {specificService.icon && (
                          <specificService.icon className="h-6 w-6" style={{ color: specificService.iconColor }} />
                        )}
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{specificService.title}</h3>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{specificService.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm">What We Address:</h4>
                        <ul className="space-y-2">
                          {specificService.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6">
                        <Button
                          size="sm"
                          className="w-full rounded-full text-white transition-all duration-300 transform hover:scale-105 h-auto py-3 px-4 whitespace-normal text-center leading-tight"
                          style={{ backgroundColor: specificService.iconColor }}
                          onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
                        >
                          Learn More About {specificService.title}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What to{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Expect</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{service.whatToExpected.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.whatToExpected.steps.map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based therapeutic methods tailored to your unique needs and relationship goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.approaches.map((approach, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    {approach.icon && <approach.icon className="h-6 w-6 text-teal-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{approach.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Common questions about {service.title.toLowerCase()}</p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div
                      className={`transform transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center text-white">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Take the first step towards better mental health. Book your free consultation today and discover how{" "}
              {service.title.toLowerCase()} can help you harmonize your relationships and create more fulfilling
              connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-white text-red-600 hover:bg-red-50 text-lg font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 transition-all duration-300 text-black bg-amber-400"
                onClick={() => window.open("tel:5878824196", "_self")}
              >
                Call (587) 882-4196
              </Button>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-red-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(587) 882-4196</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@allegrocounselling.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
