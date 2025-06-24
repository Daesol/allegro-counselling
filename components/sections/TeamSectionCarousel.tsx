"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import TeamMemberCard from "@/components/TeamMemberCard"
import teamMembersData from "@/data/team-members.json"

export default function TeamSectionCarousel() {
  const teamMembers = teamMembersData

  // Reorder team members to show Sasha Campbell first
  const reorderedTeamMembers = [
    teamMembers.find((member) => member.name === "Sasha Campbell"),
    ...teamMembers.filter((member) => member.name !== "Sasha Campbell"),
  ].filter(Boolean)

  return (
    <section id="team" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expert Team
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced psychologists dedicated to supporting your mental health journey with compassion and expertise
          </p>
        </div>

        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="py-8 px-4">
              {reorderedTeamMembers.map((member, index) => (
                <CarouselItem
                  key={`${member.name}-${index}`}
                  className="sm:basis-4/5 md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
                >
                  <div className="h-full flex justify-center w-full">
                    <TeamMemberCard {...member} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
