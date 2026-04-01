import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

import Container from "../../../shared/ui/Container.jsx";
import Section from "../../../shared/ui/Section.jsx";
import SectionTitle from "../../../shared/ui/SectionTitle.jsx";
import { useI18n } from "../../../shared/i18n/useI18n.js";
import styles from "./Contact.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COOLDOWN_MS = 60_000;

export default function Contact() {
  const { t } = useI18n();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [successMessage, setSuccessMessage] = useState("");
  const [cooldownUntil, setCooldownUntil] = useState(0);

  const now = Date.now();
  const cooldownLeft = Math.max(0, Math.ceil((cooldownUntil - now) / 1000));
  const isCooldown = cooldownLeft > 0;

  const isFormEmpty = useMemo(() => {
    return (
      !form.name.trim() &&
      !form.email.trim() &&
      !form.message.trim()
    );
  }, [form.name, form.email, form.message]);

  function validate(values) {
    const nextErrors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Please enter your message.";
    }

    if (message.length > 2000) {
      nextErrors.message = "Message is too long.";
    }

    return nextErrors;
  }

  function onChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (status === "success") {
      setStatus("idle");
      setSuccessMessage("");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (status === "loading" || isCooldown) {
      return;
    }

    // honeypot: если бот заполнил скрытое поле — выход
    if (form.website.trim()) {
      return;
    }

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setSuccessMessage("Your message has been sent successfully.");
      setCooldownUntil(Date.now() + COOLDOWN_MS);

      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <Container>
        <SectionTitle text={t("contact.title")} />
        <p className="muted">{t("contact.intro")}</p>

        <div className="grid2">
          <form className="form" onSubmit={onSubmit} noValidate>
            <label className="label">
              Name
              <input
                className={`input ${errors.name ? styles.inputError : ""}`}
                name="name"
                value={form.name}
                onChange={onChange}
                required
                maxLength={100}
                aria-invalid={Boolean(errors.name)}
                autoComplete="name"
              />
              {errors.name && (
                <p className={styles.error}>{errors.name}</p>
              )}
            </label>

            <label className="label">
              E-mail
              <input
                className={`input ${errors.email ? styles.inputError : ""}`}
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                maxLength={150}
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
              />
              {errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
            </label>

            <label className="label">
              Message
              <textarea
                className={`textarea ${errors.message ? styles.inputError : ""}`}
                name="message"
                value={form.message}
                onChange={onChange}
                required
                maxLength={2000}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </label>

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onChange}
              autoComplete="off"
              tabIndex="-1"
              className={styles.hpField}
              aria-hidden="true"
            />

            <button
              className="btn btn--primary"
              type="submit"
              disabled={status === "loading" || isCooldown || isFormEmpty}
            >
              {status === "loading"
                ? "Sending..."
                : isCooldown
                ? `Try again in ${cooldownLeft}s`
                : "Send"}
            </button>

            {status === "success" && (
              <p className={styles.success}>
                {successMessage} <span>✅</span>
              </p>
            )}

            {status === "error" && (
              <p className={styles.error}>
                Failed to send message <span>❌</span>
              </p>
            )}
          </form>
          <div className={`panel ${styles.contactPanel}`}>
            <h3>Contacts</h3>
            <p className="muted">{t("contact.findMe")}</p>

            <div className={styles.socials}>
              <a
                href="https://github.com/VikiKuk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/dsinyagov"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://t.me/Viki_Kuk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Telegram"
                title="Telegram"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}