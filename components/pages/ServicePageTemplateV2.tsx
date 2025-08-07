"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, CheckCircle, Star, Phone, Mail, Brain, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { CompleteServiceData } from "@/lib/service-data"
import sharedContent from "@/data/shared-content.json"

interface ServicePageProps {
  serviceData: CompleteServiceData
}

export default function ServicePageTemplateV2({ serviceData }: ServicePageProps) {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set())

  // Get service key from the serviceData title
  const getServiceKey = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  // Get icon configuration from shared content
  const serviceKey = getServiceKey(serviceData.title)
  const iconConfig = sharedContent.serviceIcons[serviceKey as keyof typeof sharedContent.serviceIcons] || {
    icon: "Heart",
    iconColor: "#DC2626",
    iconBg: "#FEE2E2"
  }

  // Map icon names to components
  const getIconComponent = (name: string) => {
    switch (name.toLowerCase()) {
      case 'heart':
        return Heart
      case 'brain':
        return Brain
      case 'shield':
        return Shield
      case 'users':
        return Users
      case 'sparkles':
        return Sparkles
      default:
        return Heart
    }
  }

  const IconComponent = getIconComponent(iconConfig.icon)

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
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
        return "https://calendly.com/allegroadmin/30min"
      case "katey":
        return "https://calendly.com/katey-allegrocounselling/1-hour-session?month=2025-06"
      default:
        return "https://calendly.com/allegroadmin/30min"
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
                style={{ backgroundColor: "rgba(39, 171, 183, 0.1)", color: "#27ABB7" }}
              >
                Professional Therapy Services Online in Alberta
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {serviceData.title}
                </h1>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {serviceData.benefits.slice(0, 4).map((benefit, index) => (
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
                  onClick={() => window.open(sharedContent.hero.ctaUrl, "_blank")}
                >
                  {sharedContent.hero.ctaButton}
                </Button>
              </div>
            </div>

            {/* Right column - Hero Image */}
            <div className="relative h-full">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl h-full flex items-center">
                <div className="relative w-full">
                  <Image
                    src={serviceData.heroImage || "/placeholder.svg"}
                    alt={`${serviceData.title} therapy session`}
                    width={500}
                    height={600}
                    priority={true}
                    className="rounded-2xl w-full h-[500px] lg:h-[600px] object-cover shadow-lg"
                  />

                  {/* Floating service icon */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: iconConfig.iconBg }}
                  >
                    <IconComponent className="h-8 w-8" style={{ color: iconConfig.iconColor }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      {serviceData.fullDescription && (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/25 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-200/20 rounded-full blur-xl"></div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-8 shadow-xl">
                {IconComponent && <IconComponent className="h-10 w-10 text-white" />}
              </div>
                             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                 {serviceData.fullDescription?.title || "Understanding"}{" "}
                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                   {serviceData.title}
                 </span>
               </h2>
               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 {serviceData.fullDescription?.subtitle || "Our comprehensive approach can transform your relationships and emotional well-being"}
               </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Left Column - Key Points */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                                                       <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                    {serviceData.fullDescription?.sections?.whyChooseUs?.title || "Why Choose Our Approach?"}
                  </h3>
                  <div className="space-y-4">
                    {(serviceData.fullDescription?.sections?.whyChooseUs?.points || [
                      { title: "Evidence-Based Methods", description: "Proven therapeutic techniques backed by research" },
                      { title: "Personalized Care", description: "Tailored treatment plans for your unique situation" },
                      { title: "Safe Environment", description: "Confidential space for healing and growth" },
                      { title: "Experienced Team", description: "Registered Licensed professionals with years of expertise" }
                    ]).map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{point.title}</h4>
                          <p className="text-sm text-gray-600">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                                                 <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-6">{serviceData.fullDescription?.sections?.impact?.title || "Our Impact"}</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {(serviceData.fullDescription?.sections?.impact?.stats || [
                      { value: "1000+", label: "Clients Helped" },
                      { value: "15+", label: "Years Experience" },
                      { value: "100%", label: "Client Centered" },
                      { value: "5.0", label: "Client Rating" }
                    ]).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50">
                  <div className="prose prose-lg max-w-none">
                    {serviceData.philosophy && (
                      <>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{serviceData.philosophy.title}</h3>

                        <div className="space-y-8">
                          {serviceData.philosophy.sections ? (
                            serviceData.philosophy.sections.map((section, index) => {
                              // Map different icons to each philosophy section
                              const getPhilosophyIcon = (index: number) => {
                                const icons = [
                                  { component: Heart, color: "text-red-500" },
                                  { component: Users, color: "text-blue-500" },
                                  { component: Star, color: "text-yellow-500" },
                                  { component: Sparkles, color: "text-purple-500" },
                                  { component: Brain, color: "text-teal-500" },
                                  { component: Shield, color: "text-green-500" }
                                ]
                                return icons[index % icons.length]
                              }
                              
                              const iconConfig = getPhilosophyIcon(index)
                              const IconComponent = iconConfig.component
                              
                              return (
                                <div key={index}>
                                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                    <IconComponent className={`h-5 w-5 ${iconConfig.color} mr-3`} />
                                    {section.title}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed mb-4">
                                    {section.description}
                                  </p>
                                </div>
                              )
                            })
                          ) : (
                            <div className="text-gray-600 text-center py-8">
                              <p>Philosophy content will be added for this service.</p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(sharedContent.hero.ctaUrl, "_blank")}
              >
                {sharedContent.hero.ctaButton}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {sharedContent.features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acknowledging Pain Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{sharedContent.acknowledgingPain.title}</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            {sharedContent.acknowledgingPain.description}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(sharedContent.hero.ctaUrl, "_blank")}
          >
            {sharedContent.acknowledgingPain.ctaButton}
          </Button>
        </div>
      </section>

      {/* Specific Services Section */}
      {serviceData.specificServices && serviceData.specificServices.length > 0 && (
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
              {serviceData.specificServices.map((specificService, index) => {
                const IconComponent = getIconComponent(specificService.icon || "Heart")
                return (
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
                          style={{ backgroundColor: specificService.iconBg || "#FEE2E2" }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: specificService.iconColor || "#DC2626" }} />
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


                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {sharedContent.whatToExpected.title}{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">{sharedContent.whatToExpected.highlightedTitle}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{serviceData.whatToExpected.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.whatToExpected.steps.map((step, index) => (
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
              {sharedContent.approaches.title}{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">{sharedContent.approaches.highlightedTitle}</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {sharedContent.approaches.subtitle}
            </p>
          </div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {serviceData.approaches.map((approach, index) => {
               // Select different icons based on approach name or index
               const getApproachIcon = (name: string, index: number) => {
                 const iconMap: { [key: string]: any } = {
                   'emdr': Brain,
                   'cbt': Shield,
                   'dbt': Heart,
                   'mindfulness': Sparkles,
                   'trauma': Shield,
                   'attachment': Users,
                   'narrative': Sparkles,
                   'gestalt': Brain,
                   'somatic': Heart,
                   'inner child': Heart,
                   'visualization': Sparkles,
                   'subconscious': Brain,
                   'standard': Shield,
                   'adaptive': Brain,
                   'bilateral': Sparkles,
                   'resource': Heart,
                   'safe place': Shield,
                   'future': Sparkles
                 }
                 
                 const lowerName = name.toLowerCase()
                 for (const [key, icon] of Object.entries(iconMap)) {
                   if (lowerName.includes(key)) {
                     return icon
                   }
                 }
                 
                 // Fallback to different icons based on index
                 const fallbackIcons = [Brain, Shield, Heart, Sparkles, Users, Star]
                 return fallbackIcons[index % fallbackIcons.length]
               }
               
               const ApproachIcon = getApproachIcon(approach.name, index)
               
               return (
                 <Card
                   key={index}
                   className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                 >
                   <CardContent className="p-6">
                     <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                       <ApproachIcon className="h-6 w-6 text-teal-600" />
                     </div>
                     <h3 className="text-lg font-bold text-gray-900 mb-3">{approach.name}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">{approach.description}</p>
                   </CardContent>
                 </Card>
               )
             })}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {sharedContent.faq.title}{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {sharedContent.faq.highlightedTitle}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Common questions about {serviceData.title.toLowerCase()}</p>
          </div>

          <div className="space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                         <div className={`transform transition-transform duration-200 ${expandedFaqs.has(index) ? 'rotate-180' : ''}`}>
                       <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </div>
                   </button>
                   {expandedFaqs.has(index) && (
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

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{sharedContent.finalCta.title}</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            {sharedContent.finalCta.description} {serviceData.title.toLowerCase()} can help you harmonize your relationships and create more fulfilling
            connections. Our compassionate team is ready to support you on your journey to better mental health and
            stronger relationships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(sharedContent.hero.ctaUrl, "_blank")}
            >
              {sharedContent.finalCta.ctaButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(`tel:${sharedContent.finalCta.phoneNumber}`, "_self")}
            >
              {sharedContent.finalCta.phoneButton}
            </Button>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span>{sharedContent.finalCta.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span>{sharedContent.finalCta.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 