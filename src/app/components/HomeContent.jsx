'use client'
import React, { useState } from 'react'
import LoadingAnimation from './Animations/LoadingAnimation';
import AboutSection from './Sections/AboutSection';
import HeroSection from './Sections/HeroSection';
import ProjectSection from './Sections/ProjectSection';
import ContactSection from './Sections/ContactSection';

export default function HomeContent() {
   const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      <HeroSection isLoading={isLoading} />
      <AboutSection isLoading={isLoading} />
      <ProjectSection isLoading={isLoading} />
      <ContactSection isLoading={isLoading}/>
    </>
  );
}
