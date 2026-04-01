import React from "react";

export default function SectionTitle({ text }) {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle__text">{text}</h2>
      <div className="sectionTitle__line" />
    </div>
  );
}