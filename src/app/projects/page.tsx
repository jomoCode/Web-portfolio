// 1. CREATE NEW PAGE: app/projects/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ALL_PROJECTS = [
  {
    title: "Propi",
    role: "Fullstack Development",
    desc: "Real estate platform with a heavy focus on dashboard UI and FastAPI integration.",
    link: "https://www.propi.io/",
    tags: ["Next.js", "FastAPI", "Supabase", "Tanstack"],
  },
  {
    title: "Nobzo",
    role: "Mobile & Web Engineer",
    desc: "Implemented social features and streaming components.",
    link: "https://nobzo-website.vercel.app/",
    tags: ["React Native", "Expo", "Express"],
  },
  {
    title: "Studomia",
    role: "Frontend Architecture",
    desc: "Educational platform structured for scalability.",
    link: "https://www.studomia.com/",
    tags: ["Nuxt.js", "NestJS"],
  },
  {
    title: "Life Streak",
    role: "Lead Mobile Developer",
    desc: "A productivity tool built for performance.",
    link: "https://www.palmplaystore.com/detail/com.jomocode.LifeStreak?country=NG",
    tags: ["React Native", "SQLite"],
  },
  {
    title: "Mameds",
    role: "Lead Mobile Developer",
    desc: "Medication Adherance tracking tool.",
    link: "https://appetize.io/app/b_4fjg2udiewvcqdgsa3x2jgk2em",
    tags: ["React Native", "SQLite"],
  },
  {
    title: "Mameds Live",
    role: "Lead Mobile Developer",
    desc: "Medication Adherance tracking tool.",
    link: "https://mameds.gr/",
    tags: ["React", "Tanstack"],
  },

  {
    title: "Product show",
    role: "fullstack developer",
    desc: "Pre-production product management tool.",
    link: "https://testfirebaseproject-47507.web.app/",
    tags: ["Tailwind", "Express"],
  },
  {
    title: "Recommend",
    role: "Frontend mobile engineer",
    desc: "Client-customer connection application",
    link: "https://recommend-fe.netlify.app/",
    tags: ["tailwind", "Express"],
  },
  // Add more here
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-16 font-medium">All Projects</h1>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {ALL_PROJECTS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-medium group-hover:text-[#79a3f6]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-white/30 uppercase mt-1">
                    {proj.role}
                  </p>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="text-white/50 text-sm mb-6">{proj.desc}</p>

              <div className="flex flex-wrap gap-3">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-white/30">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
