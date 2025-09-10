import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, TrendingUp, ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // This is a template page - you can edit the content for each specific project
  const projectData = {
    "ffp-impact-assessment": {
      title: "FFP 2.0 Impact Assessment",
      status: "Ongoing",
      statusColor: "bg-blue-100 text-[#156BBC]",
      completion: "Est. completion: June 2024",
      researchers: "8 members",
      description:
        "Analyzing the effects of updated Financial Fair Play regulations on club spending patterns and competitive balance across European leagues.",
      fullDescription:
        "This comprehensive study examines the implementation and impact of UEFA's updated Financial Fair Play regulations. Our research focuses on how these new rules affect club spending behaviors, transfer market dynamics, and competitive balance across Europe's top football leagues.",
      objectives: [
        "Analyze spending pattern changes post-FFP 2.0 implementation",
        "Assess impact on competitive balance across leagues",
        "Evaluate compliance strategies adopted by clubs",
        "Predict long-term effects on European football landscape",
      ],
      methodology:
        "Mixed-methods approach combining quantitative analysis of financial data with qualitative interviews of club executives and regulatory officials.",
      keyFindings: "Research in progress - preliminary findings will be available in Q2 2024.",
    },
    "covid-impact-study": {
      title: "COVID-19 Financial Impact Study",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
      completion: "Published: March 2024",
      researchers: "15 members",
      description:
        "Comprehensive analysis of pandemic effects on football club revenues, player wages, and transfer market dynamics.",
      fullDescription:
        "This extensive research project analyzed the unprecedented financial impact of the COVID-19 pandemic on professional football clubs worldwide. The study covers revenue losses, wage adjustments, transfer market changes, and recovery strategies.",
      objectives: [
        "Quantify revenue losses across different club tiers",
        "Analyze wage adjustment strategies and player contract modifications",
        "Examine transfer market disruptions and adaptations",
        "Identify successful recovery and adaptation strategies",
      ],
      methodology:
        "Comprehensive data analysis of 200+ clubs across 15 leagues, supplemented by surveys and interviews with club executives.",
      keyFindings:
        "Average revenue decline of 23% across studied clubs, with significant variations by league and club size. Transfer market activity decreased by 35% in summer 2020.",
    },
    "womens-football-growth": {
      title: "Women's Football Market Growth",
      status: "Completed",
      statusColor: "bg-green-100 text-green-700",
      completion: "Published: January 2024",
      researchers: "9 members",
      description:
        "Analysis of commercial opportunities and financial growth patterns in women's professional football across major leagues.",
      fullDescription:
        "This research project explores the rapid commercial growth of women's professional football, analyzing investment patterns, sponsorship deals, media rights, and attendance trends across major leagues worldwide.",
      objectives: [
        "Map commercial growth patterns in women's football",
        "Analyze investment opportunities and ROI potential",
        "Study sponsorship and media rights developments",
        "Forecast future growth trajectories",
      ],
      methodology:
        "Longitudinal analysis of financial data from 2018-2023, combined with stakeholder interviews and market research.",
      keyFindings:
        "Women's football commercial value grew by 180% between 2019-2023, with significant investment opportunities identified in emerging markets.",
    },
  }

  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/Partnerships">
<Button className="bg-[#156BBC] hover:bg-blue-700 text-white">Back to Partnerships</Button>
</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/Partnerships"
            className="inline-flex items-center text-[#156BBC] hover:text-blue-700 mb-6 cursor-pointer hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Partnerships
          </Link>

          <div className="text-center">
            <Badge className={`${project.statusColor} mb-4`}>{project.status}</Badge>
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-gray-900 mb-6">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Timeline</h3>
                <p className="text-gray-600">{project.completion}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Team Size</h3>
                <p className="text-gray-600">{project.researchers}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-[#156BBC] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                <p className="text-gray-600">{project.status}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-6">Research Objectives</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#156BBC] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-6">Methodology</h2>
              <p className="text-gray-600 leading-relaxed">{project.methodology}</p>
            </div>

            <div>
              <h2 className="font-serif font-bold text-3xl text-gray-900 mb-6">Key Findings</h2>
              <p className="text-gray-600 leading-relaxed">{project.keyFindings}</p>
            </div>

            {project.status === "Completed" && (
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">Access Full Report</h3>
                <p className="text-gray-600 mb-6">
                  Download the complete research report with detailed findings, methodology, and recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#156BBC] hover:bg-blue-700 text-white cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-lg">
                    Download PDF Report
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#156BBC] text-[#156BBC] hover:bg-blue-50 bg-transparent cursor-pointer hover:scale-105 transform transition-all duration-200 hover:shadow-md"
                  >
                    View Online
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
