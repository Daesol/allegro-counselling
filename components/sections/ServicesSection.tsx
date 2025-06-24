import { Brain, Heart, User, Users, Sparkles, Puzzle, Frown } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Services Offered</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive therapeutic services tailored to your unique needs
          </p>
        </div>

        <div className="space-y-6">
          {/* First 6 services in 3x2 grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Relationship Counselling */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-400/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-pink-500/80 group-hover:border-pink-300 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all duration-500 group-hover:scale-110">
                  <Heart className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-pink-100 transition-colors duration-500">
                  Relationship Counselling
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Strengthening connections, improving communication, and resolving conflicts in all types of
                  relationships
                </p>
              </div>
            </div>

            {/* Trauma Counselling */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-purple-500/80 group-hover:border-purple-300 group-hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-500 group-hover:scale-110">
                  <Sparkles className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-purple-100 transition-colors duration-500">
                  Trauma Counselling
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Healing from past trauma through evidence-based approaches including EMDR and trauma-informed therapy
                </p>
              </div>
            </div>

            {/* Narcissistic Abuse Recovery */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-blue-500/80 group-hover:border-blue-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-110">
                  <User className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-blue-100 transition-colors duration-500">
                  Narcissistic Abuse Recovery
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Specialized support for healing from narcissistic relationships and rebuilding self-worth and
                  boundaries
                </p>
              </div>
            </div>

            {/* Anxiety Support */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-400/50 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-teal-500/80 group-hover:border-teal-300 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all duration-500 group-hover:scale-110">
                  <Users className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-teal-100 transition-colors duration-500">
                  Anxiety Support
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Effective strategies to manage anxiety, panic, and worry through evidence-based therapeutic approaches
                </p>
              </div>
            </div>

            {/* Depression Support */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-amber-500/80 group-hover:border-amber-300 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all duration-500 group-hover:scale-110">
                  <Frown className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-amber-100 transition-colors duration-500">
                  Depression Support
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Compassionate care for managing depression, finding meaning, and rebuilding motivation and joy
                </p>
              </div>
            </div>

            {/* ADHD Diagnosis and Support */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D')`,
                }}
              />

              {/* Glass blur overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-green-500/80 group-hover:border-green-300 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-500 group-hover:scale-110">
                  <Brain className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-green-100 transition-colors duration-500">
                  ADHD Diagnosis and Support
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                  Comprehensive assessment and personalized strategies for managing ADHD symptoms and enhancing focus
                </p>
              </div>
            </div>
          </div>

          {/* 7th service centered */}
          <div className="flex justify-center">
            <div className="w-full">
              {/* Autism Diagnosis and Support */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 group transform hover:-translate-y-3 hover:scale-105">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D')`,
                  }}
                />

                {/* Glass blur overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-white/10 transition-all duration-500" />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-400/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/30 backdrop-blur-sm border border-white/40 group-hover:bg-indigo-500/80 group-hover:border-indigo-300 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-500 group-hover:scale-110">
                    <Puzzle className="h-8 w-8 text-white drop-shadow-lg group-hover:text-white group-hover:animate-pulse transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg group-hover:text-indigo-100 transition-colors duration-500">
                    Autism Diagnosis and Support
                  </h3>
                  <p className="text-sm text-white/90 drop-shadow-md leading-relaxed group-hover:text-white transition-colors duration-500">
                    Specialized assessment and supportive therapy for individuals on the autism spectrum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
