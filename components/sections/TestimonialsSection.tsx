"use client"

import type React from "react"

import { Star, Heart } from "lucide-react"
import { useRef, useState } from "react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Allegro Counselling provided me with a safe and empathetic space to navigate difficult times. The therapists' expertise and care helped me find inner peace. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote:
        "Grateful for the transformative experience with Allegro Counselling. Their tailored techniques empowered me to overcome challenges and develop a stronger sense of self.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote:
        "The professional, compassionate approach at Allegro Counselling made all the difference in my healing journey. I've seen remarkable progress.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and genuine care. The therapists at Allegro truly understand and provide excellent support for mental health challenges.",
      author: "David K.",
      rating: 5,
    },
    {
      quote:
        "Life-changing experience. The safe environment and personalized treatment helped me work through trauma I thought I'd never overcome.",
      author: "Lisa T.",
      rating: 5,
    },
    {
      quote:
        "Professional excellence combined with heartfelt compassion. Allegro Counselling has been instrumental in my recovery and personal growth.",
      author: "Robert H.",
      rating: 5,
    },
    {
      quote:
        "The holistic approach and evidence-based methods at Allegro have helped me develop better coping strategies and emotional resilience.",
      author: "Amanda C.",
      rating: 5,
    },
    {
      quote:
        "Exceptional care and support. The team at Allegro creates a welcoming space where healing can truly begin and flourish.",
      author: "Mark S.",
      rating: 5,
    },
    {
      quote:
        "Allegro Counselling provided me with a safe and empathetic space to navigate difficult times. The therapists' expertise and care helped me find inner peace. Highly recommended.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      quote:
        "Grateful for the transformative experience with Allegro Counselling. Their tailored techniques empowered me to overcome challenges and develop a stronger sense of self.",
      author: "Michael R.",
      rating: 5,
    },
    {
      quote:
        "The professional, compassionate approach at Allegro Counselling made all the difference in my healing journey. I've seen remarkable progress.",
      author: "Jennifer L.",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and genuine care. The therapists at Allegro truly understand and provide excellent support for mental health challenges.",
      author: "David K.",
      rating: 5,
    },
    {
      quote:
        "Life-changing experience. The safe environment and personalized treatment helped me work through trauma I thought I'd never overcome.",
      author: "Lisa T.",
      rating: 5,
    },
    {
      quote:
        "Professional excellence combined with heartfelt compassion. Allegro Counselling has been instrumental in my recovery and personal growth.",
      author: "Robert H.",
      rating: 5,
    },
    {
      quote:
        "The holistic approach and evidence-based methods at Allegro have helped me develop better coping strategies and emotional resilience.",
      author: "Amanda C.",
      rating: 5,
    },
    {
      quote:
        "Exceptional care and support. The team at Allegro creates a welcoming space where healing can truly begin and flourish.",
      author: "Mark S.",
      rating: 5,
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      />

      {/* Glass blur overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-md rounded-full mb-6 shadow-xl border border-white/40">
            <Star className="h-8 w-8 text-white drop-shadow-lg" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 drop-shadow-lg text-white">Client Testimonials</h2>
          <p className="text-xl text-white/90 drop-shadow-md">
            Hear from those who have found healing with Allegro Counselling
          </p>
        </div>

        {/* Single row of testimonials */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          {/* Navigation arrows */}
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -320, behavior: "smooth" })
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/30 flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 320, behavior: "smooth" })
              }
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/30 flex items-center justify-center hover:bg-white/90 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex space-x-4 overflow-x-auto scrollbar-hide pb-4 pt-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-300 fill-current drop-shadow-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white mb-3 leading-relaxed italic drop-shadow-sm">"{testimonial.quote}"</p>
                <div className="text-xs text-white/80 font-medium drop-shadow-sm">— {testimonial.author}</div>
              </div>
            ))}
          </div>

          {/* Fade gradients for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/30 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
