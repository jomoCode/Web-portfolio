import { motion } from "framer-motion";
import { Text, Title } from "../text";
import { useTheme } from "@/context/theme_context";

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
  const { theme } = useTheme();

  return (
    <section
      className={`w-full py-16 ${
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <Title text="Work Experience" />

        {/* Experience Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 ${
                theme === "dark"
                  ? "bg-background-dark-2"
                  : "bg-background-light-2"
              }`}
            >
              {/* Company Name */}
              <h3
                className={`text-xl text-left font-semibold mb-3 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-900"
                }`}
              >
                {exp.company}
              </h3>

              {/* Duration */}
              <Text className="text-left">{exp.duration}</Text>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WorkExperience };
