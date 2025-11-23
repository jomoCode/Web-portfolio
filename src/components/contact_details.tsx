"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { CustomButton } from "./button";
import { useTheme } from "@/context/theme_context";
import Heading from "./heading";
import emailjs from "emailjs-com";
import { CustomAlert } from "./custom_alert";

interface ContactSectionProps {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
}

const ContactSection = ({
  email,
  github,
  linkedin,
  twitter,
  medium,
}: ContactSectionProps) => {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  // alert state
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.project,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setAlert({
            show: true,
            message: `Thanks ${form.name}, your message has been sent!`,
            type: "success",
          });
          setForm({ name: "", email: "", project: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setAlert({
            show: true,
            message: "Oops! Something went wrong. Please try again.",
            type: "error",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  const mailtoLink = `mailto:${email}?subject=I need your service&body=Hello, I need your service for...`;

  return (
    <div className="w-full relative">
      <Heading text="Contact Me" className="mb-5" />

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
          }`}
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
          }`}
        />
        <textarea
          name="project"
          placeholder="Tell me about your project..."
          value={form.project}
          onChange={handleChange}
          required
          className={`w-full placeholder-gray-700 text-xl rounded p-3  ${
            theme === "dark" ? "text-text-text-light" : "text-text-light"
          }`}
        />
        <div className="md:px-15">
          <CustomButton
            type="submit"
            disabled={loading}
            className={`rounded-full font-semibold transition w-full py-0 mb-2 ${
              theme === "dark" ? "bg-blue-900" : "bg-blue-500"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </CustomButton>
          <CustomButton
            className={`rounded-full font-semibold transition w-full py-0 ${
              theme === "dark" ? "bg-blue-900" : "bg-blue-400"
            }`}
          >
            <a href={mailtoLink}>Email Me</a>
          </CustomButton>
        </div>
      </form>

      {/* Socials */}
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
          href={medium}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          <FaMedium />
        </a>
      </div>

      {/* Custom Alert */}
      <CustomAlert
        show={alert.show}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, show: false })}
      />
    </div>
  );
}


export default ContactSection;