"use client";

import Link from "next/link";
import { LinkArrow } from "../svgs";
// import { Modal } from "flowbite";


export default function HeroButton() {
  // const ml = new Modal({
  //   options: {}
  // });
  
  return (
    <div className="flex gap-2 items-center self-start">
      <Link
       target="_blank"
        href={"https://app.enhancv.com/share/ef6f5cb7/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"}
        className="bg-teal-950 p-2.5 px-6 rounded-lg text-lg text-white font-semibold flex justify-center gap-2.5 items-center border-2 border-solid border-transparent group"
      >
        <p className="text-white">Resume</p>
        <LinkArrow className="ml-2 text-white" />
      </Link>
      <button
       onClick={() => {
        // ml.toggle();
       }}
        className="font-bold  flex flex-col justify-center items-center group"
      >
       Contact
        <span className="h-1 inline-block w-0 bg-black group-hover:w-full transition-[width] ease-in-out duration-300">
          &nbsp;
        </span>
      </button>
    </div>
  );
}
