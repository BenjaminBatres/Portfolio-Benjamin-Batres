"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import ProjectIntroSection from "@/app/components/Sections/ProjectIntroSection";
import ProjectOverviewSection from "@/app/components/Sections/ProjectOverviewSection";
import ProjectGallerySection from "@/app/components/Sections/ProjectGallerySection";
import SeamlessMarquee from "@/app/components/ui/SeamlessMarquee";
import projectsInfo from "@/app/data/project-info";

export default function Page() {
  const { id } = useParams();
  const projectId = projectsInfo.find((project) => project.id === id)?.id
  if (id !== projectId) {
    notFound()
  }
  return (
    <>
      <ProjectIntroSection id={id}/>
      <ProjectOverviewSection id={id}/>
      <ProjectGallerySection id={id}/>
      <SeamlessMarquee id={id}/>
    </>
  );
}
