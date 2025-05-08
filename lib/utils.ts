import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
};

export type Skill = {
  name: string;
  icon: string;
  level: number;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, Prisma, and Stripe integration for payments.",
    image:
      "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
    link: "https://example.com/project1",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "AI Image Generator",
    description:
      "An AI-powered image generation app using OpenAI's DALL-E API with a custom user interface.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "OpenAI API", "Canvas"],
    link: "https://example.com/project2",
    github: "https://github.com/yourusername/ai-image-generator",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with websockets, user authentication, and message history.",
    image:
      "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    link: "https://example.com/project3",
    github: "https://github.com/yourusername/chat-app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A custom portfolio website with animations, theme switching, and responsive design.",
    image:
      "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/project4",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 5,
    title: "Task Management System",
    description:
      "A comprehensive task management system with team collaboration features and real-time updates.",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    link: "https://example.com/project5",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "A weather dashboard with location detection, forecasts, and historical weather data visualization.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "Weather API", "Recharts"],
    link: "https://example.com/project6",
    github: "https://github.com/yourusername/weather-dashboard",
  },
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 90,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 95,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 92,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 88,
  },

  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 75,
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    level: 70,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    level: 100,
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    level: 100,
  },
  {
    name: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    level: 100,
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    level: 95,
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    level: 75,
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "instagram",
  },
];
