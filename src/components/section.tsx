import { useTheme } from "@/context/theme_context";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import clxs from "clsx";

const SectionStyles = cva("py-10 w-[80%] px-0 md:px-10", {
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
  bg_dark?: string;
  bg_light?: string;
  className?: string;
} & VariantProps<typeof SectionStyles>;

const Section = ({
  children,
  name,
  variant,
  bg_dark,
  bg_light,
  className,
}: SectionProps) => {
  const { theme } = useTheme();
  return (
    <section
      aria-label={`${name} section`}
      id={name}
      className={clxs(
        SectionStyles({ variant: variant }),
        theme === "dark"
          ? bg_dark ?? "bg-background-dark-1"
          : bg_light ?? "bg-background-light-1",
        className
      )}
    >
      {children}
    </section>
  );
};

export { Section };
