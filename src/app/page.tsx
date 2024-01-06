import React from "react";
import Header from "@/components/layout/Header";
import Intro from "@/components/section/intro/Intro";
import About from "@/components/section/about/About";
import Skill from "@/components/section/skill/Skill";
import Timeline from "@/components/section/timeline/Career";
import Project from "@/components/section/project/Project";
import Footer from "@/components/layout/Footer";
import initMocks from "@/mocks";

export default async function Home() {
  await initMocks();
  const dynamicData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());
  // const data = await dynamicData.json();
  console.log(dynamicData);

  return (
    <>
      <Header />
      <main id="main" role="main">
        <Intro />
        <About />
        <Skill />
        <Timeline />
        <Project />
      </main>
      <Footer />
    </>
  );
}
