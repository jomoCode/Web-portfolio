// components/CodeSamples.tsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Text, Title } from "../text";
import { useTheme } from "@/context/theme_context";

const projects = [
  {
    name: "Done With It",
    tech: ["React Native", "Expo", "Firebase", "Bugsnag"],
    description:
      "A mobile ecommerce app for selling used items. Includes authentication, image uploads, notifications, and error tracking.",
    github: "https://github.com/Jomoartz/done-with-it",
  },
  {
    name: "Ecommerce Website",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A responsive online store with product listings, cart, checkout, and admin dashboard.",
    github: "https://github.com/Jomoartz/ecommerce",
  },
  {
    name: "Portfolio Website",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "My personal portfolio showcasing my projects, skills, and experience.",
    github: "https://github.com/Jomoartz/web-portfolio",
  },
];

export default function CodeSamples() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full py-16 ${
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <Title text="Code Samples" />

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {projects.map((project, index) => (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`block p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group ${
                theme === "dark"
                  ? "border-gray-700 bg-background-dark-2"
                  : "border-gray-200 bg-background-light-2"
              }`}
            >
              {/* Project Name */}
              <h3
                className={`text-xl font-semibold mb-3 flex items-center justify-between ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                {project.name}
                <FaGithub
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-black"
                  }`}
                />
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm rounded-full ${
                      theme === "dark"
                        ? "bg-background-dark-1 text-gray-200"
                        : "bg-background-light-1 text-gray-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <Text className="text-left">{project.description}</Text>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
