import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingUp, DollarSign, Users, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Declining market share and outdated business model",
      solution: "Strategic restructuring and digital transformation",
      results: [
        { label: "Revenue Growth", value: "45%", icon: TrendingUp },
        { label: "Cost Savings", value: "$12M", icon: DollarSign },
        { label: "New Markets", value: "8", icon: Users },
        { label: "Timeline", value: "18 mo", icon: Clock },
      ],
      description:
        "A comprehensive transformation program that repositioned TechCorp as an industry leader through digital innovation and strategic market expansion.",
      image: "/placeholder.svg?key=hskau",
      tags: ["Digital Transformation", "Strategy", "Operations"],
    },
    {
      company: "Retail Innovations Inc",
      industry: "Retail",
      challenge: "Inefficient operations and high overhead costs",
      solution: "Operations optimization and supply chain redesign",
      results: [
        { label: "Cost Reduction", value: "60%", icon: DollarSign },
        { label: "Efficiency Gain", value: "85%", icon: TrendingUp },
        { label: "Time Saved", value: "40%", icon: Clock },
        { label: "ROI", value: "320%", icon: DollarSign },
      ],
      description:
        "Streamlined operations and supply chain transformation delivered unprecedented efficiency gains and significant cost reductions.",
      image: "/placeholder.svg?key=mn5lt",
      tags: ["Operations", "Supply Chain", "Cost Optimization"],
    },
    {
      company: "FinanceHub Solutions",
      industry: "Finance",
      challenge: "Stagnant growth and poor customer retention",
      solution: "Market positioning strategy and CX redesign",
      results: [
        { label: "Customer Growth", value: "3x", icon: Users },
        { label: "Revenue Increase", value: "120%", icon: TrendingUp },
        { label: "NPS Score", value: "+42", icon: Users },
        { label: "Market Share", value: "+15%", icon: TrendingUp },
      ],
      description:
        "A comprehensive market repositioning and customer experience transformation that tripled the customer base and doubled revenue.",
      image: "/placeholder.svg?key=sidsc",
      tags: ["Strategy", "Customer Experience", "Growth"],
    },
    {
      company: "Global Manufacturing Co",
      industry: "Manufacturing",
      challenge: "Quality issues and production bottlenecks",
      solution: "Lean manufacturing and quality management systems",
      results: [
        { label: "Quality Improvement", value: "95%", icon: TrendingUp },
        { label: "Defect Reduction", value: "78%", icon: TrendingUp },
        { label: "Output Increase", value: "52%", icon: TrendingUp },
        { label: "Downtime Reduction", value: "65%", icon: Clock },
      ],
      description:
        "Implementation of lean methodologies and quality systems transformed production efficiency and product quality.",
      image: "/placeholder.svg?key=m7x4a",
      tags: ["Operations", "Quality Management", "Lean"],
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Slow adoption and regulatory compliance issues",
      solution: "Change management and compliance framework",
      results: [
        { label: "Adoption Rate", value: "92%", icon: Users },
        { label: "Compliance Score", value: "100%", icon: TrendingUp },
        { label: "User Satisfaction", value: "4.8/5", icon: Users },
        { label: "Time to Market", value: "-40%", icon: Clock },
      ],
      description:
        "Comprehensive change management program and regulatory compliance framework enabled rapid adoption and market success.",
      image: "/placeholder.svg?key=pq8ks",
      tags: ["Change Management", "Compliance", "Healthcare"],
    },
    {
      company: "EnergyNext Corporation",
      industry: "Energy",
      challenge: "Legacy systems and slow innovation cycles",
      solution: "Digital transformation and innovation strategy",
      results: [
        { label: "Innovation Speed", value: "5x", icon: Clock },
        { label: "Cost Efficiency", value: "35%", icon: DollarSign },
        { label: "New Products", value: "12", icon: TrendingUp },
        { label: "Market Position", value: "Top 3", icon: TrendingUp },
      ],
      description:
        "Digital transformation and innovation framework accelerated product development and positioned the company as an industry innovator.",
      image: "/placeholder.svg?key=w3rmc",
      tags: ["Digital Transformation", "Innovation", "Technology"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
              Real Results for Real Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Explore how we've partnered with organizations across industries to drive transformative change and
              deliver measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="secondary" className="mb-2">
                      {study.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground">{study.company}</h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Challenge</h4>
                    <p className="text-foreground mb-4">{study.challenge}</p>

                    <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-2">Solution</h4>
                    <p className="text-foreground mb-4">{study.solution}</p>

                    <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex}>
                        <div className="flex items-center space-x-2 mb-1">
                          <result.icon className="h-4 w-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{result.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="link" className="p-0 h-auto text-primary font-medium group-hover:underline">
                    View Full Case Study
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">Impact Across Industries</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "$2.5B", label: "Value Created" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Industries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Let's discuss how Edge Consulting can help you achieve remarkable results and lasting transformation.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
