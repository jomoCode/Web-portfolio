"use client";
import ContactSection from "@/components/contact_details";
import { DropDownPicker } from "@/components/drop_down_picker";
import Heading from "@/components/heading";
import { ProjectInfo } from "@/components/project_components/project_info";
import { ProjectImage } from "@/components/project_components/projectImage";
import { Section } from "@/components/section";
import SideBySideSection from "@/components/side_by_side_section";
import { ThemeToggleButton } from "@/components/theme_toggle_button";
import { Text, TextContainer, ThemedLink, Title } from "@/components/text";
import { useTheme } from "@/context/theme_context";
import CodeSample from "@/components/CodeSample";

const links = [
  <ThemedLink key="about" href="about">
    About
  </ThemedLink>,
  <DropDownPicker key="work" title="Work" />,
  <ThemedLink key="services" href="services">
    Services
  </ThemedLink>,
  <ThemedLink key="testimonials" href="#">
    Testimonials
  </ThemedLink>,
  <ThemedLink key="experience" href="#">
    Experience
  </ThemedLink>,
  <ThemedLink key="blog" href="#">
    Blog
  </ThemedLink>,
  <ThemedLink key="contact" href="#">
    Contact
  </ThemedLink>,
];

const descriptionDesktop = () => (
  <span>
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
    <TextContainer>
      <ul className="text-justify pl-5">
        <li>
          <Text>
            - I offer, a tested, working project delivered within the agreed
            timeframe.
          </Text>
        </li>
        <li>
          <Text>
            - Adaptable, well-documented code with testing flows for smooth
            handovers, refactors, and updates
          </Text>
        </li>
        <li>
          <Text>- Clear communication and regular updates at every stage</Text>
        </li>
      </ul>
    </TextContainer>
    <span className="m-5" />
    <Text className="text-justify">
      Simply put: I design, build, and deliver — taking your project from first
      brainstorm to final launch with precision and professionalism.
    </Text>
  </span>
);

const descriptionMobile = () => (
  <span>
    <Text className="text-left">
      I’m JomoCode — a full-stack web and mobile developer.
    </Text>
    <Text className="text-left">
      With 2+ years of experience, I specialize in building responsive,
      scalable, and modern applications that deliver seamless user experiences.
    </Text>
    <Text className="text-left">
      I’m passionate about turning ideas into functional solutions that help
      businesses and individuals succeed.
    </Text>
  </span>
);

const profileIntroduction = "Hello, I'm Jomo";

const profileSummary =
  "Full-stack mobile and web developer specializing in JavaScript, React, and Python. I build clean, responsive interfaces with a focus on performance, scalability, and exceptional user experiences";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`relative flex flex-col font-sans items-center justify-items-center min-h-screen min-w-xs md:pt-10 pt-10 ${
        theme === "dark" ? "bg-background-dark-1" : "bg-background-light-1"
      } `}
    >
      <div className="fixed top-8 right-[5]">
        <ThemeToggleButton />
      </div>
      {/* <Header headerContent={links} /> */}

      {/* SUMMARY */}
      <Section name="summary" className="pb-0">
        <SideBySideSection
          left={
            <div className="h-full">
              {/* // Desktop view. Todo: make desktop view into a component */}
              <div className=" p-4 hidden md:flex flex-col justify-center items-center lg:h-[450px] max-w-lg">
                <div className="text-left">
                  <Title
                    text={profileIntroduction}
                    className="md:text-left text-center text-sm py-2"
                  />
                  <Text className="md:text-left text-justify mb-10">
                    {profileSummary}
                  </Text>
                </div>

                {/* <CustomButton>Find Out More</CustomButton> */}
              </div>

              {/* // Mobile view: */}
              <div>
                <Heading
                  text={"Mogbolu John"}
                  className="md:hidden text-left"
                />
                <Title
                  text="Mobile and web developer"
                  className="md:hidden text-left"
                />
              </div>
            </div>
          }
          right={
            <div className=" flex flex-col px-4  mt-auto w-fit">
              {theme === "dark" ? (
                <img
                  src="/dark_mode_profile_image.png"
                  alt="Profile image of JomoCode"
                  className="w-fit max-h-[450px] rounded object-contain mt-auto"
                />
              ) : (
                <img
                  src="/bright_mode_profile_image.png"
                  alt="profile image of jomoCode"
                  className="w-fit max-h-[450px] rounded object-contain mt-auto"
                />
              )}
            </div>
          }
        />
      </Section>

      {/* ABOUT */}
      <div className="w-full md:mb-10">
        <Section
          name="about"
          bg_dark="bg-background-dark-2"
          bg_light="bg-background-light-2"
          className="pt-20 md:px-40 px-10 w-full"
        >
          <Heading text="About me" className="text-center py-5 px-2" />
          <div className="hidden md:block ">{descriptionDesktop()}</div>
          <div className="md:hidden">{descriptionMobile()}</div>
        </Section>
      </div>

      {/* SKILLS AND EXPERIENCE */}

      <Section
        name="Skill"
        className="flex flex-col gap-2 w-full px-5 md:mb-20"
      >
        <Title text="Code Samples" className="text-center" />

        <CodeSample
          title="Task Tracker"
          description="Tracks Adherance to tasks. includes local file storage, local notifications, and calendar integration"
          tech={["React Native", "TypeScript", "Bugsnag", "Expo"]}
        />

        <CodeSample
          title="Portfolio Website"
          description="That's this website"
          tech={["React", "TypeScript", "Tailwind"]}
        />
        <CodeSample
          title="Ecommerce Website"
          description="A mobile ecommerce app for selling used items. Includes authentication, image uploads, notifications, and error tracking."
          tech={["Javascript", "Html", "Css"]}
        />
        <Heading text={"Projects"} className="mt-20 mb-5" />

        {/* PROJECT */}
        <SideBySideSection
          containerClassNames="mb-5"
          left={<ProjectImage src="/fashionshop.png" alt="Ecommerce Website" />}
          right={
            <ProjectInfo
              title="Fashion shop"
              description="A fully responsive online store with product listings, cart functionality, checkout, and an admin dashboard."
              tech={["Html", "CSS", "javascript"]}
              liveLink="https://jomocode.github.io/FashionShop/"
            />
          }
        />
        <SideBySideSection
          containerClassNames="mb-5"
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
          containerClassNames="mb-5"
          left={<ProjectImage src="/propi.png" alt="Realtor Website" />}
          right={
            <ProjectInfo
              title="Propi"
              description="Find trusted conveyancers near you by location, rating, and service type.
Responsive design, secure checkout, and an admin dashboard to manage listings and transactions."
              tech={["Next.js", "Tailwind CSS", "supabase", "fastapi"]}
              liveLink="https://propi-production.up.railway.app/"
            />
          }
        />
      </Section>

      <Section name="contact">
        <ContactSection
          email="johnjohananmogbolu@gmail.com"
          github="https://github.com/Jomocode"
          linkedin="https://www.linkedin.com/in/mogbolu-johnjohanan/"
          twitter="https://twitter.com/yourhandle"
          medium="https://medium.com/@johnjohananmogbolu"
        />
      </Section>
    </div>
  );
};
export default Home;
