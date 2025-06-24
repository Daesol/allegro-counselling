"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Star, Clock, Users } from "lucide-react"
import { useState } from "react"

interface Approach {
  name: string
  color: string
  bgColor: string
  borderColor: string
}

interface TeamMemberCardProps {
  name: string
  title: string
  titleColor: string
  imageBg: string
  imageSrc: string
  imageGradientFrom: string
  imageGradientTo: string
  specializations: string[]
  approaches: Approach[]
  ageRange: string
  price: string
  priceColor: string
  shortIntro: string
  rating: number
  experience: string
  isFocused?: boolean
  onClick?: () => void
}

export default function TeamMemberCard({
  name,
  title,
  titleColor,
  imageBg,
  imageSrc,
  imageGradientFrom,
  imageGradientTo,
  specializations,
  approaches,
  ageRange,
  price,
  priceColor,
  shortIntro,
  rating,
  experience,
  isFocused,
  onClick,
}: TeamMemberCardProps) {
  const [isIntroExpanded, setIsIntroExpanded] = useState(false)

  return (
    <Card
      className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden min-w-[350px] max-w-[350px] lg:min-w-[400px] lg:max-w-[400px] flex-shrink-0 group flex flex-col cursor-pointer transform ${
        isFocused ? "scale-105 shadow-2xl ring-2 ring-blue-500 ring-opacity-50" : "hover:scale-102"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        {/* Header with Image and Gradient Overlay */}
        <div className="relative h-40 lg:h-48 overflow-visible">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-20"
            style={{
              background: `linear-gradient(135deg, ${imageGradientFrom}, ${imageGradientTo})`,
            }}
          />
          <img
            src={imageBg || "/placeholder.svg"}
            alt={`${name} background`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Price Badge */}
          <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
            <div
              className="px-2 py-1 lg:px-3 lg:py-1 rounded-full text-white font-semibold text-xs lg:text-sm shadow-lg"
              style={{ backgroundColor: priceColor }}
            >
              {price}
            </div>
          </div>

          {/* Circular Profile Photo */}
          <div className="absolute -bottom-8 lg:-bottom-12 left-4 lg:left-6 z-30">
            <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-6 pt-12 lg:pt-16 flex flex-col flex-1">
          {/* Header Info */}
          <div className="mb-3 lg:mb-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">{name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-xs lg:text-sm font-medium text-gray-600">{rating}</span>
              </div>
            </div>
            <p className="font-medium text-xs lg:text-sm mb-2" style={{ color: titleColor }}>
              {title}
            </p>
            <div className="flex items-center gap-3 lg:gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{ageRange}</span>
              </div>
            </div>
          </div>

          {/* Short Introduction */}
          <div className="mb-3 lg:mb-4">
            <p className={`text-xs lg:text-sm text-gray-600 leading-relaxed ${isIntroExpanded ? "" : "line-clamp-3"}`}>
              {shortIntro}
            </p>
            {shortIntro.length > 120 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsIntroExpanded(!isIntroExpanded)
                }}
                className="text-xs font-medium mt-1 text-blue-600 hover:text-blue-800 transition-colors"
              >
                {isIntroExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          {/* Specializations */}
          <div className="mb-3 lg:mb-4">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs lg:text-sm">Specializations</h4>
            <div className="flex flex-wrap gap-1">
              {specializations.slice(0, 4).map((specialization, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
                  {specialization}
                </Badge>
              ))}
              {specializations.length > 4 && (
                <Badge variant="secondary" className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
                  +{specializations.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Approaches */}
          <div className="mb-4 lg:mb-6 flex-1">
            <h4 className="font-semibold text-gray-900 mb-2 text-xs lg:text-sm">Therapeutic Approaches</h4>
            <div className="flex flex-wrap gap-1">
              {approaches.slice(0, 3).map((approach, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs px-2 py-1 border-2"
                  style={{
                    backgroundColor: approach.bgColor,
                    color: approach.color,
                    borderColor: approach.borderColor,
                  }}
                >
                  {approach.name}
                </Badge>
              ))}
              {approaches.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-1 border-2 border-gray-300 text-gray-600">
                  +{approaches.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Book Session Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
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
            className="w-full py-2 lg:py-3 px-4 text-xs lg:text-sm font-medium text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 mt-auto"
            style={{ backgroundColor: titleColor }}
          >
            Book Now with {name.split(" ")[0]}
          </button>
        </div>
      </div>
    </Card>
  )
}
