"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { Title } from "./title";
import { CustomButton } from "./button";

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
    <div>
      <Title text="Contact Me" />
  
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full py-10 rounded-lg shadow-md space-y-4 bg-background-dark-1"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-3"
        />
        <textarea
          name="project"
          placeholder="Tell me about your project..."
          value={form.project}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-3 h-32"
        />
        <CustomButton
          type="submit"
          className=" rounded-full font-semibold transition w-full"
        >
          Send Message
        </CustomButton>
      </form>
      <CustomButton><a href={mailtoLink}>Email Me</a></CustomButton>


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
