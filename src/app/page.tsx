"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
