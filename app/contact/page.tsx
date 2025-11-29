"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will be in touch soon.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Contact our team to schedule a consultation and discover how we can help
              you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and one of our consultants will reach out to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strategy">Strategy Consulting</SelectItem>
                      <SelectItem value="digital">Digital Transformation</SelectItem>
                      <SelectItem value="operations">Operations Excellence</SelectItem>
                      <SelectItem value="change">Change Management</SelectItem>
                      <SelectItem value="leadership">Leadership Development</SelectItem>
                      <SelectItem value="analytics">Performance Analytics</SelectItem>
                      <SelectItem value="financial">Financial Advisory</SelectItem>
                      <SelectItem value="risk">Risk Management</SelectItem>
                      <SelectItem value="organizational">Organizational Design</SelectItem>
                      <SelectItem value="innovation">Innovation Strategy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer to reach out directly? Use any of the methods below to connect with our team.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Office Location</h3>
                        <p className="text-muted-foreground">
                          123 Business Avenue
                          <br />
                          Suite 500
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground mb-1">hello@edgeconsulting.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Visit Our Office</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653674939895!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What industries do you serve?",
                  answer:
                    "We work with organizations across 15+ industries including technology, finance, healthcare, retail, manufacturing, and energy. Our consultants bring deep industry expertise and cross-sector insights.",
                },
                {
                  question: "How long does a typical consulting engagement last?",
                  answer:
                    "Engagement duration varies based on project scope and complexity. Most projects range from 3-18 months. We work with you to establish clear timelines and milestones during the discovery phase.",
                },
                {
                  question: "Do you work with startups or only large enterprises?",
                  answer:
                    "We partner with organizations of all sizes, from high-growth startups to Fortune 500 companies. Our approach is tailored to your specific needs, resources, and growth stage.",
                },
                {
                  question: "What makes Edge Consulting different?",
                  answer:
                    "Our unique combination of strategic thinking, hands-on implementation support, and measurable results sets us apart. We don't just provide recommendations—we partner with you through execution.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
