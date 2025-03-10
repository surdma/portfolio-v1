"use client";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// import { useInView, useMotionValue, useSpring } from "framer-motion";



const AchievementText: React.FC<{ stat: number; comment: string }> = ({
    stat,
    comment,
  }) => {
 
  
    return (
      <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-7xl font-bold text-nowrap">
          <AnimatedNumber value={stat} />{`${stat < 9 ? "+" : "%"}`}
        </span>
        <h2 className="text-xl font-medium capitalize text-black/75 text-nowrap">
          {comment}
        </h2>
      </div>
    );
  };
  

export default AchievementText;

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        setDisplayValue(Math.round(latest)); // Update the displayed value
      }
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>; // Render the animated value
};