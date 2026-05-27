import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { PiStarFourFill } from "react-icons/pi";
import projectsInfo from "@/app/data/project-info";

export default function SeamlessMarquee({ id, isLoading }) {
  const projectName = projectsInfo.find((project) => project.id === id)?.name;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();
  useEffect(() => {
    if (!isLoading && isInView) {
      controls.start("visible");
    }
  }, [isInView, isLoading, controls]);
  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
        },
      }}
      transition={{ duration: 0.7 }}
      className="overflow-hidden whitespace-nowrap w-full py-4 relative"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-15 sm:w-40 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-15 sm:w-40 bg-linear-to-l from-black to-transparent" />

      <motion.div
        className="flex gap-8 text-white text-5xl tablet:text-8xl xl:text-[152px]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 8,
          repeat: Infinity,
        }}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className="flex items-center gap-2 uppercase tracking-tighter font-bold"
            >
              <PiStarFourFill className="tablet:text-8xl text-red-500" />
              {projectName}
            </span>
          ))}
      </motion.div>
    </motion.div>
  );
}
