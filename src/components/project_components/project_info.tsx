import { FaExternalLinkAlt } from "react-icons/fa";
import { Text, Title } from "../text";

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
      <Title text={title} />
      <Text>{description}</Text>
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
