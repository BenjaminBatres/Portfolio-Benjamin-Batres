"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RevealParaText({ text, className, isLoading, sec }) {
  const words = text.split(" ");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when the component is in view

    if (!isLoading && isInView) {
      controls.start("visible");
    }  
  }, [isInView, isLoading, controls]);

  return (
    <motion.p
      initial="hidden"
      animate={controls}
      ref={containerRef}
      viewport={{ once: true, margin: "-100px" }} // 👈 triggers slightly earlier
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12, // 👈 controls delay between words
          },
        },
      }}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          
        >
          {word}
        </motion.span>
      ))}
      {sec && 
      sec.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="text-secondary/70"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
