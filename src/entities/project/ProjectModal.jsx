import React, { useEffect, useState } from "react";
import styles from "./projectModal.module.css";
import { useI18n } from "../../shared/i18n/useI18n.js";

export default function ProjectModal({ project, onClose }) {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const media = project?.media || [];
  const currentMedia = media[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
    setLightboxOpen(false);
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }

      if (event.key === "ArrowRight" && media.length > 1) {
        setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
      }

      if (event.key === "ArrowLeft" && media.length > 1) {
        setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, media.length, lightboxOpen]);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleLightboxOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setLightboxOpen(false);
    }
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  }

  function openLightbox() {
    if (currentMedia?.type === "image") {
      setLightboxOpen(true);
    }
  }

  if (!project) return null;

  return (
    <>
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modal}>
          <button type="button" className={styles.close} onClick={onClose}>
            ×
          </button>

          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.header}>
                <h3 className={styles.title}>
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <div className={styles.line} />
              </div>

              <div className={styles.description}>
                {t(`projects.items.${project.id}.description`).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.stack}>
                {project.stack.map((item) => (
                  <span key={item} className={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>

              <ul className={styles.highlights}>
                {t(`projects.items.${project.id}.highlights`).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                ) : null}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live
                  </a>
                ) : null}
              </div>
            </div>

            <div className={styles.gallery}>
              {currentMedia ? (
                <>
                  <div className={styles.viewer}>
                    {media.length > 1 && (
                      <button
                        type="button"
                        className={styles.arrowLeft}
                        onClick={goPrev}
                      >
                        ←
                      </button>
                    )}

                    <div className={styles.imageWrap}>
                      {currentMedia.type === "video" ? (
                        <video
                          className={styles.video}
                          controls
                          playsInline
                          preload="metadata"
                        >
                          <source src={currentMedia.src} type="video/mp4" />
                        </video>
                      ) : (
                        <button
                          type="button"
                          className={styles.mediaButton}
                          onClick={openLightbox}
                          aria-label="Open image fullscreen"
                        >
                          <img
                            src={currentMedia.src}
                            alt={`${t(`projects.items.${project.id}.title`)} media ${currentIndex + 1}`}
                            className={styles.image}
                          />
                        </button>
                      )}
                    </div>

                    {media.length > 1 && (
                      <button
                        type="button"
                        className={styles.arrowRight}
                        onClick={goNext}
                      >
                        →
                      </button>
                    )}
                  </div>

                  {media.length > 1 && (
                    <div className={styles.thumbs}>
                      {media.map((item, index) => (
                        <button
                          key={`${item.type}-${item.src}`}
                          type="button"
                          className={`${styles.thumb} ${
                            index === currentIndex ? styles.thumbActive : ""
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        >
                          {item.type === "video" ? (
                            <div className={styles.videoThumb}>
                              <span className={styles.videoBadge}>▶</span>
                              <video
                                className={styles.thumbVideo}
                                muted
                                playsInline
                                preload="metadata"
                              >
                                <source src={item.src} type="video/mp4" />
                              </video>
                            </div>
                          ) : (
                            <img src={item.src} alt="" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.empty}>{t("projects.noGallery")}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && currentMedia?.type === "image" && (
        <div
          className={styles.lightboxOverlay}
          onClick={handleLightboxOverlayClick}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen image"
          >
            ×
          </button>

          {media.length > 1 && (
            <button
              type="button"
              className={styles.lightboxArrowLeft}
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          <div
            className={styles.lightboxContent}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={currentMedia.src}
              alt={`${t(`projects.items.${project.id}.title`)} media ${currentIndex + 1}`}
              className={styles.lightboxImage}
            />
          </div>

          {media.length > 1 && (
            <button
              type="button"
              className={styles.lightboxArrowRight}
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}