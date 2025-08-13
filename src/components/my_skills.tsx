import { motion } from "framer-motion";
import { Title } from "./text";
import { useTheme } from "@/context/theme_context";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Django",
  "Firebase",
  "Supabase",
  "Bootstrap",
  "Git & GitHub",
  "Expo",
  "Node.js",
];

export default function SkillsSection() {
  const { theme } = useTheme();
  return (
    <section
      className={`w-full py-16 ${
        theme === "dark" ? "bg-background-dark-1" : " bg-background-light-1"
      }  `}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <Title text="My Skills" />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`flex items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm ${
                theme === "dark"
                  ? "bg-background-dark-2 hover:shadow-md"
                  : " bg-background-light-2 hover:shadow-gray-700"
              }  transition-all duration-300`}
            >
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
