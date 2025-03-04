"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  MoonIcon,
} from "@/components/svgs";
import { motion } from "framer-motion";

const navs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Articles",
    link: "/articles",
  },
];

const socials = [
  {
    icon: TwitterIcon,
    link: "www.x.com/surdma",
  },

  {
    icon: LinkedInIcon,
    link: "www.linkedln.com/in/surdma",
  },
  {
    icon: GithubIcon,
    link: "www.github.com/surdma",
  },
  {
    icon: PinterestIcon,
    link: "www.instagram.com/surdma",
  },
  {
    icon: DribbbleIcon,
    link: "www.instagram.com/surdma",
  },
  {
    icon: MoonIcon,
  
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="hidden md:flex  gap-4">
        {navs.map((nav, index) => (
          <Link
            key={index}
            href={nav.link}
            className="flex flex-col w-full group"
          >
            {nav.title}
            <span
              className={`h-1 inline-block bg-black group-hover:w-full transition-[width] ease duration-300 ${
                pathName === nav.link ? "w-full" : "w-0"
              }`}
            >
              &nbsp;
            </span>
          </Link>
        ))}
      </nav>



      {/* <Logo /> */}

      <nav className="hidden md:flex items-center justify-center flex-wrap gap-1">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            className="px-2 h-10 w-10"
            whileHover={{
              y: -2
            }}
            whileTap={{
              scale:0.9,
            }}
          >
            <social.icon className="h-6 w-6" />
          </motion.a>
        ))}
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
