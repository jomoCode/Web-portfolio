import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectInfoProps {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
}

export const ProjectInfo = ({
  title,
  description,
  tech,
  liveLink,
}: ProjectInfoProps) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Live Project Link */}
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
      >
        View Live Project <FaExternalLinkAlt size={14} />
      </a>
    </div>
  );
};
