// components/WorkExperience.tsx
import { motion } from "framer-motion";
import { Text, Title } from "../text";

const experiences = [
  {
    company: "Ekohacks",
    tech: ["React Native", "Expo", "Firebase", "Node.js"],
    duration: "Jan 2023 – Dec 2023",
  },
  {
    company: "Bincom ICT",
    tech: ["Python", "Django", "Bootstrap", "PostgreSQL"],
    duration: "Feb 2022 – Nov 2022",
  },
  {
    company: "Freelance",
    tech: ["HTML", "CSS", "JavaScript", "Next.js", "Supabase"],
    duration: "2021 – Present",
  },
];

const WorkExperience = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <Title text="Work Experience" />

        {/* Experience Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Company Name */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {exp.company}
              </h3>

              {/* Duration */}
              <Text>{exp.duration}</Text>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { WorkExperience };
