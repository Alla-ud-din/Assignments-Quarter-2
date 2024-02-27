"use client";
import Link from "next/link";
import Image from "next/image";
import Animation from "@/app/(components)/hero/animation";
import heroimg from "../../../assets/dp.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 m-12 pt-6 md:pt-32 min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text">
            Hello, I'm <br />
            <Animation />
          </h1>
          <p className="text-gray-400 my-6 sm:text-lg lg:text-xl">
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
            <Link
              href="/contacts"
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-11 py-3 rounded-full "
            >
              Hire Me
            </Link>
            <Link
              href="./AllaUdDin_(Resume)_.pdf"
              className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-3  text-white rounded-full"
            >
              <span className=" bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="justify-center rounded-full bg-[#181818] w-52 h-52 sm:w-80 sm:h-80 sm:pt-9 pt-3 mx-auto sm:grid sm:col-span-4"
        >
          <Image
            src={heroimg}
            alt={"hero image"}
            width={300}
            height={300}
            className=""
          />
        </motion.div>
      </div>
    </section>
  );
}
