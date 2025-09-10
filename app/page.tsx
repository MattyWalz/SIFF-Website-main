"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, NetworkIcon } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "@/components/contact-modal"
import { useState } from "react"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-[#f4f9fe] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
                Connecting <span className="text-[#156BBC]">{"Passion"}</span> with{" "}
                <span className="text-gray-700">Finance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SIFF brings together students passionate about the intersection of football and international finance.
                We research, analyze, and network to shape the future of sports economics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#156BBC] hover:bg-[#0f5aa3] text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Join Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Link href="/about" onClick={handleNavClick}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#156BBC] text-[#156BBC] hover:bg-blue-50 bg-transparent cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-md"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/spectacular-soccer-stadium.jpeg"
                alt="Spectacular packed soccer stadium at golden hour with thousands of fans"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-[#156BBC]" />
                  <span className="font-semibold text-gray-900">First Football Finance Student Association</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A student association dedicated to exploring the world of international football finance, from transfer
              markets to stadium economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#156BBC]">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Global Perspective</h3>
                <p className="text-gray-600">
                  We analyze football finance from an international lens, understanding diverse markets and regulations
                  across continents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#156BBC]">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Collaborative Research</h3>
                <p className="text-gray-600">
                  Our members work together on research projects, combining academic rigor with real-world applications,
                  and strengthening technical skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#156BBC]">
                  <NetworkIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Industry Impact</h3>
                <p className="text-gray-600">
                  We bridge the gap between academic theory and industry practice, preparing students to pursue careers
                  in the football finance world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Explore our latest partnerships and articles</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest Partnership */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-sm text-[#156BBC] font-semibold mb-2">FEATURED PARTNERSHIP</div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3">
                  Matix Capital
                </h3>
                <p className="text-gray-600 mb-4">
                  Brazil's preeminent football M&amp;A firm, behind the transformative Botafogo deal
                </p>
                <Link
                  href="/Partnerships/football-league-investment-thesis"
                  onClick={handleNavClick}
                  className="text-[#156BBC] hover:text-[#0f5aa3] font-semibold cursor-pointer hover:underline transition-all duration-200"
                >
                  View Partnership →
                </Link>
              </CardContent>
            </Card>

            {/* Latest Article */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-sm text-gray-700 font-semibold mb-2">LATEST ARTICLE</div>
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're working on exciting new articles and insights. Stay tuned for our latest research and analysis
                  in football finance.
                </p>
                <Link
                  href="/articles"
                  onClick={handleNavClick}
                  className="text-[#156BBC] hover:text-[#0f5aa3] font-semibold cursor-pointer hover:underline transition-all duration-200"
                >
                  View Articles →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
