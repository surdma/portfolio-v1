"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"/"}
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)",],
            transition: {
                duration:1,
                repeat: Infinity,
            }
        }}
        className="w-16 h-16 bg-dark flex items-center justify-center rounded-full text-2xl font-bold cursor-pointer"
      >
        <p className="text-2xl font-bold text-light ">DS</p>
      </MotionLink>
    </div>
  );
};

export default Logo;
