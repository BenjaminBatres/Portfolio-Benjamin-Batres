import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import darkBackground from "../../assets/images/darkbackground.png";
import { GoArrowUpRight } from "react-icons/go";

export default function Project({ project, item }) {
  return (
    <motion.a
      variants={item}
      href={`/project/${project.id}`}
      className="rounded-[32px] overflow-hidden relative group"
    >
      <div className="flex flex-col justify-end h-100 xl:h-135 large-desktop:h-162 p-5">
        <div className="py-5 px-6 space-y-2.5 backdrop-blur-[10px] rounded-[24px] relative flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-secondary/70 hidden tablet:block text-lg">
              {project.description}
            </p>
            <p className="text-secondary/70 tablet:hidden text-lg">
              {project.descriptionTablet}
            </p>
          </div>
          <button className="flex items-center gap-6 font-semibold py-1 pl-6 pr-1 group rounded-full w-fit">
            <div
              className={`h-12 w-12 relative overflow-hidden flex justify-center items-center rounded-full bg-red-500`}
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-6 group-hover:-translate-y-6">
                <GoArrowUpRight className="text-2xl" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6 transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0">
                <GoArrowUpRight className="text-2xl" />
              </span>
            </div>
          </button>
          <div className="absolute inset-0 -z-5">
            <Image
              src={darkBackground}
              alt=""
              className="object-center object-cover size-full rounded-[24px]"
            />
          </div>
        </div>
        {/* Hover Image */}
        <div className="group-hover:opacity-100 opacity-0 scale-100 group-hover:scale-105 -z-5 absolute inset-0 duration-350 transition-all ">
          <Image
            src={project.hoverImage}
            alt=""
            className="size-full object-cover"
          />
        </div>
      </div>
      <Image
        src={project.image}
        alt={project.name}
        className="absolute inset-0 -z-10 h-full w-full object-cover group-hover:scale-110 transition-transform duration-350 "
      />
    </motion.a>
  );
}
