"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import Menu from "./Menu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

export default function Header() {
  const links = [
    {
      path: "https://github.com/BenjaminBatres",
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      path: "https://www.linkedin.com/in/benjamin-batres-9216b5329/",
      name: "Linkedin",
      icon: <FaLinkedin />,
    },
    {
      path: "/Resume/Benjamin_Batres-Resume.pdf",
      name: "Resume",
      icon: <FaFilePdf />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed left-0 top-0 p-5 mt-2.5 md:mt-0 md:py-10 md:px-15 2xl:px-25.5 z-25 mix-blend-difference"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer h-8 w-8 flex justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-7 bg-white transition-all duration-350 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-2 "
              }`}
            />
            <span
              className={`absolute h-0.5 w-7 bg-white transition-all duration-350 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-2 mb-2"
              }`}
            />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-0 py-7 md:py-7.5 px-5 md:px-15 2xl:px-25.5 min-h-15 z-25"
        >
          <ul
            className={`flex gap-2 sm:gap-4 items-center z-10 ease-linear duration-400 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100 delay-500"}`}
          >
            {links.map((link, id) => (
              <div key={id} className="flex gap-2 sm:gap-4 items-center">
                <li>
                  <Link
                    href={link.path}
                    target="_blank"
                    className="text-lg sm:text-2xl sm:text-secondary/70 hover:text-white duration-300 "
                  >
                    <div className="py-3.5 px-6 rounded-[14px] z-3 shadow-section-title-container bg-[#0d0d0d]/50">
                      {link.icon}
                    </div>
                  </Link>
                </li>
                <span
                  className="text-secondary/70 text-xl"
                  style={{ display: id === 2 ? "none" : "block" }}
                >
                  //
                </span>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
