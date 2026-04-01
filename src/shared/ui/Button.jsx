import React from "react";

export default function Button({ variant = "primary", as = "button", href, onClick, children, ...rest }) {
  const className = variant === "primary" ? "btn btn--primary" : "btn btn--secondary";

  if (as === "a") {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button" {...rest}>
      {children}
    </button>
  );
}