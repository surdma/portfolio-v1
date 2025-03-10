import AnimatedText from "@/components/animated-text";
import PageTransistion from "@/components/page-transistion";
import PageLayout from "@/components/page_layout";

import React from "react";
import SkillSection from "@/components/about/skills-section";
import BioSection from "@/components/about/bio-section";

export default function About() {
  return (
    <>
      <PageTransistion />
      <main className="flex flex-col w-full min-h-screen">
        <PageLayout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="" />

          <BioSection />

          <SkillSection />
        </PageLayout>
      </main>
    </>
  );
}
