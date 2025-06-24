import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart } from "lucide-react"

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Resources & Blog</h2>
          <p className="text-xl text-gray-600">
            Helpful articles and recommended reading for your mental health journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">Latest Articles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-medium text-gray-900">"The Miracle Morning" by Hal Elrod</h4>
                <p className="text-sm text-gray-600">Book Review</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: "#189799" }}>
                <h4 className="font-medium text-gray-900">Navigating the Mental Health Maze</h4>
                <p className="text-sm text-gray-600">Of Motherhood</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#E6F7F7" }}
              >
                <BookOpen className="h-6 w-6" style={{ color: "#189799" }} />
              </div>
              <CardTitle className="text-lg">Recommended Reads</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">Wired for Love</p>
                <p className="text-xs text-gray-600">by Stan Tatkin</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">You Can Heal Your Life</p>
                <p className="text-xs text-gray-600">by Louise Hay</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">The Body Keeps the Score</p>
                <p className="text-xs text-gray-600">by Bessel van der Kolk</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F8E6E7" }}
              >
                <Heart className="h-6 w-6" style={{ color: "#D95E61" }} />
              </div>
              <CardTitle className="text-lg">Mental Health Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                Discover practical strategies for managing stress, anxiety, and improving your overall well-being.
              </p>
              <Button variant="outline" size="sm" className="rounded-full w-full">
                Explore Resources
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
