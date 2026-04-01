import React, { useEffect } from "react";
import Header from "../../widgets/Header/Header.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Clan from "./sections/Clan.jsx";
import Arsenal from "./sections/Arsenal.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="sectionDivider" />
        <Clan />
        <div className="sectionDivider" />
        <Arsenal />
        <div className="sectionDivider" />
        <Projects />
        <div className="sectionDivider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}