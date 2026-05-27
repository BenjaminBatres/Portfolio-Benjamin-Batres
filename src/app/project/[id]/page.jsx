"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import LoadingAnimationSecondary from "@/app/components/Animations/LoadingAnimationSecondary";
import ProjectIntroSection from "@/app/components/Sections/ProjectIntroSection";
import ProjectOverviewSection from "@/app/components/Sections/ProjectOverviewSection";
import ProjectGallerySection from "@/app/components/Sections/ProjectGallerySection";
import SeamlessMarquee from "@/app/components/ui/SeamlessMarquee";

export default function Page() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingAnimationSecondary
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <ProjectIntroSection id={id} isLoading={isLoading}/>
      <ProjectOverviewSection id={id} isLoading={isLoading}/>
      <ProjectGallerySection id={id} isLoading={isLoading}/>
      <SeamlessMarquee id={id} isLoading={isLoading}/>
    </>
  );
}
