"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { CustomButton } from "./button";
import { useTheme } from "@/context/theme_context";
import Heading from "./heading";

interface ContactSectionProps {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
}

export default function ContactSection({
  email,
  github,
  linkedin,
  twitter,
  medium,
}: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const { theme } = useTheme();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, I’ll get back to you soon!`);
    setForm({ name: "", email: "", project: "" });
  };

  const mailtoLink = `mailto:${email}?subject=I need your service&body=Hello, I need your service for...`;

  return (
    <div className="w-full">
      <Heading text="Contact Me"  />

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className={`w-full p-5 rounded-lg shadow-md space-y-4 ${
          theme === "dark" ? "bg-background-dark-2" : "bg-background-light-2"
        }`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className={`w-full placeholder-gray-700 text-xl rounded p-3  ${
            theme === "dark" ? "text-text-text-light" : "text-text-light"
          } `}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className={`w-full placeholder-gray-700 text-xl rounded p-3  ${
            theme === "dark" ? "text-text-text-light" : "text-text-light"
          } `}
        />
        <textarea
          name="project"
          placeholder="Tell me about your project..."
          value={form.project}
          onChange={handleChange}
          required
          className={`w-full placeholder-gray-700 text-xl rounded p-3  ${
            theme === "dark" ? "text-text-text-light" : "text-text-light"
          } `}
        />
        <div className={"px-15"}>
        <CustomButton
          type="submit"
          className={` rounded-full font-semibold transition w-full py-0 mb-2 ${
            theme === "dark" ? "bg-blue-900" : "bg-blue-500"
          }`}
        >
          Send Message
        </CustomButton>
        <CustomButton
          className={` rounded-full font-semibold transition w-full py-0 ${
            theme === "dark" ? "bg-blue-900" : "bg-blue-400"
          }`}
        >
          <a href={mailtoLink}>Email Me</a>
        </CustomButton></div>
      </form>

      <div className="flex justify-center gap-6 text-2xl py-20">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500"
        >
          <FaTwitter />
        </a>
        <a
          href={medium}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          <FaMedium />
        </a>
      </div>
    </div>
  );
}
