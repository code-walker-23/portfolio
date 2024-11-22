import urlShortener from "../public/url-shortener.png";
import schedullr from "../public/schedullr.png";
import jobPortal from "../public/job-portal.png";
import sortingVisualizer from "../public/sorting-visualizer.png";
import cancure from "../public/cancure.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGraduationCap,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSchool,
} from "react-icons/fa";
import {
  SiApollographql,
  SiClerk,
  SiCplusplus,
  SiCypress,
  SiDocker,
  SiDrizzle,
  SiElastic,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGraphql,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiThealgorithms,
  SiTrpc,
  SiTypescript,
  SiZod,
} from "react-icons/si";

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
    company: "Microsoft",
    description:
      "Gained practical experience with React.js and Microsoft Azure by building a personal portfolio and applying basic OOP principles. Participated in global discussions on JavaScript best practices, recognized for dedication to community development and technical knowledge sharing.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 – Jul 2024",
  },
  {
    title: "Campus Ambassador",
    company: "Coding Ninja",
    description:
      "Gained in-depth knowledge of algorithms, data structures, and problem-solving by attending workshops, enhancing personal coding proficiency. Strengthened leadership and organizational skills through coordinating and leading coding events, such as hackathons and webinars.",
    icon: React.createElement(CgWorkAlt),
    // icon: <CgWorkAlt/>, this can be used when file is .tsx

    date: "May 2023 – Sep 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CanCure AI",
    description:
      "An AI-powered platform transforming cancer care with personalized treatment plans. Cancure AI combines real-time data analysis, advanced insights, secure authentication, and an intuitive interface to enhance precision and empower patients and healthcare professionals.",
    tags: [
      "React",
      "Gemini API",
      "NeonDB",
      "PostgreSQL",
      "Clerk",
      "DND Kit",
      "Tailwind CSS",
      "Vite",
      "Vercel",
    ],
    imageUrl: cancure,
    liveLink: "https://cancure-ai.vercel.app/",
    githubLink: "https://github.com/code-walker-23/beat-cancer-with-ai",
  },
  {
    title: "Hirrd",
    description:
      "A full-stack job portal that allows employers to post job listings and job seekers to apply easily. The platform features real-time application tracking and user authentication for enhanced engagement and security.",
    tags: [
      "React",
      "Supabase",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "React Hook Form",
      "Zod Validation",
    ],
    imageUrl: jobPortal,
    liveLink: "https://hirrd-by-vinay-chhabra.vercel.app/",
    githubLink: "https://github.com/code-walker-23/job-portal",
  },
  {
    title: "Schedullr",
    description:
      "A scheduling application that enables users to book events with real-time availability. It integrates with Google Calendar for seamless event synchronization, featuring customizable booking options and efficient appointment management.",
    tags: [
      "Next.js",
      "Google Calendar API",
      "NeonDB",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
      "Vercel",
      "React Hook Form",
      "Zod Validation",
    ],
    imageUrl: schedullr,
    liveLink: "https://schedullr-by-vinay-chhabra.vercel.app/",
    githubLink: "https://github.com/code-walker-23/schedullr",
  },
  {
    title: "Sorting Visualizer",
    description:
      "An interactive sorting visualizer that lets users visualize various sorting algorithms in action. Users can customize array values and speeds, providing an engaging educational tool for understanding sorting mechanisms.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Vercel"],
    imageUrl: sortingVisualizer,
    liveLink: "https://sorting-visualizer-by-vinay-chhabra.vercel.app/",
    githubLink: "https://github.com/code-walker-23/sorting-visualizer",
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
      "Yup Validation",
    ],
    imageUrl: urlShortener,
    liveLink: "https://url-shortener-by-vinay-chhabra.vercel.app/",
    githubLink: "https://github.com/code-walker-23/url-shortener",
  },
] as const;

export const skillsData = [
  // Computer Science Foundations
  { name: "Algorithms", icon: SiThealgorithms },
  { name: "CPP", icon: SiCplusplus },
  // Core Technologies
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "TypeScript", icon: SiTypescript },

  // Frontend Frameworks and Libraries
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },

  // Backend Frameworks and Tools
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Prisma", icon: SiPrisma },
  // { name: "tRPC", icon: SiTrpc }, // Optional, if relevant

  // Databases and Data Management
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  // { name: "Redis", icon: SiRedis },
  // { name: "ElasticSearch", icon: SiElastic },

  // Cloud Platforms and Deployment
  { name: "Firebase", icon: SiFirebase },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },

  // Testing Frameworks
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
  { name: "Playwright", icon: SiPlaywright },

  // Developer Tools
  { name: "Git", icon: FaGitAlt },

  // Advanced Tools
  // { name: "GraphQL", icon: SiGraphql },
  // { name: "Apollo", icon: SiApollographql },
  { name: "Supabase", icon: SiSupabase },
  { name: "Drizzle ORM", icon: SiDrizzle },
  { name: "Zod Validation", icon: SiZod },
  { name: "Clerk", icon: SiClerk },
] as const;

export const educationData = [
  {
    title: "Bachelor of Technology",
    edu: "Anand Engineering College",
    description:
      "Acquired in-depth knowledge of computer science fundamentals, data structures, and algorithms. Proficient in programming languages such as C, C++, JavaScript, and TypeScript, with hands-on experience in solving complex problems and building efficient solutions through various projects.",
    icon: React.createElement(FaGraduationCap),
    date: "Sep 2021 – Present",
  },
  {
    title: "Senior Secondary",
    edu: "St Andrews Senior Secondary School",
    description:
      "Developed a strong foundation in mathematics and science, which enhanced analytical and problem-solving skills. Participated in various extracurricular activities that fostered teamwork and leadership.",
    icon: React.createElement(FaSchool),
    date: "Jul 2019 – Aug 2021",
  },
  {
    title: "High School",
    edu: "Agra Vanasthali Vidyalaya",
    description:
      "Gained foundational knowledge in various subjects and developed critical thinking skills. Engaged in sports and extracurricular activities that contributed to personal growth.",
    icon: React.createElement(FaSchool),

    date: "May 2017 – Jun 2019",
  },
] as const;
