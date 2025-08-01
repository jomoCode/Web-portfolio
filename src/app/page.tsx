import { DropDownPicker } from "@/components/drop_down_picker";
import { Header } from "@/components/header";
import Heading from "@/components/heading";
import ProjectItem from "@/components/projectItem";
import Image from "next/image";
import Link from "next/link";
const links = [
  <Link href={"#"}>About</Link>,
  <DropDownPicker title="Work" />,
  <Link href={"#"}>Services</Link>,
  <Link href={"#"}>Testimonials</Link>,
  <Link href={"#"}>Experience</Link>,
  <Link href={"#"}>Blog</Link>,
  <Link href={"#"}>Contact</Link>,
];

const description =
  "  Discover my Freelance React Developer Portfolio, showcasing projects for companies worldwide where I’ve built high-performance web applications, interactive marketing websites, and dynamic data visualizations. Specializing in React, Next.js, and Node.js, I focus on creating seamless user experiences and robust, scalable solutions.";

export default function Home() {
  return (
    <div className="flex flex-col font-sans items-center justify-items-center min-h-screen">
      <Header headerContent={links} />
      <section
        id="projects"
        className="flex flex-col items-center justify-center text-center"
      >
        <Heading text={"Projects"} />
        <p className="max-w-2xl text-left py-5">
          Discover my Freelance React Developer Portfolio, showcasing projects
          for companies worldwide where I’ve built high-performance web
          applications, interactive marketing websites, and dynamic data
          visualizations. Specializing in React, Next.js, and Node.js, I focus
          on creating seamless user experiences and robust, scalable solutions.
        </p>

        <ProjectItem />
      </section>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-gray-800">
        {/* HEADER */}
        <div></div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
