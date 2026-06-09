"use client";
import Link from "next/link";
import React from "react";
import RevealText from "../ui/RevealText";
import RevealParaText from "../ui/RevalParaText";
import Image from "next/image";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import HeroImage from "../../assets/images/Hero-img.jpg";
import CssSvg from "../../assets/tech/css3.svg";
import GitSvg from "../../assets/tech/git.svg";
import HtmlSvg from "../../assets/tech/html5.svg";
import JavaScriptSvg from "../../assets/tech/javascript.svg";
import NextjsSvg from "../../assets/tech/nextjs.svg";
import ReactSvg from "../../assets/tech/react.svg";
import ReduxSvg from "../../assets/tech/redux.svg";
import TailwindSvg from "../../assets/tech/tailwind.svg";

export default function HeroSection() {
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
  return (
    <section className="pt-20 px-5 md:px-15">
      <div className="max-w-380 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mt-[10vh] 2xl:mt-[15vh]">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <RevealText
              className={
                "text-[52px] md:text-5xl lg:text-7xl text-center leading-none z-10 font-bold mb-2"
              }
              center={"justify-center lg:justify-start"}
              text={"Hi, I'm Ben Batres"}
            />
            <RevealText
              className={"text-3xl lg:text-4xl text-center nth-[2]:mb-6 z-10"}
              text={"Frontend Developer"}
              delay={0.3}
            />
            <RevealParaText
              className={
                " max-w-lg  z-10 text-lg mb-8 leading-5 justify-center lg:justify-normal"
              }
              text={
                "I enjoy building websites and web applications, solving problems, and learning new technologies. I'm always working on improving my development skills and creating projects that provide value to users."
              }
              delay={0.6}
            />

            <div className="flex items-center gap-4 mb-15">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6 }}
                href="/Resume/Benjamin_Batres-Resume.pdf"
                download={"Benjamin_Batres-Resume.pdf"}
                className='rounded-[16px] md:text-lg p-0.5 bg-right-gradient relative after:content-[""] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:z-1 group'
              >
                <div className="absolute w-17.5 h-full rounded-[16px] bottom-0 left-0 shadow-[-10px_10px_30px_#ffffff38] bg-left-gradient"></div>
                <div className="absolute w-15 h-14 rounded-[16px] bottom-0 left-0 transition-all ease-linear duration-350 group-hover:bg-white/60 "></div>
                <div className="absolute w-18 md:w-25 h-13.5 md:h-13 rounded-[16px] top-0 right-0 transition-all ease-linear duration-350 group-hover:bg-white/60 "></div>
                <div></div>
                <div className="py-3.5 px-6 rounded-[14px] z-3 relative bg-inner-gradient">
                  Download CV
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link
                  href={"#projects"}
                  className='rounded-[16px] md:text-lg p-0.5 bg-right-gradient relative block after:content-[""] after:absolute after:w-[65%] after:h-[60%] after:rounded-[120px] after:top-0 after:right-0 after:shadow-[0_0_20px_#ffffff38] after:z-1 group'
                >
                  <div className="absolute w-17.5 h-full rounded-[16px] bottom-0 left-0 shadow-[-10px_10px_30px_#ffffff38] bg-left-gradient"></div>
                  <div className="absolute w-15 h-14 rounded-[16px] bottom-0 left-0 transition-all ease-linear duration-350 group-hover:bg-white/60 "></div>
                  <div className="absolute w-18 md:w-25 h-13.5 md:h-13 rounded-[16px] top-0 right-0 transition-all ease-linear duration-350 group-hover:bg-white/60 "></div>
                  <div></div>
                  <div className="py-3.5 px-6 rounded-[14px] z-3 relative bg-inner-gradient">
                    See Projects
                  </div>
                </Link>
              </motion.div>
            </div>
            <RevealParaText
              text={"Working with modern technologies"}
              className={"text-[22px] sm:text-2xl font-semibold mb-6"}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full"
            >
              <Swiper
                slidesPerView={4.5}
                speed={2500}
                autoplay={{ delay: 0 }}
                loop={true}
                allowTouchMove={false}
                modules={[Autoplay]}
                className="h-25"
              >
                {techSvgs.map((tech, id) => (
                  <SwiperSlide key={id} className="">
                    <Image
                      src={tech.svg}
                      alt={tech.name}
                      className="h-11 sm:h-13 w-11 sm:w-13 "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="2xl:w-[35%] flex justify-center lg:block"
          >
            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="rounded-2xl shadow-secondary/50 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
