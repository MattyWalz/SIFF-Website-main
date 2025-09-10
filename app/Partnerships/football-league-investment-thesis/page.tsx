"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, TrendingUp, ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function FootballLeagueInvestmentThesisPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-4 text-[#156BBC] hover:bg-blue-50 cursor-pointer hover:scale-105 transform transition-all duration-200"
            onClick={() => (window.location.href = "/Partnerships")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Partnerships
          </Button>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Matix Capital
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <Card className="border border-blue-100 flex-1">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Team Size</h3>
                <p className="text-gray-600">10 members</p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 flex-1">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Timeline</h3>
                <p className="text-gray-600">June 2025 - Present</p>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 flex-1">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Status</h3>
                <p className="text-gray-600">Ongoing</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif font-bold text-2xl text-gray-900 mb-4">Partnership Overview</h2>
            <p className="text-gray-600 mb-6">
              Developing investment theses for leagues worldwide, conducting financial and strategic analysis across clubs and markets, exploring benchmarks and case studies from completed transactions, and participating in select M&amp;A-related activities form the core of this collaboration. The partnership provides members with direct exposure to the methods and processes used in professional football finance, bridging academic knowledge with real investment practice.
            </p>

            <p className="text-sm text-gray-500 italic mb-6">
              *Details have been kept intentionally vague to protect the confidentiality and proprietary information of
              the firm and project stakeholders.
            </p>

            <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3">Key Working Areas</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>League Investment Thesis</li>
              <li>Financial and Strategic Analysis</li>
              <li>Transaction Benchmarks and Case Studies</li>
              <li>Mergers and Acquisitions Activities</li>
              <li>Revenue and Cost Structures Modelling</li>
            </ul>



            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
