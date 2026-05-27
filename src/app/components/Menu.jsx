import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function Menu({ isOpen, setIsOpen }) {
  const [targetSection, setTargetSection] = useState("");
  const router = useRouter();

  const menuLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];

  const springConfig = {
    type: "spring",
    stiffness: 100,
    delay: 0.3,
    damping: 30,
    mass: 1,
  };

  const letterVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,

      transition: springConfig,
    },
    exit: {
      y: 100, // Sinks back down
      opacity: 0,

      transition: { ...springConfig, damping: 20 },
    },
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection(""); // Reset target section after scrolling
    }
  }, [targetSection]);

  // If you're already on /, it scrolls directly.
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // This decides whether to scroll immediately or change page first.
  const handleLinkClick = (href, sectionId) => {
    if (router.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      setTargetSection(sectionId);
      router.push(href);
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`${isOpen ? "opacity-100 bg-black" : "opacity-0 pointer-events-none delay-450"} fixed transition-all ease-linear duration-600 h-full w-full z-20 inset-0`}
    >
      <div className="px-5 md:px-14 pt-30 sm:py-40">
        <div className="max-w-400 mx-auto">
          <ul className="space-y-1">
            <AnimatePresence>
              {isOpen && (
                <>
                  {menuLinks.map((link, id) => (
                    <motion.div
                      key={id}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      style={{ overflow: "hidden" }}
                      className="h-15 xl:h-20"
                    >
                      <li className="relative w-fit">
                        <motion.a
                          href={"/"}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(`/${link.path}`, link.name);
                            scrollToSection(link.name);
                          }}
                          className="text-[44px]/10 md:text-5xl xl:text-7xl font-bold block after:content-[''] after:absolute after:h-0.75 after:w-0 after:-bottom-0.75 after:right-0 after:duration-600 after:ease-linear hover:after:w-full hover:after:left-0 after:bg-white"
                          variants={letterVariants}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>
  );
}
