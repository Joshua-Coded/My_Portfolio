import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Github from "@/components/home/Github";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Kernel Engineer & Full Stack Developer',
  description: 'Portfolio showcasing kernel engineering and full-stack development projects',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </>
  )
}