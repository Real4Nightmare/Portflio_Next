"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Footer() {
  const { theme } = useTheme()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-4 md:col-span-3 lg:col-span-1">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                DevPortfolio
              </span>
            </Link>
            <p className="text-foreground/70 text-sm max-w-xs">
              A passionate web developer focused on creating engaging, user-friendly experiences with modern technologies.
            </p>
            <div className="flex space-x-4 pt-4">
              {[
                { name: "GitHub", icon: "github" },
                { name: "LinkedIn", icon: "linkedin" },
                { name: "Twitter", icon: "twitter" },
                { name: "Instagram", icon: "instagram" },
              ].map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full transition-all duration-300 h-8 w-8",
                    theme === "purple" 
                      ? "hover:bg-purple-500/10 hover:text-purple-500" 
                      : "hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon === "github" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>}
                  {social.icon === "linkedin" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                  {social.icon === "twitter" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>}
                  {social.icon === "instagram" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Web Development", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/70">
                <span className="block">Babol,Mazandaran,Iran</span>
              </li>
              <li className="text-sm text-foreground/70">
                <span className="block">nima.nozari.nz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon" 
              className={cn(
                "rounded-full transition-all duration-300",
                theme === "purple" 
                  ? "hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-500/50" 
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
              )}
            >
              <ChevronUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}