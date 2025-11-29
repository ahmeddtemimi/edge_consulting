import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield, Users, Award, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by the tangible impact we create for our clients.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency form the foundation of every client relationship.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work side-by-side with clients as true partners in transformation.",
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "We pursue the highest standards in everything we deliver.",
    },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Managing Partner",
      bio: "Former McKinsey consultant with 20+ years leading strategic transformations for Fortune 500 companies.",
      image: "/placeholder.svg?key=gk5wd",
    },
    {
      name: "Michael Chen",
      role: "Strategy Director",
      bio: "Technology and innovation expert specializing in digital transformation and business model innovation.",
      image: "/placeholder.svg?key=a8f84",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Lead",
      bio: "Lean Six Sigma Master Black Belt with expertise in process optimization and supply chain excellence.",
      image: "/placeholder.svg?key=14m8x",
    },
    {
      name: "David Thompson",
      role: "Technology Advisor",
      bio: "Former CTO with deep experience in enterprise architecture and technology strategy.",
      image: "/placeholder.svg?key=vbr9h",
    },
    {
      name: "Jennifer Park",
      role: "Change Management Director",
      bio: "Organizational psychologist specializing in leadership development and cultural transformation.",
      image: "/placeholder.svg?key=pk29f",
    },
    {
      name: "Robert Martinez",
      role: "Financial Advisory Partner",
      bio: "Former investment banker bringing expertise in M&A, financial modeling, and value creation.",
      image: "/placeholder.svg?key=qw74m",
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
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
              Transforming Businesses Through Strategic Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Since 2009, Edge Consulting has been partnering with forward-thinking organizations to unlock their full
              potential and achieve lasting success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?key=134bl" alt="Edge Consulting Team" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower organizations with strategic insights, innovative solutions, and hands-on support that drives
                sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every business has untapped potential. Our mission is to partner with leaders who are
                ready to challenge the status quo and create lasting impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To be the most trusted consulting partner for organizations seeking transformative change and measurable
                results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where businesses leverage strategic insights and innovative thinking to create
                value for all stakeholders while building sustainable, resilient organizations.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image src="/placeholder.svg?key=m8x2k" alt="Strategic Vision" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              The principles that guide our work and define our commitment to clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-balance">
              A Track Record of Excellence
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, value: "500+", label: "Projects Completed" },
                { icon: Users, value: "250+", label: "Clients Served" },
                { icon: TrendingUp, value: "$2.5B", label: "Value Created" },
                { icon: Globe, value: "15+", label: "Industries" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Seasoned professionals with diverse expertise and a shared commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Let's Create Impact Together</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Ready to unlock your organization's full potential? Connect with us to explore how we can help.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
