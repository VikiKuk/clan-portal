import React from "react";
import styles from "./projectCard.module.css";
import { useI18n } from "../../shared/i18n/useI18n.js";

export default function ProjectCard({ project, onOpen }) {
  const { t } = useI18n();

  const accentMap = {
    fullstack: "pink",
    frontend: "blue",
    backend: "mint",
  };

  const accent = accentMap[project.category];

  return (
    <button
      type="button"
      className={styles.cardLink}
      onClick={() => onOpen(project)}
    >
      <article className={`${styles.card} ${styles[`accent_${accent}`]}`}>
        <div className={styles.cardHead}>
          <h3 className={styles.title}>
            {t(`projects.items.${project.id}.title`)}
          </h3>
          <div className={styles.line} />
        </div>

        <p className={styles.desc}>
          {t(`projects.items.${project.id}.short`)}
        </p>

        <p className={styles.stack}>
          {project.stack.join(" · ")}
        </p>
      </article>
    </button>
  );
}