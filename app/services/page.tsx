import { Heart, Brain, Users, Sparkles, Puzzle, Frown } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Our Services - Allegro Counselling",
  description:
    "Comprehensive mental health services including relationship counselling, trauma therapy, anxiety support, and more in Edmonton.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Relationship Counselling",
      description: "Strengthen connections, improve communication, and resolve conflicts in all types of relationships",
      icon: Heart,
      iconColor: "#D95E61",
      iconBg: "#F8E6E7",
      href: "/services/relationship-counselling",
      image:
        "https://images.unsplash.com/photo-1735571548003-4f84697e7b61?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Trauma Counselling",
      description:
        "Healing from past trauma through evidence-based approaches including EMDR and trauma-informed therapy",
      icon: Sparkles,
      iconColor: "#7e22ce",
      iconBg: "#f3e8ff",
      href: "/services/trauma-counselling",
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Anxiety Support",
      description:
        "Effective strategies to manage anxiety, panic, and worry through evidence-based therapeutic approaches",
      icon: Users,
      iconColor: "#189799",
      iconBg: "#E6F7F7",
      href: "/services/anxiety-support",
      image:
        "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
    {
      title: "Depression Support",
      description: "Compassionate care for managing depression, finding meaning, and rebuilding motivation and joy",
      icon: Frown,
      iconColor: "#f59e0b",
      iconBg: "#fef3c7",
      href: "/services/depression-support",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
    {
      title: "ADHD Diagnosis and Support",
      description:
        "Comprehensive assessment and personalized strategies for managing ADHD symptoms and enhancing focus",
      icon: Brain,
      iconColor: "#16a34a",
      iconBg: "#dcfce7",
      href: "/services/adhd-support",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
    {
      title: "Autism Diagnosis and Support",
      description: "Specialized assessment and supportive therapy for individuals on the autism spectrum",
      icon: Puzzle,
      iconColor: "#6366f1",
      iconBg: "#e0e7ff",
      href: "/services/autism-support",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health services tailored to your unique needs and healing journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="group cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105">
                  <CardContent className="p-0">
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                      {/* Service Icon */}
                      <div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: service.iconBg }}
                      >
                        <service.icon className="h-6 w-6" style={{ color: service.iconColor }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                      <div className="mt-4 flex items-center text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors duration-300">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
