import React, { useEffect, useRef } from "react";
import projectsInfo from "../../data/project-info";
import RevealText from "../ui/RevealText";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";
import RevealParaText from "../ui/RevalParaText";
import { motion, useAnimation, useInView } from "motion/react";

export default function ProjectOverviewSection({ id, isLoading }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();
  useEffect(() => {
    // Start animation when the component is in view
    if (!isLoading && isInView) {
      mainControls.start("visible");
    }
  }, [isInView, isLoading, mainControls]);
  return (
    <section className="pt-9 pb-6 md:py-20 px-5 md:px-15">
      <div className="max-w-360 mx-auto">
        {projectsInfo
          .filter((project) => project.id === id)
          .map((project) => (
            <div
              key={id}
              className="flex flex-col tablet:flex-row gap-10 relative mb-12"
            >
              <div className="tablet:w-[45%]">
                <div className="sticky top-15">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
                    <RevealParaText
                      text={"Project overview"}
                      className={
                        "text-lg uppercase text-[#bdbdbd] font-space-mono"
                      }
                      isLoading={isLoading}
                    />
                  </div>
                  <RevealText
                    isLoading={isLoading}
                    text={project.subtitle}
                    className={`tracking-tighter ${project.id === "summarist" ? "text-[32px] tablet:text-4xl lg:text-[42px]" : "tablet:text-[64px] text-[32px]"} leading-none font-medium`}
                  />
                </div>
              </div>

              <div className="tablet:w-[55%] space-y-12">
                <div className="grid grid-cols-2 gap-5">
                  {project.info.map((info, id) => (
                    <motion.div
                      ref={containerRef}
                      animate={mainControls}
                      initial="hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                        },
                      }}
                      transition={{ duration: 0.7 }}
                      key={id}
                      className="bg-[#282828] rounded-2xl p-4 space-y-1.5 nth-[1]:col-span-2 md:nth-[1]:col-span-1 nth-[2]:col-span-2 md:nth-[2]:col-span-1"
                    >
                      <p className="uppercase font-medium">{info.title}</p>
                      {info.subTitle === "Live site" ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="text-xl font-medium flex items-center gap-2 hover:underline"
                        >
                          {info.subTitle} <FiExternalLink />
                        </Link>
                      ) : (
                        <p className="text-xl font-medium">{info.subTitle}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
                {projectsInfo
                  .filter((project) => project.id === id)
                  .map((project) => (
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
                      key={project.id}
                      className="space-y-6 border-b border-[#282828] pb-6"
                    >
                      <div className="flex items-center gap-2">
                        <PiStarFourFill className="text-red-500 text-2xl mt-0.5" />
                        <div className="text-2xl font-medium">Description</div>
                      </div>
                      <p className="text-lg tablet:text-2xl leading-tight">
                        {project.overView}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
