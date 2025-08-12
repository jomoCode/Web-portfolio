"use client";
import { CustomButton } from "@/components/button";
import ContactSection from "@/components/contact_details";
import { DropDownPicker } from "@/components/drop_down_picker";
import { Header } from "@/components/header";
import Heading from "@/components/heading";
import SkillsSection from "@/components/my_skills";
import { ProjectInfo } from "@/components/project_components/project_info";
import { ProjectImage } from "@/components/project_components/projectImage";
import { Section } from "@/components/section";
import SideBySideSection from "@/components/side_by_side_section";
import { SwitchTabs } from "@/components/switch_tabs";
import CodeSamples from "@/components/SwitchingTabsSection/code_sample";
import { WorkExperience } from "@/components/SwitchingTabsSection/work_experience";
import { Text, Title } from "@/components/title";
import { useTheme } from "@/context/theme_context";

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

const description = () => (
  <Text>
    <Text className="text-justify">
      I’m JomoCode — a full-stack web and mobile developer.
    </Text>

    <Text className="text-justify">
      I specialize in crafting responsive front-ends and robust back-end
      systems. I’ve delivered ecommerce platforms, mobile applications,
      content-driven websites, and real-time notification systems — all with
      clean, maintainable code optimized for performance.
    </Text>

    <Text className="text-justify">
      From planning to deployment, I keep clients fully in the loop with
      organized workflows in Trello, Slack, GitHub, and Confluence, ensuring
      progress is transparent and collaboration is seamless.
    </Text>

    <Text>I Offer</Text>

    <ul>
      <li>A tested, working project delivered within the agreed timeframe.</li>
      <li>
        Adaptable, well-documented code with testing flows for smooth handovers,
        refactors, and updates.
      </li>
      <li>Clear communication and regular updates at every stage.</li>
    </ul>

    <Text>
      Simply put: I design, build, and deliver — taking your project from first
      brainstorm to final launch with precision and professionalism.
    </Text>
  </Text>
);

const profileIntroduction = "Hello, I'm Jomo";

const profileSummary =
  "Full-stack mobile and web developer specializing in JavaScript, React, and Python. I build clean, responsive interfaces with a focus on performance, scalability, and exceptional user experiences";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`flex flex-col font-sans items-center justify-items-center min-h-screen pt-20 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } `}
    >
      <Header headerContent={links} />
      <Section name="summary">
        <SideBySideSection
          left={
            <div className=" p-4 flex flex-col justify-evenly h-full ">
              <div>
                <Title text={profileIntroduction} className="text-left p-0" />
                <p className="text-2xl text-left py-3">{profileSummary}</p>
              </div>

              <CustomButton>Find Out More</CustomButton>
            </div>
          }
          right={
            <div className=" p-4">
              {theme === "dark" ? (
                <img
                  src="/dark_mode_profile_Image.png"
                  alt="Profile image of JomoCode"
                  className="w-full max-h-[450px] rounded object-contain"
                />
              ) : (
                <img
                  src="/public/bright_mode_profile_Image.png"
                  alt="profile image of jomoCode"
                  className="w-full max-h-[450px] rounded object-contain"
                />
              )}
            </div>
          }
        />
      </Section>
      <Section name="about">
        <Heading text="About" className="text-center" />
        <Text className="text-xl text-left px:10 lg:px-20 ">
          {description()}
        </Text>
      </Section>

      <Section name="skills">
        <SwitchTabs
          tabs={[
            {
              content: <SkillsSection />,
              title: "Skills",
            },
            {
              content: <CodeSamples />,
              title: "Code Samples",
            },
            {
              content: <WorkExperience />,
              title: "Experience",
            },
          ]}
        />
      </Section>
      <Section name="projects">
        <Heading text={"Projects"} />

        <SideBySideSection
          left={<ProjectImage src="/ecommerce.webp" alt="Ecommerce Website" />}
          right={
            <ProjectInfo
              title="Ecommerce Website"
              description="A fully responsive online store with product listings, cart functionality, checkout, and an admin dashboard."
              tech={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
              liveLink="https://myprojectlive.com"
            />
          }
        />
      </Section>

      <Section name="contact">
        <ContactSection
          email="johnjohananmogbolu@gmail.com"
          github="https://github.com/Jomoartz"
          linkedin="https://www.linkedin.com/in/mogbolu-johnjohanan/"
          twitter="https://twitter.com/yourhandle"
          medium="https://medium.com/@yourhandle"
        />
      </Section>
    </div>
  );
};
export default Home;
