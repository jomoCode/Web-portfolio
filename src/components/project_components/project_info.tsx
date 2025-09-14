import { Text } from "../text";
import { CustomButton } from "../button";
import { useTheme } from "@/context/theme_context";
import clxs from "clsx";

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
  const { theme } = useTheme();
  return (
    <div className={clxs( theme==='dark'? "bg-blue-500/10 md:bg-background-dark-1": 'bg-blue-500/10 md:bg-background-light-1', " p-2 md:p-0")}>
      <Text className="text-center py-2">{title}</Text>
      <Text className="text-left py-2">{description}</Text>
      <div className="flex flex-wrap gap-2 my-6">
        {tech.map((item) => (
          <span
            key={item}
            className={`px-2 py-2 text-sm rounded-full ${
              theme === "dark"
                ? "bg-background-dark-2"
                : "bg-background-light-2"
            }  ${
              theme === "dark" ? "text-text-dark" : "text-text-light"
            } text-center`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Live Project Link */}
      <CustomButton onClick={() => window.open(liveLink, "_blank")}>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Project
        </a>
      </CustomButton>
    </div>
  );
};
