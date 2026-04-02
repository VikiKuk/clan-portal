import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { useI18n } from "../../shared/i18n/useI18n.js";

const SECTION_IDS = ["home", "clan", "arsenal", "projects", "contact"];

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");

    if (SECTION_IDS.includes(initialHash)) {
      setActiveSection(initialHash);
    }

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    let ticking = false;

    function updateActiveSection() {
      const viewportCenter = window.innerHeight * 0.42;

      let closestId = SECTION_IDS[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      }

      setActiveSection((prev) => {
        if (prev !== closestId) {
          window.history.replaceState(null, "", `#${closestId}`);
          return closestId;
        }
        return prev;
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    }

    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function getLinkClass(id) {
    return `${styles.link} ${activeSection === id ? styles.linkActive : ""}`;
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          {"<SN/>"}
        </a>

        <nav
          id="mobile-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <button
            type="button"
            className={getLinkClass("home")}
            onClick={() => scrollToSection("home")}
          >
            {t("nav.home")}
          </button>

          <button
            type="button"
            className={getLinkClass("clan")}
            onClick={() => scrollToSection("clan")}
          >
            {t("nav.clan")}
          </button>

          <button
            type="button"
            className={getLinkClass("arsenal")}
            onClick={() => scrollToSection("arsenal")}
          >
            {t("nav.arsenal")}
          </button>

          <button
            type="button"
            className={getLinkClass("projects")}
            onClick={() => scrollToSection("projects")}
          >
            {t("nav.projects")}
          </button>

          <button
            type="button"
            className={getLinkClass("contact")}
            onClick={() => scrollToSection("contact")}
          >
            {t("nav.contact")}
          </button>
        </nav>

        <div className={styles.controls}>
          <div className={styles.lang}>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === "ru" ? styles.active : ""}`}
              onClick={() => setLang("ru")}
            >
              RU
            </button>

            <span className={styles.sep}>|</span>

            <button
              type="button"
              className={`${styles.langBtn} ${lang === "en" ? styles.active : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}