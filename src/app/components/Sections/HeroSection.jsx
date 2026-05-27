import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import RevealText from "../ui/RevealText";
import RevealParaText from "../ui/RevalParaText";
import ScrollDownAnimation from "../Animations/ScrollDownAnimation";

export default function HeroSection({ isLoading }) {
  return (
    <section className="py-15 px-5 h-screen relative">
      <div className="flex flex-col justify-center items-center mt-[10vh] 2xl:mt-[15vh]">
        <RevealText
          isLoading={isLoading}
          className={"text-[52px] md:text-7xl lg:text-8xl text-center z-10"}
          text={"Ben Batres"}
        />
        <RevealText
          isLoading={isLoading}
          className={
            "text-[52px] leading-[100%] md:text-7xl lg:text-8xl text-center nth-[2]:mb-6 z-10"
          }
          text={"Frontend Developer"}
          center={"center"}
          delay={0.3}
        />
        <RevealParaText
          className={
            "text-center max-w-lg mx-auto z-10 text-sm sm:text-base md:text-lg mb-8 leading-5 justify-center"
          }
          text={
            "HI!!! I’m Ben, I tackle complex engineering challenges daily, alongside a team of elite software engineers. My mission is to continuously advance in web development, using my growing expertise to drive societal progress through technology."
          }
          delay={0.6}
          isLoading={isLoading}
        />
        <div className="flex items-center gap-4 mb-15">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 2.2, duration: 0.6 }}
            href=""
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
            transition={{ delay: 2.4, duration: 0.6 }}
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

        <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto w-full">
          <p className="md:w-[55%] text-[#ffffffa6] text-[17px]">Scroll down</p>
          <div className="h-px hidden md:block md:w-full bg-secondary/40 "></div>
          {/* <div className="animate-bounce mt-3">
            <LuMouse className="text-2xl text-secondary " />
          </div> */}
          <ScrollDownAnimation />
          <div className="h-px hidden md:block w-full bg-secondary/40"></div>
          <p className="md:w-full text-[#ffffffa6] text-[17px]">
            to see projects
          </p>
        </div>
      </div>
    </section>
  );
}
