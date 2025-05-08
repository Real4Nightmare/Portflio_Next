"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { motion, useInView } from "framer-motion"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function ContactSection() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  const infoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
  
  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r",
              theme === "purple" ? "from-purple-500 to-indigo-500" : "from-primary to-blue-600"
            )}>Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-card p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-background border-border/50 focus-visible:ring-1 focus-visible:ring-offset-1"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-background border-border/50 focus-visible:ring-1 focus-visible:ring-offset-1"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Project Inquiry" 
                  className="bg-background border-border/50 focus-visible:ring-1 focus-visible:ring-offset-1"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here...      <its Fake It Doesnt Work=>Gmail Me:)>"
                  rows={5}
                  className="bg-background border-border/50 resize-none focus-visible:ring-1 focus-visible:ring-offset-1"
                />
              </div>
              
              <Button 
                type="submit" 
                className={cn(
                  "w-full sm:w-auto transition-all duration-300",
                  theme === "purple" 
                    ? "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900" 
                    : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                )}
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "p-3 rounded-full mt-1",
                  theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                )}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-foreground/70">
                    Babol<br />
                    Mazandaran<br />
                    Iran
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={cn(
                  "p-3 rounded-full mt-1",
                  theme === "purple" ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"
                )}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-foreground/70">
                    nima.nozari.nz@gmail.com<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold text-lg mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", icon: "github" },
                  { name: "LinkedIn", icon: "linkedin" },
                  { name: "Twitter", icon: "twitter" },
                  { name: "Instagram", icon: "instagram" },
                ].map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className={cn(
                      "rounded-full transition-all duration-300",
                      theme === "purple" 
                        ? "hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-500/50" 
                        : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    )}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon === "github" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>}
                    {social.icon === "linkedin" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                    {social.icon === "twitter" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>}
                    {social.icon === "instagram" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}