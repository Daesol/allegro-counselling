"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function BooksSection() {
  const books = [
    {
      id: 1,
      title: "Wired For Love",
      author: "Stan Tatkin",
      image: "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2018/12/book1.png?resize=768%2C767&ssl=1",
      description:
        "Discover how attachment styles shape your relationships and learn practical strategies for building stronger, healthier connections.",
      rating: 4.6,
      price: "$16.99",
      buyLink:
        "https://www.amazon.ca/Wired-Love-Understanding-Attachment-Relationship/dp/1608820580/ref=asc_df_1608820580/?tag=googleshopc0c-20&linkCode=df0&hvadid=292914176058&hvpos=1o1&hvnetw=g&hvrand=5959363823148406096&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001392&hvtargid=pla-435469426768&psc=1",
      category: "Relationships",
    },
    {
      id: 2,
      title: "Love Yourself, Heal Yourself",
      author: "Louise Hay",
      image: "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2018/12/book3.png?resize=768%2C767&ssl=1",
      description:
        "A therapist's honest and humorous look at therapy from both sides of the couch, revealing the healing power of human connection.",
      rating: 4.7,
      price: "$17.99",
      buyLink:
        "https://www.amazon.ca/You-Can-Heal-Your-Life/dp/0937611018/ref=sr_1_1?s=books&ie=UTF8&qid=1545949681&sr=1-1&keywords=louise%2Bl%2Bhay",
      category: "Mental Health",
    },
    {
      id: 3,
      title: "The Body Keeps the Score",
      author: "Bessel van der Kolk",
      image: "https://i0.wp.com/allegrocounselling.com/wp-content/uploads/2018/12/book4.png?resize=768%2C767&ssl=1",
      description:
        "A groundbreaking exploration of how trauma affects the body and brain, offering innovative treatments for recovery and healing.",
      rating: 4.8,
      price: "$18.99",
      buyLink:
        "https://www.amazon.ca/Body-Keeps-Score-Healing-Trauma/dp/0143127748/ref=asc_df_0143127748/?tag=googleshopc0c-20&linkCode=df0&hvadid=309622281255&hvpos=1o2&hvnetw=g&hvrand=15302956431972119438&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001392&hvtargid=pla-434690707169&psc=1",
      category: "Trauma & Recovery",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200/25 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-100/30 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-6 shadow-lg">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Recommended{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Psychology Books
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expand your understanding of mental health and personal growth with these carefully selected books
            recommended by our therapists
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {books.map((book) => (
            <Card
              key={book.id}
              className="bg-white/80 backdrop-blur-sm border border-amber-100 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 hover:scale-105"
            >
              <CardContent className="p-0">
                {/* Book Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={`${book.title} book cover`}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}

                  {/* Rating Badge */}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Author */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">by {book.author}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{book.description}</p>

                  {/* Buy Button */}
                  <div className="flex justify-center pt-4 border-t border-gray-100">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-amber-500/30"
                    >
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <span>Buy Now</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-amber-100">
            <BookOpen className="h-6 w-6 text-amber-600" />
            <span className="text-gray-700 font-medium">
              Looking for more personalized book recommendations? Ask your therapist during your session!
            </span>
          </div>
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
