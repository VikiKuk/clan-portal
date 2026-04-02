import React from "react";
import Container from "../../../shared/ui/Container.jsx";
import Section from "../../../shared/ui/Section.jsx";
import SectionTitle from "../../../shared/ui/SectionTitle.jsx";
import { useI18n } from "../../../shared/i18n/useI18n.js";
import styles from "./Clan.module.css";
import dmitriiCV from "../../../assets/cv/dmitrii-cv.pdf";
import veronikaCV from "../../../assets/cv/veronika-cv.pdf";

export default function Clan() {
  const { t } = useI18n();

  const intro = t("clan.intro");
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  const contract = t("clan.contract");
  const contractItems = Array.isArray(contract) ? contract : [contract];

  return (
    <Section id="clan">
      <Container>
        <div className={styles.layout}>
          {/* header row (full width) */}
          <div className={styles.header}>
            <SectionTitle text={t("clan.title")} />
          </div>

          {/* left column */}
          <div className={styles.left}>
            <div className={styles.intro}>
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className={styles.right}>
            <div className={styles.roleCard}>
              <h3 className={styles.roleTitle}>{"<DB Engineer/>"}</h3>
              <ul className={styles.roleList}>
                <li>SQL performance & tuning</li>
                <li>Data modeling, migrations</li>
                <li>Auditability & data quality</li>
              </ul>
            </div>

            <div className={styles.roleCard}>
              <h3 className={styles.roleTitle}>{"<Full-stack Developer/>"}</h3>
              <ul className={styles.roleList}>
                <li>API, auth, integrations</li>
                <li>UI/UX, frontend architecture</li>
                <li>Build → deploy → support</li>
              </ul>
            </div>
          </div>

          {/* contract row (full width) */}
          <div className={styles.contract}>
            <div className={styles.contractLeft}>
              <h3 className={styles.contractTitle}>{t("clan.contractTitle")}</h3>
              <ol className={styles.contractList}>
                {contractItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>

            <div className={styles.contractRight}>
              <a className={styles.cvCard} href={veronikaCV} target="_blank" rel="noopener noreferrer">
                <span className={styles.cvLabel}>CV</span>
                <span className={styles.cvName}>Veronika</span>
              </a>

              <a className={styles.cvCard} href={dmitriiCV} target="_blank" rel="noopener noreferrer">
                <span className={styles.cvLabel}>CV</span>
                <span className={styles.cvName}>Dmitrii</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}