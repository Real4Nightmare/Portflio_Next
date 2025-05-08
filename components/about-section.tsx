"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import { User, Calendar, MapPin, Mail, Award, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  }
  
  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              theme === "purple" ? "from-purple-500 to-indigo-500" : "from-primary to-blue-600"
            )}>Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate web developer with a focus on creating stunning, functional web experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={0}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Personal Info</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                  )}>
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Name</p>
                    <p className="font-medium">Nima Nozari</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                  )}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email</p>
                    <p className="font-medium word-wrap">nima.nozari.nz@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                  )}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Location</p>
                    <p className="font-medium">Babol,Mazandaran,Iran</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                  )}>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Experience</p>
                    <p className="font-medium">1+ Years</p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
            
            <p className="text-lg text-foreground/80 mt-6">
              I'm a creative problem-solver who loves turning ideas into reality through code. I specialize in building fast, responsive, and user-friendly web applications.
            </p>
          </motion.div>
          
          {/* Experience */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            custom={1}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
            
            <div className="space-y-6">
              <Card className="relative overflow-hidden">
                <div className={cn(
                  "absolute left-0 top-0 h-full w-1",
                  theme === "purple" ? "bg-purple-500" : "bg-primary"
                )} />
                <CardContent className="p-6 pl-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-lg">Jonior Frontend Developer</h4>
                      <p className="text-foreground/70">Ecode Team</p>
                    </div>
                    <div className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      theme === "purple" 
                        ? "bg-purple-500/10 text-purple-500" 
                        : "bg-primary/10 text-primary"
                    )}>
                      2025 - Present
                    </div>
                  </div>
                  <p className="mt-3 text-foreground/70">
                    Remote Front-End Developer 
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}