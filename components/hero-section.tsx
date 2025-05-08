"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ChevronDown, Code, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { animateHero } from "@/lib/animations"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      animateHero(sectionRef.current)
    }
  }, [])

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      const offsetPosition = aboutSection.offsetTop - 80
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-500/10 dark:bg-blue-700/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Hello, I'm</span>
              <span className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r",
                theme === "purple" 
                  ? "from-purple-500 to-indigo-500" 
                  : "from-primary to-blue-600"
              )}>
                Nima Nozari
              </span>
            </h1>
            
            <h2 className="hero-subheading text-2xl md:text-3xl text-foreground/80 font-medium">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-foreground/70 max-w-xl">
              I craft beautiful, functional websites and applications with modern technologies.
              Specializing in React, Next.js, and creating engaging user experiences.
            </p>
            
            <div className="hero-cta flex flex-wrap gap-4">
              <Button 
                size="lg"
                className={cn(
                  "bg-gradient-to-r",
                  theme === "purple" 
                    ? "from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900" 
                    : "from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                )}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
            </div>
          </div>
          
          {/* Animated illustration/avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-full h-full flex justify-center items-center"
          >
            <div className={cn(
              "relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4",
              theme === "purple" ? "border-purple-500" : "border-primary"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80">
                <Code 
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-20",
                    theme === "purple" ? "text-purple-500" : "text-primary"
                  )} 
                />
              </div>
              <div className={cn(
                "absolute bottom-10 left-1/2 -translate-x-1/ px-6 py-3 rounded-full text-sm font-medium bg-background/90",
                theme === "purple" ? "text-purple-500" : "text-primary"
              )}>
                &lt;code&gt; with passion &lt;/code&gt;
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full opacity-70 hover:opacity-100"
            onClick={handleScrollDown}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}