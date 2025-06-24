"use client"

import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function HeroSection3() {
  const testimonials = [
    {
      quote: "Allegro Counselling provided me with a safe space to navigate difficult times. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote: "The therapists' expertise and care helped me find inner peace and develop stronger coping skills.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote: "Grateful for the transformative experience. Their tailored approach empowered me to overcome challenges.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote: "Professional, compassionate, and effective. I've seen remarkable progress in my mental health journey.",
      author: "David K.",
      rating: 5,
    },
    {
      quote: "The safe environment and personalized treatment made all the difference in my healing process.",
      author: "Lisa T.",
      rating: 5,
    },
    {
      quote: "Allegro Counselling provided me with a safe space to navigate difficult times. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote: "The therapists' expertise and care helped me find inner peace and develop stronger coping skills.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote: "Grateful for the transformative experience. Their tailored approach empowered me to overcome challenges.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote: "Professional, compassionate, and effective. I've seen remarkable progress in my mental health journey.",
      author: "David K.",
      rating: 5,
    },
    {
      quote: "The safe environment and personalized treatment made all the difference in my healing process.",
      author: "Lisa T.",
      rating: 5,
    },
    {
      quote: "Allegro Counselling provided me with a safe space to navigate difficult times. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote: "The therapists' expertise and care helped me find inner peace and develop stronger coping skills.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote: "Grateful for the transformative experience. Their tailored approach empowered me to overcome challenges.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote: "Professional, compassionate, and effective. I've seen remarkable progress in my mental health journey.",
      author: "David K.",
      rating: 5,
    },
    {
      quote: "The safe environment and personalized treatment made all the difference in my healing process.",
      author: "Lisa T.",
      rating: 5,
    },
    {
      quote: "Allegro Counselling provided me with a safe space to navigate difficult times. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote: "The therapists' expertise and care helped me find inner peace and develop stronger coping skills.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote: "Grateful for the transformative experience. Their tailored approach empowered me to overcome challenges.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote: "Professional, compassionate, and effective. I've seen remarkable progress in my mental health journey.",
      author: "David K.",
      rating: 5,
    },
    {
      quote: "The safe environment and personalized treatment made all the difference in my healing process.",
      author: "Lisa T.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const scrollContainer = document.querySelector(".testimonials-scroll-container")
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    const maxScroll = scrollWidth - clientWidth

    let scrollPosition = 0
    let isHovered = false

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollPosition += 1 // Very slow scroll speed
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0 // Reset to beginning
        }
        scrollContainer.scrollLeft = scrollPosition
      }
    }

    const interval = setInterval(autoScroll, 50) // Update every 50ms for smooth scrolling

    // Add hover event listeners
    const handleMouseEnter = () => {
      isHovered = true
    }
    const handleMouseLeave = () => {
      isHovered = false
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-4 sm:py-6 lg:py-8 px-2 relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=2731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional counselor background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col min-h-screen">
        {/* Main Hero Content */}
        <div className="flex-1 flex items-center pt-4 sm:pt-6 lg:pt-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            <div className="space-y-6 text-center lg:text-left order-1 lg:order-1">
              {/* Glass effect badge */}
              <div className="inline-flex">
                <Badge
                  className="hover:bg-red-100/50 inline-flex backdrop-blur-md border border-white/30"
                  style={{ backgroundColor: "rgba(248, 230, 231, 0.7)", color: "#A83E41" }}
                >
                  Embrace Your Healing Journey
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                Begin Your Path to Healing with{" "}
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  Allegro Counselling
                </span>
              </h1>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                We offer a warm, non-judgmental space to help you heal from the weight you've been carrying.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-gradient-x"></div>
                  <button
                    className="relative rounded-full text-base sm:text-lg px-6 sm:px-8 py-3 font-medium text-white shadow-lg backdrop-blur-sm w-full sm:w-auto bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105 hover:-translate-y-1"
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
                    Start Your Healing Journey
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-700 font-medium">Loved by 200+ clients</span>
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              {/* Glass effect container for image */}
              <div className="hidden sm:block bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl ml-2 sm:ml-3 lg:ml-4 w-full max-w-lg overflow-hidden group">
                {/* Lotus flower image - TOP RIGHT */}
                <div className="absolute -top-10 -right-2 w-40 h-40 z-10 transform -rotate-12 opacity-0">
                  <Image
                    src="https://png.pngtree.com/png-clipart/20250210/original/pngtree-pink-lotus-flowers-bloom-in-green-leaves-png-image_20411788.png"
                    alt="Lotus flower decoration"
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>

                {/* Lotus flower image - BOTTOM LEFT */}
                <div className="absolute -bottom-10 -left-12 w-40 h-40 z-10 transform -rotate-12 opacity-0">
                  <Image
                    src="https://png.pngtree.com/png-clipart/20250210/original/pngtree-pink-lotus-flowers-bloom-in-green-leaves-png-image_20411788.png"
                    alt="Lotus flower decoration"
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>

                {/* Lotus flower image - BOTTOM RIGHT */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 z-10 transform -rotate-12">
                  <Image
                    src="https://png.pngtree.com/png-clipart/20250210/original/pngtree-pink-lotus-flowers-bloom-in-green-leaves-png-image_20411788.png"
                    alt="Lotus flower decoration"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>

                <div className="bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-2xl p-4 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1476968776844-4bbe50fb7346?q=80&w=1869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Sasha Campbell, Registered Psychologist and Clinic Director"
                      width={400}
                      height={400}
                      className="rounded-xl shadow-lg mx-auto w-full max-w-sm lg:max-w-none aspect-square object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              {/* Mobile version without glass container */}
              <div className="block sm:hidden">
                <div className="bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-2xl p-4 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1476968776844-4bbe50fb7346?q=80&w=1869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Sasha Campbell, Registered Psychologist and Clinic Director"
                      width={400}
                      height={400}
                      className="rounded-xl shadow-lg mx-auto w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="pt-20 pb-8 sm:pb-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          {/* Scrolling testimonials container */}
          <div className="relative">
            <div
              className="testimonials-scroll-container flex space-x-4 overflow-x-auto scrollbar-hide pb-4 pt-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="text-xs text-gray-600 font-medium">— {testimonial.author}</div>
                </div>
              ))}
            </div>

            {/* Fade gradients for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  )
}
