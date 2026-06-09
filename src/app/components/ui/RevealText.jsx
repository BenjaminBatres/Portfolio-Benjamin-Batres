"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RevealText({
  text,
  className,
  isLoading,
  delay,
  center,
}) {
  const words = text.split(" ");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    // Start animation when the component is in view
    if ( isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.p
      initial="hidden"
      animate={controls}
      ref={containerRef}     
      viewport={{ once: true, margin: "-150px" }} // 👈 triggers slightly earlier
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.24, // 👈 controls delay between words
          },
        },
      }}
      className={`flex flex-wrap gap-2 ${center}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            stiffness: 100,
            delay: delay,
            duration: 0.4,
            ease: "easeOut",
          }}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
