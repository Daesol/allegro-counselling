import { Heart, Users, Shield, CheckCircle } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Allegro Counselling
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive, compassionate approach to mental health care
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 hover:border-red-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:shadow-red-300/50 group-hover:scale-110 group-hover:rotate-6"
                style={{ backgroundColor: "#D95E61" }}
              >
                <Heart className="h-8 w-8 text-white transition-all duration-700 group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:text-red-600">
                  Holistic Care
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 transition-all duration-500 group-hover:text-gray-800">
                  Addressing all aspects of well-being through comprehensive, integrated treatment approaches that
                  consider your whole person
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 transition-all duration-500 group-hover:scale-125" />
                  <span className="text-sm text-gray-500 transition-all duration-500 group-hover:text-green-600 group-hover:font-medium">
                    Evidence-based methods
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 hover:border-teal-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:shadow-teal-300/50 group-hover:scale-110 group-hover:-rotate-6"
                style={{ backgroundColor: "#189799" }}
              >
                <Users className="h-8 w-8 text-white transition-all duration-700 group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:text-teal-600">
                  Personalized Treatment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 transition-all duration-500 group-hover:text-gray-800">
                  Tailored therapy plans designed specifically for your unique needs, goals, and healing journey
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 transition-all duration-500 group-hover:scale-125" />
                  <span className="text-sm text-gray-500 transition-all duration-500 group-hover:text-green-600 group-hover:font-medium">
                    Individual focus
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 hover:border-green-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover:shadow-green-300/50 group-hover:scale-110 group-hover:rotate-6">
                <Shield className="h-8 w-8 text-white transition-all duration-700 group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:text-green-600">
                  Safe Environment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 transition-all duration-500 group-hover:text-gray-800">
                  Compassionate and confidential space where you can explore and heal at your own comfortable pace
                </p>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 transition-all duration-500 group-hover:scale-125" />
                  <span className="text-sm text-gray-500 transition-all duration-500 group-hover:text-green-600 group-hover:font-medium">
                    Complete confidentiality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
