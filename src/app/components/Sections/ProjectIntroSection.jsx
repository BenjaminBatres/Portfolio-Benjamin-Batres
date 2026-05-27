import React, { useEffect, useRef, useState } from "react";
import projectInfo from "../../data/project-info";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import ScrollDownAnimation from "../Animations/ScrollDownAnimation";

import { motion, useAnimation, useInView } from "motion/react";
import { useRouter } from "next/navigation";

export default function ProjectIntroSection({ id, isLoading }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
  const containerRef2 = useRef(null);
  const isInView2 = useInView(containerRef2);
  const mainControls2 = useAnimation();
  const [targetSection, setTargetSection] = useState("");
  const router = useRouter();
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLinkClick = (href, sectionId) => {
    if (router.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      setTargetSection(sectionId);
      router.push(href);
    }
  };

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection(""); // Reset target section after scrolling
    }
  }, [targetSection]);

  useEffect(() => {
    // Start animation when the component is in view
    if (!isLoading && isInView) {
      mainControls.start("visible");
    }
    if (!isLoading && isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView, isInView2, isLoading, mainControls, mainControls2]);
  return (
    <section className="pt-30 md:pt-40 px-5 md:px-15">
      <div className="max-w-360 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href={"/"}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/#projects", "projects");
              scrollToSection("projects");
            }}
            className="bg-[#282828] w-12 h-12 md:h-20 md:w-20 rounded-full flex items-center justify-center"
          >
            <GoArrowLeft className="text-2xl md:text-4xl" />
          </Link>
          <div className="md:hidden flex items-center gap-3">
            <ScrollDownAnimation
              width={"20px"}
              height={"30px"}
              bottom={"22px"}
              hidden={true}
            />
            <p className="text-secondary/70 text-sm">Scroll to explore</p>
          </div>
        </div>
        {projectInfo
          .filter((project) => project.id === id)
          .map((project) => (
            <div key={project.id}>
              <motion.h2
                ref={containerRef}
                animate={mainControls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.4 }}
                className={`text-5xl ${id === "designer-product" ? "text-5xl md:text-7xl lg:text-8xl" : "md:text-8xl lg:text-[120px]"} font-bold uppercase mb-5`}
              >
                {project.name}
              </motion.h2>
              <motion.div
                ref={containerRef}
                animate={mainControls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex justify-between items-center mb-5"
              >
                <p className="text-lg text-secondary/70">
                  {project.description}
                </p>
                <div className="hidden md:flex items-center gap-3">
                  <ScrollDownAnimation
                    width={"20px"}
                    height={"30px"}
                    bottom={"22px"}
                    hidden={true}
                  />
                  <p className="text-secondary/70 text-lg">Scroll to explore</p>
                </div>
              </motion.div>
              <motion.figure
                ref={containerRef2}
                animate={mainControls2}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="lg:h-200 overflow-hidden rounded-[32px]"
              >
                <Image
                  loading="eager"
                  src={project.image}
                  alt=""
                  quality={[100, 70]}
                  className="h-full w-full object-cover object-top"
                />
              </motion.figure>
            </div>
          ))}
      </div>
    </section>
  );
}
