"use client"

import Image from "next/image"

export default function TherapistIntroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-stone-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-stone-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-stone-100/40 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Therapist photo */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <Image
                  src="https://lh3.googleusercontent.com/a-/ALV-UjXZXlLBf5VB42HWHjPCG-bwmLyeoE0aKcpZCa2s2qaotFMWoy0_=s558-p-k-rw-no"
                  alt="Sasha Campbell, Registered Psychologist"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover shadow-lg"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">💝</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">🌱</span>
                </div>
              </div>

              {/* Credentials badge */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-full border border-red-100">
                  <span className="text-sm font-medium text-gray-700">Registered Psychologist & Clinic Director</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Personal bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Sasha</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I believe that everyone deserves a space where they can be truly seen and heard without judgment. After
                years of working with individuals, couples, and families, I've learned that healing isn't about "fixing"
                yourself — it's about understanding your story and finding your own path forward.
              </p>

              <p>
                My approach combines evidence-based therapies like EMDR and psychodynamic work with a deep respect for
                your unique experience. Whether you're dealing with trauma, anxiety, depression, or relationship
                challenges, I'm here to walk alongside you on your journey.
              </p>

              <p>
                When I'm not in session, you'll find me exploring Edmonton's river valley, reading, or spending time
                with my family. I understand that reaching out for support takes courage, and I'm honored to be part of
                your healing process.
              </p>
            </div>

            {/* Handwritten-style quote */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border-l-4 border-red-300 mt-8">
              <blockquote className="text-xl font-light text-gray-800 italic leading-relaxed">
                "Your story matters, your feelings are valid, and you don't have to carry this alone."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">— Sasha Campbell</div>
                {/* Handwritten-style signature */}
                <div className="text-2xl font-script text-red-500" style={{ fontFamily: "cursive" }}>
                  ✨ Sasha
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
                  onClick={() => {
                    const targetElement = document.getElementById("contact")
                    if (targetElement) {
                      const headerHeight = 80
                      const targetPosition = targetElement.offsetTop - headerHeight
                      window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Book a Free Consultation
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  Learn About My Approach
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
