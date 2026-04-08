"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Propi",
    role: "Fullstack Development",
    desc: "Real estate platform with a heavy focus on dashboard UI and FastAPI integration. Handled complex data states and Supabase auth flows.",
    link: "https://www.propi.io/",
    tags: ["Next.js", "FastAPI", "Supabase", "Tanstack"],
  },
  {
    title: "Nobzo",
    role: "Mobile & Web Engineer",
    desc: "Implemented social features and streaming components. Developed cross-platform interfaces using React Native/Expo and Express.",
    link: "https://nobzo-website.vercel.app/",
    tags: ["React Native", "Expo", "Express", "Render"],
  },
  {
    title: "Studomia",
    role: "Frontend Architecture",
    desc: "Educational platform structured for scalability. Focused on the Nuxt.js frontend architecture and seamless NestJS API consumption.",
    link: "https://appetize.io/app/b_4fjg2udiewvcqdgsa3x2jgk2em",
    tags: ["Nuxt.js", "NestJS", "Tailwind"],
  },
  {
    title: "Life Streak",
    role: "Lead Mobile Developer",
    desc: "A productivity tool built for performance. Managed local persistence with SQLite and designed a gesture-based habit tracking UX.",
    link: "https://appetize.io/app/b_7b5nkkffajaqno7jbb56aeek3a",
    tags: ["React Native", "SQLite", "UX Design"],
  },
];

const EXPERIENCE = [
  {
    company: "Nobzo",
    role: "Frontend Engineer",
    date: "2026 — Present",
    description:
      "Building scalable web and mobile interfaces for social interaction.",
  },
  {
    company: "Recommend",
    role: "Frontend Engineer",
    date: "2026 — Present",
    description:
      "Developing modern web applications with a focus on component design.",
  },
  {
    company: "Ekohacks",
    role: "Fullstack Engineer",
    date: "2024 — 2026",
    description:
      "Shipped production-level mobile and web apps using the React/Vue ecosystem.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#79a3f6]/30 selection:text-white">
      {/* Header - Simple & Clean */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase font-medium">
          <span className="text-[#79a3f6]">M. John-Johanan</span>
          <div className="flex gap-8">
            <a href="/projects" className="hover:text-[#79a3f6] transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-[#79a3f6] transition-colors">
              About
            </a>
            <a
              href="mailto:johnjohananmogbolu@gmail.com"
              className="hover:text-[#79a3f6] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32">
        {/* Hero - Content Focused */}
        <section className="py-20 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Fullstack & Mobile Engineer building{" "}
              <span className="text-[#79a3f6]">production-ready</span> digital
              products.
            </h1>
            <p className="max-w-2xl text-lg text-white/50 leading-relaxed mb-10">
              With 2+ years of experience, I specialize in bridging the gap
              between complex backend systems and intuitive user interfaces.
              Currently engineering at <span className="text-white">Nobzo</span>
              .
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/jomoCode"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mogbolu-johnjohanan"
                className="text-white/40 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-xs uppercase tracking-widest text-white/40">
                Lagos, Nigeria
              </span>
            </div>
          </motion.div>
        </section>

        {/* Experience - Styled like a Resume */}
        <section id="about" className="py-24 border-b border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#79a3f6] font-bold">
              Experience
            </h2>
            <div className="md:col-span-2 space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <span className="text-xs font-mono text-white/30">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-[#79a3f6] text-sm">{exp.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work / Projects - No Cards, just clean typography and layout */}
        <section id="work" className="py-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#79a3f6] font-bold mb-16">
            Selected Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
            {PROJECTS.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-medium group-hover:text-[#79a3f6] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/30 uppercase tracking-wider mt-1">
                      {proj.role}
                    </p>
                  </div>
                  <a
                    href={proj.link}
                    target="_blank"
                    className="p-2 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-white/30 tracking-tighter uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          {/* SEE MORE BUTTON */}
          <div className="mt-20 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/40 hover:text-[#79a3f6] transition"
            >
              See More Projects
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        {/* Minimal Contact Footer */}
        <section
          id="contact"
          className="py-32 border-t border-white/5 text-center"
        >
          <h2 className="text-3xl font-medium mb-6">
            Let&lsquo;s discuss your next project.
          </h2>
          <p className="text-white/40 mb-10 max-w-sm mx-auto">
            I&lsquo;m currently looking for full-time opportunities or
            high-impact freelance roles.
          </p>
          <a
            href="mailto:johnjohananmogbolu@gmail.com"
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#79a3f6] hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Email Me
          </a>
        </section>

        <footer className="py-12 flex justify-between items-center border-t border-white/5 text-[10px] uppercase tracking-widest text-white/20 font-medium">
          <span>&copy; 2026 J. Mogbolu</span>
          <span>Built with Next.js & Tailwind</span>
        </footer>
      </main>
    </div>
  );
}
