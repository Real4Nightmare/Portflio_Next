"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Project, projects } from "@/lib/utils"

export default function ProjectsSection() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }
  
  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-24"
    >
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card w-full max-w-4xl rounded-lg shadow-xl overflow-hidden"
          >
            <div className="relative h-64 sm:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <Button 
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-background/50 hover:bg-background/70"
                onClick={() => setSelectedProject(null)}
              >
                <span className="sr-only">Close</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path>
                </svg>
              </Button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <div className="flex space-x-2">
                  {selectedProject.github && (
                    <Button size="icon" variant="outline">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  )}
                  <Button size="icon" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Visit site</span>
                  </Button>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                {selectedProject.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-medium">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button variant="default" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              theme === "purple" ? "from-purple-500 to-indigo-500" : "from-primary to-blue-600"
            )}>Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work, featuring a diverse range of web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              custom={i}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FolderOpen className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 border-t border-border/30 mt-auto">
                  <div className="flex justify-between w-full">
                    {project.github && (
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}