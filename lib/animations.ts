import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element, delay: number = 0) => {
  return gsap.fromTo(
    element,
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay, 
      ease: "power3.out" 
    }
  );
};

export const staggerFadeInUp = (elements: NodeListOf<Element> | Element[], staggerTime: number = 0.1) => {
  return gsap.fromTo(
    elements,
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      stagger: staggerTime, 
      ease: "power3.out" 
    }
  );
};

export const revealFromLeft = (element: Element) => {
  return gsap.fromTo(
    element,
    { 
      x: -100, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power3.out" 
    }
  );
};

export const revealFromRight = (element: Element) => {
  return gsap.fromTo(
    element,
    { 
      x: 100, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "power3.out" 
    }
  );
};

export const createScrollAnimation = (element: Element, animation: gsap.core.Tween) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top 80%",
    animation: animation,
    toggleActions: "play none none none",
  });
};

export const createSectionScrollAnimation = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element) => {
    createScrollAnimation(
      element,
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
    );
  });
};

export const animateHero = (heroSection: Element) => {
  const timeline = gsap.timeline();
  
  const heading = heroSection.querySelector('.hero-heading');
  const subheading = heroSection.querySelector('.hero-subheading');
  const cta = heroSection.querySelector('.hero-cta');
  
  if (heading && subheading && cta) {
    timeline
      .fromTo(heading, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .fromTo(subheading, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(cta, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
  }
  
  return timeline;
};

export const animateNavbar = (navbar: Element) => {
  return gsap.fromTo(
    navbar,
    { y: -100 },
    { y: 0, duration: 0.8, ease: "power3.out" }
  );
};

export const animateSplitText = (element: Element) => {
  // Split text animation (simplified without a plugin)
  const text = element.textContent || "";
  const characters = text.split("");
  
  // Clear the element
  element.textContent = "";
  
  // Create spans for each character
  characters.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    element.appendChild(span);
  });
  
  // Animate each character
  const spans = element.querySelectorAll("span");
  return gsap.fromTo(
    spans,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: "power3.out" }
  );
};