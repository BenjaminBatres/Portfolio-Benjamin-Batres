import React, { useEffect, useRef } from "react";
import projectsInfo from "@/app/data/project-info";
import Image from "next/image";
import { motion, useAnimation, useInView } from "motion/react";
export default function ProjectGallerySection({ id, isLoading }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45, // delay between items
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
    // Start animation when the component is in view
    if (!isLoading && isInView) {
      mainControls.start("show");
    }
  }, [isInView, isLoading, mainControls]);

  return (
    <section className="pb-8 px-5 md:px-15">
      <div className="max-w-360 mx-auto">
        {projectsInfo
          .filter((project) => project.id === id)
          .map((project) => (
            <motion.div
              ref={containerRef}
              initial="hidden"
              variants={container}
              animate={mainControls}
              viewport={{ once: true, margin: "-100px" }}
              key={project.id}
              className="grid grid-cols-2 gap-3 md:gap-6"
            >
              {project.images.map((image, id) => (
                <motion.figure
                  variants={item}
                  key={id}
                  className="overflow-hidden rounded-[12px] nth-[2]:row-span-2 nth-[3]:row-span-2 relative"
                >
                  <Image
                    src={image}
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </motion.figure>
              ))}
            </motion.div>
          ))}
      </div>
    </section>
  );
}
