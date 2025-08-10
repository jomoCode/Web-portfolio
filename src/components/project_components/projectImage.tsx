// components/ProjectImage.tsx
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
