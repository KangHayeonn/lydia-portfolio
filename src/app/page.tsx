import React from "react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <Intro />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
