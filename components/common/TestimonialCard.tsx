import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  stars?: number
}

export default function TestimonialCard({ quote, author, stars = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 italic mb-4">{quote}</p>
        <div className="text-sm text-gray-500">— {author}</div>
      </CardContent>
    </Card>
  )
}
