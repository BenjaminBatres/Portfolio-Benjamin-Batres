import React, { useEffect, useRef } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { motion, useAnimation, useInView } from "motion/react";
import Project from "../ui/Project";
// Project images
import saveSpend from "../../assets/images/saveSpend-images/Save_Spend-Img.png";
import skinstric from "../../assets/images/skinstric-images/Skinstric-img.png";
import ecommercestore from "../../assets/images/e-commerce-images/e-commerce-project.png";
import ultramarket from "../../assets/images/ultraverse-images/Ultraverse-market-img.png";
import summarist from "../../assets/images/summarist-images/Summarist-img.png";
import movieapi from "../../assets/images/movieApi-images/MovieAPI.jpg";
// Hover images for projects
import saveSpendHover from "../../assets/images/saveSpend-images/SaveSpend-hover.png";
import skinstricHover from "../../assets/images/skinstric-images/Skinstric-hover.png";
import ecommercestoreHover from "../../assets/images/e-commerce-images/E-commerce-store-hover.png";
import ultramarketHover from "../../assets/images/ultraverse-images/Ultraverse-market-hover.png";
import summaristHover from "../../assets/images/summarist-images/Summarist-hover.png";
import movieapiHover from "../../assets/images/movieApi-images/MovieAPI-hover.png";

export default function ProjectSection({ isLoading }) {
  const projects = [
    {
      id: "save-spend",
      name: "SaveSpend",
      description: "Budgeting app for tracking expenses — 2025",
      descriptionTablet: "Tracking expenses",
      image: saveSpend,
      hoverImage: saveSpendHover,
      link: "https://save-spend.vercel.app/",
    },
    {
      id: "skinstric",
      name: "Skinstric",
      description: "A.I Powered skin analysis platform — 2025",
      descriptionTablet: "A.I analysis platform",
      image: skinstric,
      link: "https://skintric-project.vercel.app/",
      hoverImage: skinstricHover,
    },
    {
      id: "designer-product",
      name: "Designer E-Commerce Store",
      description:
        "An e-commerce UI for adding clothing products to your cart.",
      descriptionTablet: "E-Commerce",
      image: ecommercestore,
      link: "https://designer-product-e-commerce.vercel.app/",
      hoverImage: ecommercestoreHover,
    },
    {
      id: "ultraverse-market",
      name: "Ultraverse Market",
      description: "NFT Marketplace Internship Project",
      descriptionTablet: "NFT Marketplace",
      image: ultramarket,
      link: "https://ben-internship-murex.vercel.app/",
      hoverImage: ultramarketHover,
    },
    {
      id: "summarist",
      name: "Summarist",
      description:
        "A book summary platform that provides key insights, audio versions, and text summaries of popular non-fiction titles",
      descriptionTablet: "Online audiobooks ",
      image: summarist,
      link: "https://ben-internship-v2.vercel.app/",
      hoverImage: summaristHover,
    },
    {
      id: "movie-api",
      name: "Movie Api",
      description:
        "Movie website that allows users to search for movies, view details, and watch trailers using the TMDB API.",
      descriptionTablet: "Movie website",
      image: movieapi,
      link: "https://movie-api-v2-alpha.vercel.app/",
      hoverImage: movieapiHover,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

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
    if (!isLoading && isInView) {
      controls.start("show");
    }
  }, [isInView, isLoading, controls]);
  return (
    <section id="projects" className="py-25 px-5 md:px-15">
      <div className="max-w-400 mx-auto">
        <div className="rounded-[20px] flex items-center gap-2 py-2 px-4 bg-[#0d0d0d] w-fit mb-4 shadow-section-title-container">
          <IoMdRadioButtonOn className="text-sm" />
          <h2 className="z-10">Projects</h2>
        </div>
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={controls}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 auto-rows-[400px] xl:auto-rows-[540px] large-desktop:auto-rows-[648px] gap-6"
        >
          {projects.map((project) => (
            <Project project={project} key={project.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
