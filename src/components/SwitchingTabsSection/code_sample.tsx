import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Code Samples
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Project Name */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center justify-between">
                {project.name}
                <FaGithub className="text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
