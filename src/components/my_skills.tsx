// components/SkillsSection.tsx
import { motion } from "framer-motion";

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
  return (
    <section className="w-full py-16 light:bg-white bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center light:text-gray-900text-white mb-12">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-gray-50 dark:bg-gray-800 hover:shadow-md dark:hover:shadow-gray-700 transition-all duration-300"
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
