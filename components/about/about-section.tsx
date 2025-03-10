"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

type DetailsProps = {
  position: string;
  company?: string;
  companyLink: string;
  duration: string;
  address: string;
  work: string;
};

const AboutSection: React.FC<{ section: string; details: DetailsProps[] }> = ({
  section,
  details,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mt-32  w-full text-center mb-6">
        {section}
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute bg-dark w-[4px] h-full left-9 top-0 origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {details.map((d, index) => (
            <Details key={index} detail={d} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;

const Details: React.FC<{ detail: DetailsProps }> = ({ detail }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl ">
          {detail.position}&nbsp;
          {detail.company && (
            <a
              href={detail.companyLink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{detail.company}
            </a>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {detail.duration} | {detail.address}
        </span>

        <p className="font-medium w-full">{detail.work}</p>
      </motion.div>
    </li>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LiIcon: React.FC<{ ref: any }> = ({ ref }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light"
          strokeWidth="5" // Use strokeWidth instead of className
          stroke="currentColor" // Ensure stroke color is visible
          fill="none"
          style={{
            pathLength: scrollYProgress,

            transformOrigin: "75px 50px", // Match cx, cy for rotation
          }}
        />
        {/* Inner circle */}
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};
