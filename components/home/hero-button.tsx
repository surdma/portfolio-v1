import Link from "next/link";
import { LinkArrow } from "../svgs";

export default function HeroButton() {
  return (
    <div className="flex gap-2 items-center self-start">
      <Link
       
        href={"/"}
        className="bg-teal-950 p-2.5 px-6 rounded-lg text-lg text-white font-semibold flex justify-center gap-2.5 items-center border-2 border-solid border-transparent group"
      >
        <p className="text-white">Resume</p>
        <LinkArrow className="ml-2 text-white" />
      </Link>
      <Link
       
        href={"/"}
        className="font-bold  flex flex-col justify-center items-center group"
      >
       Contact
        <span className="h-1 inline-block w-0 bg-black group-hover:w-full transition-[width] ease-in-out duration-300">
          &nbsp;
        </span>
      </Link>
    </div>
  );
}
