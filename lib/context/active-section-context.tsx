/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { createContext, useContext } from "react";
import { useState } from "react";
import { links } from "@/lib/data";
import { Provider } from "react";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
