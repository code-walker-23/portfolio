import urlShortener from "../public/url-shortener.png";
import schedullr from "../public/schedullr.png";
import jobPortal from "../public/job-portal.png";
import sortingVisualizer from "../public/sorting-visualizer.png";

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

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

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
    githubLink: "",
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
    githubLink: "",
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
    githubLink: "",
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
