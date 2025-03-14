"use client";

import { motion } from "framer-motion";
import AnimatedText from "../animated-text";

export default function SkillSection() {
  const myskills = [
    // {
    //   name: "Web",
    //   x: "42.5vw",
    //   y: "0vw",
    // },
    {
      name: "Mobile",
      x: "47vw",
      y: "6vw",
    },

    {
      name: "ReactJS",
      x: "-3vw",
      y: "-12vw",
    },
    {
      name: "NextJS",
      x: "-10vw",
      y: "2vw",
    },
    {
      name: "Django",
      x: "-8vw",
      y: "-19vw",
    },
    {
      name: "FastAPI",
      x: "35vw",
      y: "-2vw",
    },

    {
      name: "Flutter",
      x: "10vw",
      y: "19vw",
    },
    {
      name: "ExpressJS",
      x: "-32vw",
      y: "15vw",
    },
    {
      name: "TailwindCSS",
      x: "-18vw",
      y: "-15vw",
    },
   
  ];
  return (
    <>
      {/* <h2 className="font-bold text-8xl mt-32  w-full text-center"></h2> */}
      <AnimatedText text="Skills" className="mt-12 p-6 !text-3xl md:!text-6xl" />


      <div className="w-full max-h-1/2 md:h-screen relative flex items-center justify-center rounded-full circular-light">
       
      <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-8 py-4 shadow-dark cursor-pointer absolute"
          whileHover={{
            scale: 1.05,
          }}
        >
          Web
        </motion.div>
      
        {myskills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
}

const Skill: React.FC<{ name: string; x: string; y: string }> = ({
  name,
  x,
  y,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-8 py-4 shadow-dark cursor-pointer"
      whileHover={{
        scale: 1.15,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x: x,
        y: y,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  );
};
