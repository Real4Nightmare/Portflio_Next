"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { createSectionScrollAnimation } from "@/lib/animations"

// Lazy load components
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false })
const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
const AboutSection = dynamic(() => import("@/components/about-section"), { ssr: false })
const ProjectsSection = dynamic(() => import("@/components/projects-section"), { ssr: false })
const SkillsSection = dynamic(() => import("@/components/skills-section"), { ssr: false })
const ContactSection = dynamic(() => import("@/components/contact-section"), { ssr: false })
const Footer = dynamic(() => import("@/components/footer"), { ssr: false })
export const runtime='edge';
export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
    
    // Initialize animations
    createSectionScrollAnimation('.animate-on-scroll')
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}