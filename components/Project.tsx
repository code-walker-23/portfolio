"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
// writing type for extra clarity
import type { ProjectProps } from "@/lib/types";

function Project({
  title,
  description,
  tags,
  imageUrl,
  liveLink = "",
  githubLink = "",
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        {/* Mobile version */}
        <div className="block sm:hidden p-4">
          <h3 className="text-xl font-semibold flex items-center">
            {title}
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:scale-110 hover:scale-110 active:scale-105 
          hover:text-gray-950 transition ml-3 dark:text-white/60 hover:dark:text-white/90"
            >
              <div className="flex mr-1">
                <FaGithub />
              </div>
            </Link>
            <Link
              href={liveLink}
              rel="noopener noreferrer"
              className="focus:scale-110 hover:scale-110 active:scale-105 
          hover:text-gray-950 transition ml-3 dark:text-white/60 hover:dark:text-white/90"
            >
              <div className="flex">
                <FaLink />
              </div>
            </Link>
          </h3>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden sm:block">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold flex items-center">
              {title}{" "}
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white/60 hover:dark:text-white/90 ml-4 focus:scale-110 hover:scale-110 active:scale-105 
          hover:text-gray-950 transition"
              >
                <div className="flex mr-1">
                  <FaGithub />
                </div>
              </Link>
              <Link
                href={liveLink}
                rel="noopener noreferrer"
                className="dark:text-white/60 hover:dark:text-white/90 text-gray-700 ml-3 focus:scale-110 hover:scale-110 active:scale-105 
          hover:text-gray-950 transition "
              >
                <div className="flex mr-1">
                  <FaLink />
                </div>
              </Link>
            </h3>

            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-8">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial]
            group-even:-left-40"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
