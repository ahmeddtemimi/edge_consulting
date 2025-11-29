import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  Target,
  Zap,
  Users,
  Globe,
  Award,
  BarChart3,
  Shield,
  Layers,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategy Consulting",
      description:
        "Develop winning strategies that position your business for long-term success in competitive markets.",
      benefits: [
        "Market analysis and competitive positioning",
        "Business model innovation",
        "Growth strategy development",
        "Strategic planning and execution",
        "Risk assessment and mitigation",
      ],
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape with confidence through innovative technology solutions and strategic digital initiatives.",
      benefits: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Cloud migration strategies",
        "Digital customer experience design",
        "Innovation lab setup",
      ],
    },
    {
      icon: Target,
      title: "Operations Excellence",
      description:
        "Optimize processes and workflows to enhance efficiency, reduce costs, and improve overall operational performance.",
      benefits: [
        "Process optimization and automation",
        "Supply chain transformation",
        "Lean methodology implementation",
        "Quality management systems",
        "Performance measurement frameworks",
      ],
    },
    {
      icon: Zap,
      title: "Change Management",
      description:
        "Lead organizational change with proven methodologies that ensure smooth transitions and stakeholder buy-in.",
      benefits: [
        "Change readiness assessment",
        "Stakeholder engagement strategies",
        "Communication planning",
        "Training and development programs",
        "Post-implementation support",
      ],
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Build high-performing teams and cultivate leadership capabilities at every level of your organization.",
      benefits: [
        "Executive coaching programs",
        "Leadership assessment tools",
        "Succession planning",
        "Team building workshops",
        "Organizational culture development",
      ],
    },
    {
      icon: Award,
      title: "Performance Analytics",
      description:
        "Leverage data-driven insights to measure success, identify opportunities, and optimize business outcomes.",
      benefits: [
        "KPI framework design",
        "Business intelligence implementation",
        "Predictive analytics models",
        "Dashboard and reporting tools",
        "Data governance strategies",
      ],
    },
    {
      icon: BarChart3,
      title: "Financial Advisory",
      description:
        "Strategic financial planning and analysis to improve profitability, manage risk, and drive sustainable growth.",
      benefits: [
        "Financial modeling and forecasting",
        "Cost optimization strategies",
        "Investment analysis",
        "Budgeting and planning",
        "M&A advisory services",
      ],
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Identify, assess, and mitigate business risks to protect your organization and ensure long-term resilience.",
      benefits: [
        "Enterprise risk assessment",
        "Compliance and regulatory advisory",
        "Business continuity planning",
        "Cybersecurity strategy",
        "Crisis management protocols",
      ],
    },
    {
      icon: Layers,
      title: "Organizational Design",
      description:
        "Restructure and redesign your organization to improve agility, efficiency, and employee engagement.",
      benefits: [
        "Organizational structure optimization",
        "Role and responsibility mapping",
        "Workforce planning",
        "Talent management strategies",
        "Cultural transformation initiatives",
      ],
    },
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description:
        "Foster a culture of innovation and develop frameworks to identify, evaluate, and implement new ideas.",
      benefits: [
        "Innovation capability assessment",
        "Ideation and design thinking workshops",
        "Innovation portfolio management",
        "Pilot program design",
        "Scalability planning",
      ],
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
              Comprehensive Solutions for Every Challenge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              From strategy to execution, we deliver end-to-end consulting services that transform businesses and drive
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8 lg:p-10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase mb-4">Key Offerings</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Our Proven Consulting Process</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              A structured approach that ensures successful outcomes and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "In-depth analysis of your business, challenges, and objectives to establish a solid foundation.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop tailored solutions and actionable roadmaps aligned with your strategic goals.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execute strategies with hands-on support and change management to ensure smooth transitions.",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Monitor results, measure impact, and continuously improve to maximize long-term value.",
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Let's Build Your Success Story</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Schedule a consultation to discuss how our services can address your unique business challenges and drive
              measurable results.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base group">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
