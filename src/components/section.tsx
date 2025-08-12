import { useTheme } from "@/context/theme_context";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const SectionStyles = cva("py-10 w-full px-10", {
  variants: {
    variant: {
      default: "",
      col: "flex flex-col items-center justify-center text-center",
    },
  },
  defaultVariants: {
    variant: "col",
  },
});

type SectionProps = {
  children: ReactNode;
  name: string;
} & VariantProps<typeof SectionStyles>;

const Section = ({ children, name, variant }: SectionProps) => {
  const { theme } = useTheme();
  return (
    <section
      aria-label={`${name} section`}
      id="section"
      className={`${SectionStyles({ variant: variant })} ${
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1"
      }`}
    >
      {children}
    </section>
  );
};

export { Section };
