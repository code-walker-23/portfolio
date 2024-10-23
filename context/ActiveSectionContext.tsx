/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  ActiveSectionContextType,
  ActiveSectionProviderProps,
  SectionName,
} from "@/lib/types";
import React, { createContext, useContext } from "react";
import { useState } from "react";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to disable observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
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
