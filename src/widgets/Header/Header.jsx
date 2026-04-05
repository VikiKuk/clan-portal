import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { useI18n } from "../../shared/i18n/useI18n.js";

const SECTION_IDS = ["home", "clan", "arsenal", "projects", "contact"];

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pendingSection, setPendingSection] = useState(null);
  const skipRestoreScrollRef = useRef(false);

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
      const offset = window.innerWidth <= 768 ? 110 : 90;

      if (window.scrollY < 80) {
        setActiveSection((prev) => {
          if (prev !== "home") {
            window.history.replaceState(null, "", "#home");
            return "home";
          }
          return prev;
        });
        ticking = false;
        return;
      }

      let currentId = "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= offset) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveSection((prev) => {
        if (prev !== currentId) {
          window.history.replaceState(null, "", `#${currentId}`);
          return currentId;
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

  useEffect(() => {
    if (!menuOpen) return undefined;

    const scrollY = window.scrollY;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyLeft = document.body.style.left;
    const originalBodyRight = document.body.style.right;
    const originalBodyWidth = document.body.style.width;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.left = originalBodyLeft;
      document.body.style.right = originalBodyRight;
      document.body.style.width = originalBodyWidth;
      document.body.style.touchAction = originalBodyTouchAction;

      if (!skipRestoreScrollRef.current) {
        window.scrollTo(0, scrollY);
      }

      skipRestoreScrollRef.current = false;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || !pendingSection) return undefined;

    const el = document.getElementById(pendingSection);

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${pendingSection}`);
        setActiveSection(pendingSection);
        setPendingSection(null);
      });
    } else {
      setPendingSection(null);
    }

    return undefined;
  }, [menuOpen, pendingSection]);

  function scrollToSection(id) {
    if (menuOpen) {
      skipRestoreScrollRef.current = true;
      setPendingSection(id);
      setMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    }
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function getLinkClass(id) {
    return `${styles.link} ${activeSection === id ? styles.linkActive : ""}`;
  }

  return (
    <>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />

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
    </>
  );
}