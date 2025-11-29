"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Edge Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10",
                  pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10",
                    pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-gradient-to-r from-primary to-secondary">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
