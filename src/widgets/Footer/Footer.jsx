import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Clan Portal</span>
        <span className="footer__muted">Built with React</span>
      </div>
    </footer>
  );
}