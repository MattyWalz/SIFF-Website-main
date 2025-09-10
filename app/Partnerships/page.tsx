"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, TrendingUp, ExternalLink } from "lucide-react"

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-4">Our Partnerships</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real working partnerships with industry leaders
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Active Partnerships */}
          <div className="mb-12">
            <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-6">Active Partnerships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <h4 className="font-serif font-semibold text-lg text-gray-900 mb-2">Matix Capital</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Brazil's preeminent football M&amp;A firm, behind the transformative Botafogo deal
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">10 members</span>
                                      <Button
                    size="sm"
                    className="bg-[#156BBC] hover:bg-blue-700 text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
                    onClick={() => (window.location.href = "/Partnerships/football-league-investment-thesis")}
                  >
                    View Details
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upcoming Partnerships */}
          <div>
            <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-6">Upcoming Partnerships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <h4 className="font-serif font-semibold text-lg text-gray-900 mb-2">Standard Football</h4>
                  <p className="text-gray-600 text-sm mb-3">Transforming football decisions through data-driven player valuations, salary insights, and transfer simulations.</p>
                  <div className="flex items-center justify-between">
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <h4 className="font-serif font-semibold text-lg text-gray-900 mb-2">Stryde</h4>
                  <p className="text-gray-600 text-sm mb-3">Democratizing access to equity in clubs, enabling fans and investors alike to participate in the growth of the game.</p>
                  <div className="flex items-center justify-between">
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
