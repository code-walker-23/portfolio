import { links, projectsData } from "./data";

export type ProjectProps = (typeof projectsData)[number];
export type SectionName = (typeof links)[number]["name"];
export type SectionHeadingProps = {
  children: string;
};
export type ActiveSectionProviderProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
