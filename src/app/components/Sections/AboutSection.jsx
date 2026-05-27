"use client";
import React, { useEffect, useRef } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { motion, useAnimation, useInView } from "motion/react";
import RevealParaText from "../ui/RevalParaText";
import Image from "next/image";

import HtmlSvg from "../../assets/tech/html5.svg";
import CssSvg from "../../assets/tech/css3.svg";
import GitSvg from "../../assets/tech/git.svg";
import ReactSvg from "../../assets/tech/react.svg";
import JavaScriptSvg from "../../assets/tech/javascript.svg";
import NextjsSvg from "../../assets/tech/nextjs.svg";
import ReduxSvg from "../../assets/tech/redux.svg";
import TailwindSvg from "../../assets/tech/tailwind.svg";

export default function AboutSection({ isLoading }) {
  const techSvgs = [
    {
      name: "NextJS",
      svg: NextjsSvg,
    },
    {
      name: "JavaScript",
      svg: JavaScriptSvg,
    },
    {
      name: "Tailwind",
      svg: TailwindSvg,
    },
    {
      name: "Redux",
      svg: ReduxSvg,
    },
    {
      name: "React",
      svg: ReactSvg,
    },
    {
      name: "CSS",
      svg: CssSvg,
    },
    {
      name: "HTML",
      svg: HtmlSvg,
    },
    {
      name: "Git",
      svg: GitSvg,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (!isLoading && isInView) {
      controls.start("show");
    }
  }, [isInView, isLoading, controls]);
  return (
    <section
      id="about"
      className="py-20 px-5 md:px-15 h-screen flex items-center"
    >
      <div className="max-w-400 mx-auto ">
        <div className="rounded-[20px] flex items-center gap-2 py-2 px-4 bg-[#0d0d0d] w-fit mb-4 shadow-section-title-container">
          <IoMdRadioButtonOn className="text-sm" />
          <h2 className="z-10">About & Tech</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <RevealParaText
              isLoading={isLoading}
              className={"text-2xl xl:text-3xl"}
              text={
                "I take on extremely difficult engineering problems on a daily basis in a team consisting of some of the most talented and experienced software engineers."
              }
              sec={
                "Continuously working towards improving my knowledge and skills to develop technologies that contribute to the betterment of society."
              }
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Skills</h3>

            <motion.div
              ref={containerRef}
              initial="hidden"
              variants={container}
              animate={controls}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-y-2 gap-x-4"
            >
              {techSvgs.map((tech, id) => (
                <motion.div
                  variants={item}
                  key={id}
                  className="flex items-center p-4 gap-2 shadow-section-title-container bg-[#0d0d0d]/70 rounded-[16px]"
                >
                  <Image src={tech.svg} alt="" className="w-10 h-10" />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
