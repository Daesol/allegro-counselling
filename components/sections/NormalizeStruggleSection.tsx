"use client"

import { Brain, Heart, Shield, Sparkles, Smile } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function NormalizeStruggleSection() {
  const [expandedItem, setExpandedItem] = useState(0) // First item expanded by default

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  const questions = [
    {
      icon: Brain,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-100",
      question: "Do you feel overwhelmed by emotions you don't fully understand?",
      answer: "Emotions can be complex and confusing, especially when they seem to arise without clear triggers.",
    },
    {
      icon: Shield,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      question: "Have you experienced trauma that still affects your daily life?",
      answer: "Trauma can leave lasting imprints that influence how we respond to situations in the present.",
    },
    {
      icon: Smile,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      question: "Are you constantly trying to be 'okay' for others while feeling empty inside?",
      answer:
        "Many people wear a mask of wellness while struggling internally, afraid to burden others with their pain.",
    },
    {
      icon: Heart,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      question: "Do you find it difficult to trust others or form meaningful connections?",
      answer:
        "Past experiences can make it challenging to open up and build relationships based on trust and vulnerability.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50/70 relative overflow-hidden">
      {/* Curved edges using SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="white" className="w-full">
          <path d="M0,48L80,42.7C160,37,320,27,480,21.3C640,16,800,16,960,21.3C1120,27,1280,37,1360,42.7L1440,48L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left column - intro paragraph */}
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center md:text-left">
              You're Not Alone
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              Many people struggle silently with their mental health, believing they're the only ones feeling this way.
              The truth is that emotional pain is a universal human experience, and recognizing your struggles is the
              first step toward healing.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              If any of these sound familiar, you're not alone — and support is available.
            </p>

            <div className="grid gap-6">
              {questions.map((item, index) => (
                <StruggleQuestionItem key={index} item={item} index={index} />
              ))}
            </div>

            <div className="pt-4 hidden md:block">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50/70 backdrop-blur-sm shadow-sm">
                <Sparkles className="h-5 w-5 mr-2 text-teal-600" />
                <span className="text-gray-700">Healing is possible</span>
              </div>
            </div>
          </div>

          {/* Right column - image block */}
          <div className="relative h-full">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-0 shadow-lg border border-teal-100 h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Supportive therapy environment"
                width={400}
                height={500}
                className="rounded-3xl w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curved edges using SVG - bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="white" className="w-full">
          <path d="M0,0L80,5.3C160,11,320,21,480,26.7C640,32,800,32,960,26.7C1120,21,1280,11,1360,5.3L1440,0L1440,48L1360,48C1280,48,1120,48,960,48C800,48,640,48,480,48C320,48,160,48,80,48L0,48Z"></path>
        </svg>
      </div>
    </section>
  )
}

interface QuestionItemProps {
  item: {
    icon: any
    iconColor: string
    iconBg: string
    question: string
    answer: string
  }
  index: number
}

function StruggleQuestionItem({ item, index }: QuestionItemProps) {
  const [expandedItem, setExpandedItem] = useState(-1)

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  return (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => toggleItem(index)}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center flex-1">
          <div className={`mr-3 ${item.iconBg} rounded-full p-2 flex-shrink-0`}>
            <item.icon className={`h-4 w-4 ${item.iconColor}`} />
          </div>
          <h3 className="font-medium text-gray-900 text-sm">{item.question}</h3>
        </div>
        <div className={`transform transition-transform duration-300 ${expandedItem === index ? "rotate-180" : ""}`}>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          expandedItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 pb-3">
          <div className={`pl-11 border-l-2 ${item.iconColor.replace("text-", "border-")}`}>
            <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// New separate section for the expandable cards
export function StruggleQuestionsSection() {
  const [expandedItem, setExpandedItem] = useState(0) // First item expanded by default

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  const questions = [
    {
      icon: Brain,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-100",
      question: "Do you feel overwhelmed by emotions you don't fully understand?",
      answer: "Emotions can be complex and confusing, especially when they seem to arise without clear triggers.",
    },
    {
      icon: Shield,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      question: "Have you experienced trauma that still affects your daily life?",
      answer: "Trauma can leave lasting imprints that influence how we respond to situations in the present.",
    },
    {
      icon: Smile,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      question: "Are you constantly trying to be 'okay' for others while feeling empty inside?",
      answer:
        "Many people wear a mask of wellness while struggling internally, afraid to burden others with their pain.",
    },
    {
      icon: Heart,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      question: "Do you find it difficult to trust others or form meaningful connections?",
      answer:
        "Past experiences can make it challenging to open up and build relationships based on trust and vulnerability.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Common Struggles We Address</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These feelings are more common than you might think. Recognizing them is the first step toward healing.
          </p>
        </div>

        <div className="grid gap-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center flex-1">
                  <div className={`mr-4 ${item.iconBg} rounded-full p-3 flex-shrink-0`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.question}</h3>
                </div>
                <div
                  className={`transform transition-transform duration-200 ${
                    expandedItem === index ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedItem === index && (
                <div className="px-6 pb-6">
                  <div className="pl-16 border-l-4 border-teal-200">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full border border-teal-200">
            <span className="text-teal-700 font-medium text-lg">You deserve support on your healing journey</span>
          </div>
        </div>
      </div>
    </section>
  )
}
