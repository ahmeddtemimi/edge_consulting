import Link from "next/link"
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-semibold">Edge Consulting</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transforming businesses through strategic insights and innovative solutions.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Strategy Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Operations Excellence
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Change Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Business Ave
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">hello@edgeconsulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80 text-sm">
          <p>&copy; {currentYear} Edge Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
