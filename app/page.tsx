import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Users,
  Globe,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-gradient font-semibold">Strategic Business Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              Transform Your Business with <span className="text-gradient">Expert Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              We deliver innovative strategies and actionable insights that drive measurable growth and lasting
              competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="text-base group bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-2 border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/20">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-gradient">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Comprehensive Solutions for <span className="text-gradient">Modern Challenges</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Our expert team delivers tailored strategies that align with your business objectives and drive
              sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Strategy Consulting",
                description:
                  "Develop winning strategies that position your business for long-term success in competitive markets.",
                color: "from-primary/10 to-primary/5",
                iconBg: "bg-primary",
                iconColor: "text-primary-foreground",
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                description: "Navigate the digital landscape with confidence through innovative technology solutions.",
                color: "from-secondary/10 to-secondary/5",
                iconBg: "bg-secondary",
                iconColor: "text-secondary-foreground",
              },
              {
                icon: Target,
                title: "Operations Excellence",
                description: "Optimize processes and workflows to enhance efficiency and reduce operational costs.",
                color: "from-accent/10 to-accent/5",
                iconBg: "bg-accent",
                iconColor: "text-accent-foreground",
              },
              {
                icon: Zap,
                title: "Change Management",
                description: "Lead organizational change with proven methodologies that ensure smooth transitions.",
                color: "from-highlight/10 to-highlight/5",
                iconBg: "bg-highlight",
                iconColor: "text-highlight-foreground",
              },
              {
                icon: Users,
                title: "Leadership Development",
                description: "Build high-performing teams and cultivate leadership capabilities at every level.",
                color: "from-chart-5/10 to-chart-5/5",
                iconBg: "bg-[var(--chart-5)]",
                iconColor: "text-white",
              },
              {
                icon: Award,
                title: "Performance Analytics",
                description: "Leverage data-driven insights to measure success and optimize business outcomes.",
                color: "from-chart-3/10 to-chart-3/5",
                iconBg: "bg-[var(--chart-3)]",
                iconColor: "text-white",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br ${service.color} backdrop-blur-sm overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl -z-10" />
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-medium text-sm group-hover:underline"
                  >
                    Learn More
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Proven Results That <span className="text-gradient">Speak Volumes</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Explore how we've helped businesses across industries achieve remarkable transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                company: "TechCorp Global",
                industry: "Technology",
                result: "45% Revenue Growth",
                description:
                  "Strategic restructuring and digital transformation led to unprecedented market expansion.",
                image: "/modern-office-tech.png",
                gradient: "from-primary/80 to-secondary/80",
              },
              {
                company: "Retail Innovations Inc",
                industry: "Retail",
                result: "60% Cost Reduction",
                description: "Operations optimization and supply chain redesign delivered massive efficiency gains.",
                image: "/modern-retail-store.png",
                gradient: "from-accent/80 to-chart-3/80",
              },
              {
                company: "FinanceHub Solutions",
                industry: "Finance",
                result: "3x Customer Base",
                description: "Market positioning strategy and customer experience redesign drove exponential growth.",
                image: "/finance-business-professional.jpg",
                gradient: "from-highlight/80 to-chart-4/80",
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-primary/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.company}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${study.gradient} opacity-60 group-hover:opacity-50 transition-opacity`}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full mb-3">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                  <div className="text-2xl font-bold text-gradient mb-3">{study.result}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{study.description}</p>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center text-primary font-medium text-sm group-hover:underline"
                  >
                    Read Case Study
                    <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50"
            >
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/professional-business-team-meeting.png"
                alt="Edge Consulting Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
                Empowering Businesses to Reach Their Full Potential
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Edge Consulting, we believe every organization has untapped potential waiting to be unlocked. Our
                mission is to partner with forward-thinking leaders to identify opportunities, overcome challenges, and
                build sustainable competitive advantages.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience across diverse industries, we bring a unique blend of strategic
                thinking, operational expertise, and hands-on implementation that transforms vision into reality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Client-Centric Approach", "Data-Driven Insights", "Proven Methodologies", "Measurable Results"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ),
                )}
              </div>

              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Seasoned professionals with diverse expertise and a shared passion for driving business excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sarah Mitchell",
                role: "Managing Partner",
                image: "/professional-business-woman.png",
              },
              {
                name: "Michael Chen",
                role: "Strategy Director",
                image: "/professional-businessman.png",
              },
              {
                name: "Emily Rodriguez",
                role: "Operations Lead",
                image: "/professional-woman-executive.png",
              },
              {
                name: "David Thompson",
                role: "Technology Advisor",
                image: "/professional-tech-executive.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8 text-pretty leading-relaxed">
              Let's discuss how Edge Consulting can help you achieve your strategic goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base shadow-xl hover:scale-105 transition-transform"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-xl hover:scale-105 transition-all"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
