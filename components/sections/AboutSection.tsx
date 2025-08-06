"use client"

import { Brain, Heart, Shield, Users, Sparkles } from "lucide-react"
import sharedContent from "@/data/shared-content.json"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-hidden min-h-screen"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-100 rounded-full opacity-25 blur-lg"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Allegro Counselling
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Allegro Counselling offers holistic psychological services focusing on intellectual, spiritual, social,
            physical, and occupational well-being through compassionate, evidence-based care.
          </p>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="relative group transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:rotate-0.5 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:ring-4 group-hover:ring-red-200/50">
                <img
                  src="https://www.listonegiordano.com/wp-content/uploads/2022/12/JCZ02216-HDR.jpg"
                  alt="Comfortable therapy office space"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Enhanced gradient overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-700 group-hover:from-red-900/80 group-hover:via-red-600/30"></div>
                {/* Text overlay with enhanced animation */}
                <div className="absolute bottom-0 left-0 p-4 text-white transform transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 transition-all duration-500 group-hover:text-red-100">
                    Comfortable Therapy Spaces
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90 transition-all duration-500 group-hover:opacity-100">
                    Welcoming environments designed for healing
                  </p>
                </div>
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-400/60 transition-all duration-700"></div>
              </div>
            </div>
            <div className="relative group transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:-rotate-0.5 hover:shadow-2xl hover:shadow-pink-500/30">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:ring-4 group-hover:ring-pink-200/50">
                <img
                  src="https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional counselling session"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Enhanced gradient overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-700 group-hover:from-pink-900/80 group-hover:via-pink-600/30"></div>
                {/* Text overlay with enhanced animation */}
                <div className="absolute bottom-0 left-0 p-4 text-white transform transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 transition-all duration-500 group-hover:text-pink-100">
                    Professional Care
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90 transition-all duration-500 group-hover:opacity-100">
                    Expert guidance in a safe environment
                  </p>
                </div>
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-400/60 transition-all duration-700"></div>
              </div>
            </div>
            <div className="relative group transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:rotate-0.5 hover:shadow-2xl hover:shadow-orange-500/30 sm:col-span-2 lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:ring-4 group-hover:ring-orange-200/50">
                <img
                  src="https://images.unsplash.com/photo-1518708909080-704599b19972?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Peaceful waiting area"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Enhanced gradient overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-700 group-hover:from-orange-900/80 group-hover:via-orange-600/30"></div>
                {/* Text overlay with enhanced animation */}
                <div className="absolute bottom-0 left-0 p-4 text-white transform transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 transition-all duration-500 group-hover:text-orange-100">
                    Peaceful Environment
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90 transition-all duration-500 group-hover:opacity-100">
                    Calming spaces for reflection and growth
                  </p>
                </div>
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400/60 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left side - Our Approach description with photo */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
              <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full mr-3 sm:mr-4"></div>
              Our Approach
            </h3>

            {/* Approach photo - Now flexible height */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Therapist and client in session"
                className="w-full h-full object-cover"
              />
              {/* Black to transparent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h4 className="font-semibold text-xl mb-2">Our Client-Focused Approach</h4>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Client-focused therapy with individualized treatment plans, utilizing evidence-based methods to
                  support your unique healing journey with compassion and expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Therapy methods grid */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 text-center lg:text-left">
              Our Therapeutic Methods
            </h4>
            <div className="grid gap-4 flex-1">
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#D95E61" }} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Cognitive Behavioural Therapy
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Evidence-based approach that helps identify and change negative thought patterns and behaviors.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#D95E61" }} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">EMDR</h5>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Eye Movement Desensitization and Reprocessing therapy for trauma and distressing memories.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-teal-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#189799" }} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Inner Child Work</h5>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Healing approach that addresses childhood experiences and their impact on adult relationships.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#D95E61" }} />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Mindfulness-Based Therapy</h5>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Integrates mindfulness practices to increase awareness and reduce stress and anxiety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Ready to Begin Your{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Healing Journey?
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards a healthier, happier you. Our compassionate team is here to support you
                every step of the way.
              </p>
              <div className="pt-4">
                <button
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
                  onClick={() => window.open(sharedContent.hero.ctaUrl, "_blank")}
                >
                  {sharedContent.hero.ctaButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
