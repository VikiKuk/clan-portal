import React, { useMemo, useState } from "react";
import Container from "../../../shared/ui/Container.jsx";
import Section from "../../../shared/ui/Section.jsx";
import SectionTitle from "../../../shared/ui/SectionTitle.jsx";
import { useI18n } from "../../../shared/i18n/useI18n.js";
import { projects } from "../../../entities/project/projects.data.js";
import ProjectCard from "../../../entities/project/ProjectCard.jsx";
import ProjectModal from "../../../entities/project/ProjectModal.jsx";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useI18n();
  const [activeProject, setActiveProject] = useState(null);

  const sections = useMemo(
    () => [
      {
        key: "fullstack",
        title: t("projects.categories.fullstack"),
        items: projects.filter((project) => project.category === "fullstack"),
      },
      {
        key: "frontend",
        title: t("projects.categories.frontend"),
        items: projects.filter((project) => project.category === "frontend"),
      },
      {
        key: "backend",
        title: t("projects.categories.backend"),
        items: projects.filter((project) => project.category === "backend"),
      },
    ],
    [t]
  );

  return (
    <Section id="projects">
      <Container>
        <div className={styles.header}>
          <SectionTitle text={t("projects.title")} />
          <p className={styles.subtitle}>{t("projects.intro")}</p>
        </div>

        <div className={styles.sections}>
          {sections.map((section) => (
            <div key={section.key} className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>

              <div className={styles.grid}>
                {section.items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setActiveProject}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </Section>
  );
}