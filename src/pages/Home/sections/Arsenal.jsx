import React from "react";
import Container from "../../../shared/ui/Container.jsx";
import Section from "../../../shared/ui/Section.jsx";
import SectionTitle from "../../../shared/ui/SectionTitle.jsx";
import { useI18n } from "../../../shared/i18n/useI18n.js";
import styles from "./Arsenal.module.css";

export default function Arsenal() {
  const { t } = useI18n();

  const groups = [
    {
      key: "frontend",
      title: "Frontend",
      accent: "pink",
      lead: ["HTML", "CSS", "React", "Redux", "TypeScript", "Vite", "Webpack"],
    },
    {
      key: "backend",
      title: "Backend",
      accent: "violet",
      lead: ["Python", "Django", "REST APIs", "DRF", "Celery", "Auth & integrations"],
    },
    {
      key: "data",
      title: "Data",
      accent: "blue",
      lead: ["SQL", "PostgreSQL", "Performance tuning", "Data modeling", "Stored procedures", "Migrations", "Auditability"],
    },
    {
      key: "delivery",
      title: "Delivery",
      accent: "cyan",
      lead: ["CI/CD", "Docker", "Nginx", "GitHub Actions", "Deploy flows", "Monitoring", "Release notes"],
    },
    {
      key: "quality",
      title: "Quality",
      accent: "mint",
      lead: ["Unit tests", "E2E", "Jest", "Puppeteer", "Mocks", "Bug triage"],
    },
    {
      key: "product",
      title: "Product",
      accent: "amber",
      lead: ["Discovery", "Requirements", "Roadmaps", "Backlog", "Metrics", "Risk management", "Stakeholders", "Delivery leadership"],
    },
  ];

  return (
    <Section id="arsenal">
      <Container>
        <div className={styles.header}>
          <SectionTitle text={t("arsenal.title")} />
          <p className={styles.subtitle}>{t("arsenal.intro")}</p>
        </div>

        <div className={styles.grid}>
          {groups.map((g) => (
            <div key={g.key} className={`${styles.card} ${styles[`accent_${g.accent}`]}`}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{g.title}</h3>
                <div className={styles.cardTop} />
            </div>

              <div className={styles.lead}>
                {g.lead.map((item) => (
                  <span key={item} className={styles.leadItem}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}