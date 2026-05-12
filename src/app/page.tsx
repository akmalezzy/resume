"use client";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { BackToTop } from "@/components/ui/back-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { EasterEgg } from "@/components/ui/easter-egg";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Navbar } from "@/components/ui/navbar";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

export default function Home() {
  useGsapReveal();

  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <EasterEgg />
      <BackToTop />
    </SmoothScroll>
  );
}
