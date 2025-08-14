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
import { ThemeToggleButton } from "@/components/theme_toggle_button";
import { Text, ThemedLink, Title } from "@/components/text";
import { useTheme } from "@/context/theme_context";

const links = [
  <ThemedLink href="#">About</ThemedLink>,
  <DropDownPicker title="Work" />,
  <ThemedLink href="#">Services</ThemedLink>,
  <ThemedLink href="#">Testimonials</ThemedLink>,
  <ThemedLink href="#">Experience</ThemedLink>,
  <ThemedLink href="#">Blog</ThemedLink>,
  <ThemedLink href="#">Contact</ThemedLink>,
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
    <span className="m-5" />

    <ul className="text-justify pl-5">
      <li>
        I offer, a tested, working project delivered within the agreed
        timeframe.
      </li>
      <li>
        Adaptable, well-documented code with testing flows for smooth handovers,
        refactors, and updates.
      </li>
      <li>Clear communication and regular updates at every stage.</li>
    </ul>

    <span className="m-5" />
    <Text className="text-justify">
      Simply put: I design, build, and deliver — taking your project from first
      brainstorm to final launch with precision and professionalism.
    </Text>
  </Text>
);

const profileIntroduction = "Hello, I'm Jomo";

const profileSummary =
  "Full-stack mobile and web developer specializing in JavaScript, React, and Python. I build clean, responsive interfaces with a focus on performance, scalability, and exceptional user experiences";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`relative flex flex-col font-sans items-center justify-items-center min-h-screen md:pt-20 pt-10 ${
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1"
      } `}
    >
      <div className="fixed top-8 right-[5]">
        <ThemeToggleButton />
      </div>
      <Header headerContent={links} />

      {/* SUMMARY */}
      <Section name="summary" className="pb-0">
        <SideBySideSection
          left={
            <div className=" p-4 flex flex-col justify-evenly h-full">
              <div className="w-full text-left">
                <Title
                  text={profileIntroduction}
                  className="md:text-left text-center py-2"
                />
                <Text className="md:text-left text-justify mb-10">
                  {profileSummary}
                </Text>
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
                  src="/bright_mode_profile_image.png"
                  alt="profile image of jomoCode"
                  className="w-full max-h-[450px] rounded object-contain"
                />
              )}
            </div>
          }
        />
      </Section>

      {/* ABOUT */}
      <div className="w-full md:h-[500px] h-[1000px] mb-24 relative ">
        <Section
          name="about"
          bg_dark="bg-background-dark-2"
          bg_light="bg-background-light-2"
          className="absolute  top-[-60px] left-0 pt-20 md:px-40 px-10 w-full"
        >
          <Heading text="About" className="text-center" />
          {description()}
        </Section>
      </div>

      {/* SKILLS AND EXPERIENCE */}
      <Section name="skills">
        <SwitchTabs
          tabs={[
            {
              content: <CodeSamples />,
              title: "Code",
            },
            {
              content: <WorkExperience />,
              title: "Experience",
            },
            {
              content: <SkillsSection />,
              title: "Skills",
            },
          ]}
        />
      </Section>
      <Section name="projects">
        <Heading text={"Projects"} />

        {/* PROJECT */}
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
