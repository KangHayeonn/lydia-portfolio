import React from "react";
import Header from "@/components/layout/Header";
import Intro from "@/components/section/intro/Intro";
import About from "@/components/section/about/About";
import Skill from "@/components/section/skill/Skill";
import Timeline from "@/components/section/timeline/Career";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Intro />
        <About />
        <Skill />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
