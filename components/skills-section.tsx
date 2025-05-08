"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { skills } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [skillLevels, setSkillLevels] = useState<{ [key: string]: number }>(
    Object.fromEntries(skills.map(skill => [skill.name, 0]))
  )
  const [softSkillLevels, setSoftSkillLevels] = useState<{ [key: string]: number }>(
    {
      "Problem Solving": 0,
      "Communication": 0,
      "Teamwork": 0,
      "Time Management": 0,
      "Adaptability": 0,
      "Creativity": 0
    }
  )
  
  useEffect(() => {
    if (isInView) {
      // Animate technical skills
      const timer = setTimeout(() => {
        skills.forEach(skill => {
          setSkillLevels(prev => ({ ...prev, [skill.name]: skill.level }))
        })
      }, 100)

      // Animate soft skills
      const softTimer = setTimeout(() => {
        setSoftSkillLevels({
          "Problem Solving": 92,
          "Communication": 88,
          "Teamwork": 90,
          "Time Management": 85,
          "Adaptability": 95,
          "Creativity": 88
        })
      }, 100)

      return () => {
        clearTimeout(timer)
        clearTimeout(softTimer)
      }
    }
  }, [isInView])
  
  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              theme === "purple" ? "from-purple-500 to-indigo-500" : "from-primary to-blue-600"
            )}>Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Technologies and tools I've mastered throughout my career
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 relative">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <motion.span 
                      className="text-sm text-foreground/70"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {skillLevels[skill.name]}%
                    </motion.span>
                  </div>
                  <Progress 
                    value={skillLevels[skill.name]} 
                    className={cn(
                      "h-2 transition-all duration-1000 ease-out",
                      theme === "purple" 
                        ? "bg-purple-500/20" 
                        : "bg-primary/20"
                    )}
                    indicatorClassName={cn(
                      "transition-all duration-1000 ease-out",
                      theme === "purple" 
                        ? "bg-gradient-to-r from-purple-600 to-purple-400" 
                        : "bg-gradient-to-r from-primary to-primary/80"
                    )}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Soft Skills & Additional Skills */}
          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Soft Skills</h3>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { name: "Problem Solving", value: 92 },
                  { name: "Communication", value: 88 },
                  { name: "Teamwork", value: 90 },
                  { name: "Time Management", value: 85 },
                  { name: "Adaptability", value: 95 },
                  { name: "Creativity", value: 88 },
                ].map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    <div 
                      className={cn(
                        "w-full h-32 rounded-lg flex flex-col items-center justify-center transition-all",
                        theme === "purple" 
                          ? "bg-purple-500/10 hover:bg-purple-500/15" 
                          : "bg-primary/10 hover:bg-primary/15"
                      )}
                    >
                      <span className="text-lg font-medium">{skill.name}</span>
                      <div className="mt-2 relative w-12 h-12">
                        <svg viewBox="0 0 120 120" className="w-12 h-12 transform -rotate-90">
                          <circle 
                            cx="60" 
                            cy="60" 
                            r="54" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="8" 
                            strokeLinecap="round" 
                            className="text-muted/30" 
                          />
                          <motion.circle 
                            cx="60" 
                            cy="60" 
                            r="54" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="8" 
                            strokeLinecap="round"
                            initial={{ strokeDasharray: "339.292", strokeDashoffset: "339.292" }}
                            animate={isInView ? {
                              strokeDashoffset: 339.292 - (339.292 * softSkillLevels[skill.name]) / 100
                            } : { strokeDashoffset: "339.292" }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className={cn(
                              theme === "purple" ? "text-purple-500" : "text-primary"
                            )} 
                          />
                        </svg>
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center font-semibold text-sm"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                        >
                          {softSkillLevels[skill.name]}%
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Additional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Shadcn",
                  "MUI",
                  "Redux",
                  "Gsap",
                  "Git & Version Control",
                  "UI/UX Design",
                  "Responsive Design",
                  "Web Performance",
                  "Accessibility",
                  "Docker",
                  "CI/CD",
                  "Agile Methodology",
                  "REST APIs",
                  "Postman"

                ].map((skill) => (
                  <div 
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm",
                      theme === "purple" 
                        ? "bg-purple-500/10 text-purple-500 dark:text-purple-400" 
                        : "bg-primary/10 text-primary dark:text"
                    )}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}