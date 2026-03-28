"use client";

import React from 'react';
import { motion } from "motion/react"
import { 
  ExternalLink, 
  Smartphone, 
  Code2,
  Rocket, 
  Heart, 
  Mail, 
  Layers,
  Sparkles
} from 'lucide-react';

import { FaGithub, FaLinkedin } from "react-icons/fa"

const PROJECTS = [
  { 
    title: "Propi", 
    desc: "Built a real estate platform using Next.js and FastAPI, focusing on dashboard UI, data handling, and API integration.", 
    link: "https://www.propi.io/", 
    tags: ["Nextjs", "Tanstack", "FastAPI", "Supabase", "OpenAI"] 
  },
  { 
    title: "Nobzo", 
    desc: "Worked on web and mobile features for a social media and streaming platform using React Native and backend services.", 
    link: "https://nobzo-website.vercel.app/", 
    tags: ["React Native", "Expo", "Render", "Express"] 
  },
  { 
    title: "Product Showcase", 
    desc: "Built a platform for showcasing applications with dynamic data handling and Firebase integration.", 
    link: "https://testfirebaseproject-47507.web.app/", 
    tags: ["Nextjs", "Firebase", "Tanstack"] 
  },
  { 
    title: "Studomia", 
    desc: "Learning platform built with Nuxt.js and NestJS where I handled frontend structure and API integration.", 
    link: "https://appetize.io/app/b_4fjg2udiewvcqdgsa3x2jgk2em", 
    tags: ["Nuxt.js", "NestJS", "Tailwind"] 
  },
  { 
    title: "Life Streak", 
    desc: "Mobile habit tracking app implementing streak logic, local storage (SQLite), and user-focused UX.", 
    link: "https://appetize.io/app/b_7b5nkkffajaqno7jbb56aeek3a", 
    tags: ["React Native", "UX Design", "SQLite"] 
  },
  { 
    title: "Mameds", 
    desc: "Web app built with Next.js and Firebase featuring real-time data handling and interactive UI.", 
    link: "https://mameds.gr/", 
    tags: ["Next.js", "Firebase", "Motion"] 
  }
];

const EXPERIENCE = [
  { company: "Nobzo", role: "Frontend Engineer", date: "Mar 2026 - Present" },
  { company: "Recommend", role: "Frontend Engineer", date: "Feb 2026 - Present" },
  { company: "Ekohacks", role: "Fullstack Engineer (Mobile & Web)", date: "Jul 2024 - Mar 2026" },
];

const SKILLS = [
  "TypeScript", "Python", "React Native", "Next.js", 
  "Nuxt.js", "FastAPI", "NestJS",
  "Firebase", "Supabase",
  "Tailwind CSS", "Framer Motion"
];

const DEFAULT_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: DEFAULT_EASE }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#101828] text-[#f5f5f5] font-aldrich overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#c0d5ff]/5 blur-[120px]" 
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#79a3f6]/10 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-[#79a3f6]">JOMO.dev</span>
          <div className="flex gap-6 text-sm text-[#9cbdff]">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-40 pb-20 text-center">
        <div className="bg-[#c0d5ff] text-[#1e2939] px-6 py-1.5 rounded-full text-xs font-bold mb-6 inline-block">
          SHIPPING REAL-WORLD WEB & MOBILE APPLICATIONS
        </div>

        <h1 className="text-4xl md:text-8xl font-bold mb-6">
          John-Johanan <br />
          <span className="text-[#79a3f6]">Mogbolu</span>
        </h1>


        <p className="text-sm text-[#9cbdff]/60 mb-4">
          2+ years experience building and shipping production applications
        </p>

        <p className="max-w-2xl mx-auto text-[#9cbdff]/80 mb-12">
          Fullstack & mobile engineer focused on building production-ready applications.  
          Experienced in React, React Native, and backend systems — delivering real features used by real users.
        </p>

        <div className="flex justify-center gap-4">
          <a href="mailto:johnjohananmogbolu@gmail.com" className="px-6 py-3 bg-[#79a3f6] text-[#1e2939] rounded-xl flex items-center gap-2">
            <Mail size={18}/> Contact
          </a>
          <a href="https://github.com/jomoCode"><FaGithub size={22}/></a>
          <a href="https://www.linkedin.com/in/mogbolu-johnjohanan"><FaLinkedin size={22}/></a>
        </div>
      </section>

      {/* Experience + Skills */}
      <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Layers /> Experience
          </h2>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="p-6 bg-[#1e2939]/40 rounded-xl mb-4">
              <h3 className="font-bold">{exp.company}</h3>
              <p className="text-sm text-[#9cbdff]/60">{exp.role}</p>
              <span className="text-xs text-[#79a3f6]">{exp.date}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Sparkles /> Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => (
              <span key={skill} className="px-4 py-2 bg-[#1e2939]/60 rounded-lg text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Rocket /> Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-8 bg-[#1e2939]/40 rounded-2xl relative">
              
              <div className="mb-4">
                {proj.tags.includes("React Native") ? <Smartphone /> : <Code2 />}
              </div>

              <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
              <p className="text-[#9cbdff]/70 mb-6">{proj.desc}</p>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#79a3f6]/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={proj.link} className="absolute inset-0" target="_blank"/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-[#9cbdff]/70 mb-8">
          Open to opportunities and collaborations on real-world products.
        </p>

        <a href="mailto:johnjohananmogbolu@gmail.com" className="px-8 py-4 bg-[#79a3f6] text-[#1e2939] rounded-xl">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-[#9cbdff]/40">
        Built by Mogbolu John-Johanan © 2026
      </footer>

    </div>
  );
}