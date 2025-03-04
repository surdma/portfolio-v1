"use client";

import BulbImage from "@/public/images/svgs/miscellaneous_icons_1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

export default function HeroBulb() {
  return (
    <MotionImage
      src={BulbImage}
      alt="bulb Image"
      className="hidden md:block h-52 w-52 absolute md:left-[85%] md:translate-y-[80%]"
      whileHover={{
        scaleX: .5,
        scaleY: .5
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    />
  );
}
