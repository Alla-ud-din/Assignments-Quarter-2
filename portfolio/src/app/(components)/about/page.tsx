import React from "react";
import aboutimg from "@/assets/About_Image.jpg";
import Image from "next/image";
import Aboutmeitems from "@/app/(components)/about/aboutmeitems";

export default function About() {
  return (
    <section className="">
      <div className="gap-8 m-16 items-center py-8 px-4 sm:py-16 xl:gap-16 lg:px-16 min-h-screen md:grid md:grid-cols-2 ">
        <div className="flex items-center justify-center sm:justify-start sm:items-start h-full">
          <Image
            src={aboutimg}
            width={500}
            height={500}
            alt={"About image"}
            className="mx-auto opacity-60"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-white texxt-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Redux, Next.js, Node.js, 
            HTML, CSS, tailwind and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <Aboutmeitems />
        </div>
      </div>
    </section>
  );
}
