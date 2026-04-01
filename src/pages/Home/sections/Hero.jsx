import React from "react";
import Container from "../../../shared/ui/Container.jsx";
import Section from "../../../shared/ui/Section.jsx";
import Button from "../../../shared/ui/Button.jsx";
import { useI18n } from "../../../shared/i18n/useI18n.js";
import clanPhoto from "../../../assets/images/clan.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useI18n();

  return (
    <Section id="home">
      <Container>
        <div className={styles.hero}>
          <div className={styles.left}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.subtitle}>{t("hero.subtitle")}</p>

            <div className={styles.actions}>
              <Button as="a" href="#projects" variant="primary">
                {t("hero.ctaProjects")}
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                {t("hero.ctaWork")}
              </Button>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.media}>
              <img className={styles.image} src={clanPhoto} alt="The Siniagovs" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}