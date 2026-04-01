import React, { useState } from "react";
import styles from "./header.module.css";
import { useI18n } from "../../shared/i18n/useI18n.js";

export default function Header() {
  const { lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
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
          <button type="button" className={styles.link} onClick={() => scrollToSection("home")}>
            home
          </button>
          <button type="button" className={styles.link} onClick={() => scrollToSection("clan")}>
            clan
          </button>
          <button type="button" className={styles.link} onClick={() => scrollToSection("arsenal")}>
            arsenal
          </button>
          <button type="button" className={styles.link} onClick={() => scrollToSection("projects")}>
            projects
          </button>
          <button type="button" className={styles.link} onClick={() => scrollToSection("contact")}>
            contact
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