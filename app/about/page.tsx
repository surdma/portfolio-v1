import AnimatedText from "@/components/animated-text";
import PageTransistion from "@/components/page-transistion";
import PageLayout from "@/components/page_layout";

import React from "react";
import SkillSection from "@/components/about/skills-section";
import BioSection from "@/components/about/bio-section";
import AboutSection from "@/components/about/about-section";

export default function About() {
  return (
    <>
      <PageTransistion />
      <main className="flex flex-col w-full min-h-screen mb-32" >
        <PageLayout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="p-6 !text-3xl md:!text-6xl" />

          <BioSection />

          <SkillSection />
          <AboutSection section={"Experience"} details={experiences} />
          <AboutSection section={"Education"} details={educationHistory} />
        </PageLayout>
      </main>
    </>
  );
}

const experiences = [
  {
    position: "Software Engineer",
    company: "Google",
    companyLink: "#",
    duration: "2022-Present",
    address: "Mountain View, CA.",
    work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
  },
  {
    position: "Intern",
    company: "Facebook",
    companyLink: "#",
    duration: "Summer 2021",
    address: "Menlo Park, CA.",
    work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
  },
  {
    position: "Software Developer",
    company: "Amazon",
    companyLink: "#",
    duration: "2020-2021",
    address: "Seattle, WA",
    work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
  },
  {
    position: "Software Developer Intern",
    company: "Microsoft",
    companyLink: "#",
    duration: "Summer 2019",
    address: "Redmond, WA",
    work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
  },
  {
    position: "Teaching Assistant",
    company: "MIT",
    companyLink: "#",
    duration: "Fall 2018",
    address: "Massachusetts Ave, Cambridge, MA.",
    work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
  },
];

const educationHistory = [
  {
    position: "Federal University Of Technology",
    companyLink: "#",
    duration: "2029-Present",
    address: "Minna Niger, Nigeria",
    work: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
  },
  {
    position: "Alsion Foundation",
    companyLink: "#",
    duration: "Summer 2021",
    address: "Menlo Park, CA.",
    work: "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
  },
  {
    position: "Alsion Foundation",
    companyLink: "#",
    duration: "Summer 2021",
    address: "Menlo Park, CA.",
    work: "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
  },
];
