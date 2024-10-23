import urlShortener from "../public/url-shortener.png";
import schedullr from "../public/schedullr.png";
import jobPortal from "../public/job-portal.png";
import sortingVisualizer from "../public/sorting-visualizer.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Microsoft Learn Student Ambassador",
    location: "Remote",
    description:
      "Gained practical experience with React.js and Microsoft Azure by building a personal portfolio and applying basic OOP principles. Participated in global discussions on JavaScript best practices, recognized for dedication to community development and technical knowledge sharing.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 – Jul 2024",
  },
  {
    title: "Campus Ambassador",
    location: "Remote",
    description:
      "Gained in-depth knowledge of algorithms, data structures, and problem-solving by attending workshops, enhancing personal coding proficiency. Strengthened leadership and organizational skills through coordinating and leading coding events, such as hackathons and webinars.",
    icon: React.createElement(CgWorkAlt),
    // icon: <CgWorkAlt/>, this can be used when file is .tsx

    date: "May 2023 – Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Hirrd",
    description:
      "A full-stack job portal that allows employers to post job listings and job seekers to apply easily. The platform features real-time application tracking and user authentication for enhanced engagement and security.",
    tags: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
    imageUrl: jobPortal,
    liveLink: "",
    githubLink: "https://github.com/code-walker-23/job-portal",
  },
  {
    title: "Schedullr",
    description:
      "A scheduling application that enables users to book events with real-time availability. It integrates with Google Calendar for seamless event synchronization, featuring customizable booking options and efficient appointment management.",
    tags: [
      "React",
      "NeonDB",
      "PostgreSQL",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
    imageUrl: schedullr,
    liveLink: "",
    githubLink: "https://github.com/code-walker-23/schedullr",
  },
  {
    title: "Linkeat",
    description:
      "A URL shortener application that allows users to easily shorten links and track metrics such as click counts and geographical location. It includes a comprehensive dashboard for managing URLs and analyzing performance.",
    tags: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "Framer Motion",
    ],
    imageUrl: urlShortener,
    liveLink: "",
    githubLink: "https://github.com/code-walker-23/url-shortener",
  },
  {
    title: "Sorting Visualizer",
    description:
      "An interactive sorting visualizer that lets users visualize various sorting algorithms in action. Users can customize array values and speeds, providing an engaging educational tool for understanding sorting mechanisms.",
    tags: ["HTML", "Javascript", "Tailwind CSS"],
    imageUrl: sortingVisualizer,
    liveLink: "",
    githubLink: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

export const educationData = [
  {
    title: "Bachelor of Technology",
    edu: "Anand Engineering College",
    description:
      "Acquired in-depth knowledge of computer science fundamentals, software development, and data structures. Developed skills in programming languages such as Java and Python, and gained hands-on experience through various projects.",
    icon: React.createElement(FaGraduationCap),
    date: "October 2021 – Present",
  },
  {
    title: "Senior Secondary",
    edu: "St Andrews Senior Secondary School",
    description:
      "Developed a strong foundation in mathematics and science, which enhanced analytical and problem-solving skills. Participated in various extracurricular activities that fostered teamwork and leadership.",
    icon: React.createElement(FaSchool),
    date: "2019 – 2021",
  },
  {
    title: "High School",
    edu: "Agra Vanasthali Vidyalaya",
    description:
      "Gained foundational knowledge in various subjects and developed critical thinking skills. Engaged in sports and extracurricular activities that contributed to personal growth.",
    icon: React.createElement(FaSchool),

    date: "2017 – 2019",
  },
] as const;
