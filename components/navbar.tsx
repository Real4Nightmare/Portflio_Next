"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { animateNavbar } from "@/lib/animations"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (navRef.current) {
      animateNavbar(navRef.current)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        {
          "bg-background/80 backdrop-blur-md shadow-md": scrolled,
          "bg-transparent": !scrolled,
          "border-b border-border/40": scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter transition-colors"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            DevPortfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <button
              onClick={() => handleNavClick("home")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("skills")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
          <ThemeToggle />
          <Button 
            onClick={() => handleNavClick("contact")}
            variant="default" 
            size="sm"
            className={cn(
              "bg-gradient-to-r",
              theme === "purple" 
                ? "from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800" 
                : "from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            )}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 flex flex-col md:hidden transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex flex-col space-y-4 p-6">
          <button
            onClick={() => handleNavClick("home")}
            className="text-foreground py-3 text-lg font-medium border-b border-border/30"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-foreground py-3 text-lg font-medium border-b border-border/30"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="text-foreground py-3 text-lg font-medium border-b border-border/30"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className="text-foreground py-3 text-lg font-medium border-b border-border/30"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-foreground py-3 text-lg font-medium border-b border-border/30"
          >
            Contact
          </button>
          <Button 
            onClick={() => handleNavClick("contact")}
            variant="default" 
            size="lg"
            className={cn(
              "mt-4 bg-gradient-to-r w-full",
              theme === "purple" 
                ? "from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800" 
                : "from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            )}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  )
}