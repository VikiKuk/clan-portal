import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../entities/project/projects.data.js";
import Header from "../../widgets/Header/Header.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";
import Container from "../../shared/ui/Container.jsx";
import { useI18n } from "../../shared/i18n/useI18n.js";

export default function ProjectPage() {
  const { id } = useParams();
  const { t, lang } = useI18n();

  const project = projects.find((p) => p.id === id);

  return (
    <>
      <Header />

      <main className="page">
        <Container>
          {!project ? (
            <p>{lang === "ru" ? "Проект не найден" : "Project not found"}</p>
          ) : (
            <>
              {/* header */}
              <div className="projectPageHeader">
                <a href="/#projects" className="backLink">
                  {lang === "ru" ? "← К проектам" : "← Back to projects"}
                </a>

                <h1 className="pageTitle">
                  {t(`projects.items.${project.id}.title`)}
                </h1>
              </div>

              {/* description */}
              <p className="muted">
                {t(`projects.items.${project.id}.description`)}
              </p>

              {/* stack */}
              <div className="stackRow">
                {project.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {/* highlights */}
              <ul className="list" style={{ marginTop: "20px" }}>
                {t(`projects.items.${project.id}.highlights`).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>

              {/* links */}
              <div className="actionsRow" style={{ marginTop: "20px" }}>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                ) : null}
              </div>

              {/* gallery */}
              {project.images?.length ? (
                <div className="projectGallery">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${t(
                        `projects.items.${project.id}.title`
                      )} screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}