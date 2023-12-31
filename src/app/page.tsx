import React from "react";
import Header from "@/components/layout/Header";
import Intro from "@/components/section/intro/Intro";
import About from "@/components/section/about/About";
import Contact from "@/components/section/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Intro />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
