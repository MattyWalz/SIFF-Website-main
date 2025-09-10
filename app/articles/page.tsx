"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { useState } from "react"

export default function ArticlesPage() {
  const [showAllArticles, setShowAllArticles] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">Insights from the Field</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest research, analysis, and thought leadership in football finance from our community of
              experts and researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-blue-400">
                <TrendingUp className="h-12 w-12 text-[#156BBC] text-white" />
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-6">Coming Soon</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're working hard to bring you insightful articles and research pieces on football finance. Our team is
                preparing comprehensive analysis and thought leadership content that will be available soon.
              </p>
              <p className="text-gray-500 mb-8">
                Stay tuned for expert insights on transfer markets, Financial Fair Play regulations, stadium economics,
                youth development ROI, and much more.
              </p>
              <Button
                className="bg-[#156BBC] hover:bg-blue-700 text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
                onClick={() => (window.location.href = "mailto:info@siff.org?subject=Article Updates")}
              >
                Get Notified When Articles Are Published
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
