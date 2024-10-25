"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import Style from "./Style";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="sm:fixed left-1/2 border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 h-10 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 hidden sm:flex">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 w-full">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white/80 ":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* {Mobile version} */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-between p-4 bg-white shadow-md sm:hidden dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center transition-all duration-300 ease-in-out"
          aria-label="Sidebar"
        >
          <GiHamburgerMenu className="text-gray-600 dark:text-white/60 text-3xl duration-300 ease-in-out hover:text-gray-800 dark:hover:text-white/80 active:scale-110 hover:scale-105 transition-transform" />
        </button>
      </nav>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white bg-opacity-85 flex items-center justify-center dark:bg-gray-950 dark:bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Style />

          <div className="w-full h-full flex flex-col items-center relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 bg-gray-100 rounded-full shadow-md p-2 transition-all duration-300 ease-in-out text-gray-600 hover:bg-gray-300 hover:text-gray-900 text-2xl transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-white/30 dark:hover:bg-white/20 dark:text-gray-200"
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
            <ul className="flex flex-col items-center space-y-6 mt-36">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "text-xl font-medium py-3 px-5 rounded-full transition dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-800 text-gray-600  ",
                      {
                        "bg-white text-gray-800 dark:text-white/80 dark:bg-gray-700":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsMenuOpen(false); // Close menu on link click
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
