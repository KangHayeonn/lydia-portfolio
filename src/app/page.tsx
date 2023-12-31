import React from "react";
import Header from "@/components/layout/Header";
import Intro from "@/components/section/intro/Intro";
import Contact from "@/components/section/contact/Contact";
import Footer from "@/components/layout/Footer";

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
