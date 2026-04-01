import React, { useCallback, useMemo, useState } from "react";
import { translations } from "./translations.js";
import { projectTranslations } from "./projectTranslations.js";
import { I18nContext } from "./I18nContext.js";

function getByPath(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function mergeTranslations(base, projects) {
  return {
    en: {
      ...base.en,
      projects: {
        ...base.en.projects,
        items: projects.en,
      },
    },
    ru: {
      ...base.ru,
      projects: {
        ...base.ru.projects,
        items: projects.ru,
      },
    },
  };
}

const mergedTranslations = mergeTranslations(translations, projectTranslations);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = useCallback(
    (key) => {
      const value = getByPath(mergedTranslations[lang], key);
      return value !== undefined ? value : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}