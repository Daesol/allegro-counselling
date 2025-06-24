"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import InfoBar from "./InfoBar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    setOpenDropdown(null)

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80 // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const closeAllDropdowns = () => {
    setOpenDropdown(null)
    setIsMenuOpen(false)
  }

  const handleLinkClick = (href: string) => {
    closeAllDropdowns()
    // Navigate to the URL in the same tab
    window.location.href = href
  }

  const navigationItems = [
    {
      label: "Home",
      href: "https://allegrocounselling.com/",
      submenu: [
        { label: "Forms", href: "https://allegrocounselling.com/forms/" },
        { label: "Blog", href: "https://allegrocounselling.com/category/blog/" },
      ],
    },
    {
      label: "Our Staff",
      href: "https://allegrocounselling.com/meettheteam/",
    },
    {
      label: "Services",
      href: "https://allegrocounselling.com/services/",
      submenu: [
        { label: "Relationship Counselling", href: "/services/relationship-counselling" },
        { label: "Anxiety Support", href: "/services/anxiety-support" },
        { label: "Depression Support", href: "/services/depression-support" },
        {
          label: "Narcissistic Abuse Recovery",
          href: "/services/narcissistic-abuse-recovery",
        },
        { label: "Trauma Counselling", href: "/services/trauma-counselling" },
        { label: "ADHD Diagnosis and Support", href: "/services/adhd-diagnosis-and-support" },
        { label: "Autism Diagnosis and Support", href: "/services/autism-diagnosis-and-support" },
        { label: "Addictions", href: "/services/addictions" },
        { label: "Grief and Bereavement", href: "https://allegrocounselling.com/services/grief-bereavement/" },
        { label: "Inner Child Work", href: "/services/inner-child-work" },
        {
          label: "Eye Movement Desensitization and Reprocessing",
          href: "/services/eye-movement-desensitization-and-reprocessing",
        },
      ],
    },
    {
      label: "Contact",
      href: "https://allegrocounselling.com/contact/",
    },
    {
      label: "Login",
      href: "https://allegrocounselling.com/login/",
    },
  ]

  return (
    <>
      <InfoBar />
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => {
                window.location.href = "https://allegrocounselling.com/"
              }}
              className="cursor-pointer"
            >
              <Image
                src="https://allegrocounselling.com/wp-content/uploads/2019/11/allegro2x.png"
                alt="Allegro Counselling Logo"
                width={200}
                height={60}
                className="h-8 sm:h-12 w-auto"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center">
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-600 hover:text-red-600 transition-colors py-2 cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-600 group-hover:text-red-600 transition-colors" />
                  )}
                </div>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => handleLinkClick(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop CTA Button */}
          <Button
            className="hidden sm:flex rounded-full text-white hover:bg-red-700 text-sm px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
            style={{ backgroundColor: "#D95E61" }}
            onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <div className="flex items-center justify-between py-3">
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-600 hover:text-red-600 transition-colors flex-1 text-left"
                  >
                    {item.label}
                  </button>
                  {item.submenu && (
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === item.label ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => handleLinkClick(subItem.href)}
                          className="block w-full text-left py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button
              className="rounded-full text-white hover:bg-red-700 w-full mt-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
              style={{ backgroundColor: "#D95E61" }}
              onClick={() => window.open("https://calendly.com/allegroadmin", "_blank")}
            >
              Book Consultation
            </Button>
          </nav>
        </div>
      </header>
    </>
  )
}
