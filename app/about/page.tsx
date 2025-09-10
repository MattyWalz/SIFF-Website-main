import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Award, Lightbulb, Handshake } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SIFF - Students for International Football Finance",
  description: "Learn about SIFF - Students for International Football Finance. Discover our story, mission, vision, and values in the football finance world.",
  keywords: "Students for International Football Finance, SIFF, football finance, student association, Bocconi University, financial fair play, transfer market economics",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-4">About SIFF</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our journey and mission in the football finance world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-white leading-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Our Story</h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p className="font-normal">
                Founded in 2025 by a group of passionate Bocconi University students, SIFF emerged from a simple
                observation: the world of football finance was rapidly evolving, but academic resources and student
                communities focused on this intersection did not exist.
              </p>
              <p>
                What started as informal discussions about transfer market economics and Financial Fair Play regulations
                has grown into a thriving international network of students dedicated to building expertise in the
                industry through active working partnerships with leading firms.
              </p>
              <p>
                Currently representing 25 members, we plan to expand across Europe and the United States to create an
                international student-led association engaging in partnerships at the highest level and preparing the
                next generation of football finance professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#156BBC] rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To bridge the gap between academic theory and industry practice as the first student led football
                  finance association world wide, empowering students with the knowledge, skills, and network needed to
                  drive innovation in the sports economy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#156BBC] rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading global platform for student-driven research and education in football finance,
                  shaping the future of sports economics through innovative thinking and collaborative excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#156BBC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our research and activities with the highest ethical standards, ensuring transparency and
                  honesty in all our endeavors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#156BBC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of collective intelligence, fostering partnerships between students,
                  academics, and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#156BBC] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new ideas and methodologies, pushing the boundaries of traditional sports finance analysis
                  and education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
