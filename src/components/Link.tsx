import React, { ReactNode } from "react";

export const Link: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("popstate"));
    }}
  >
    {children}
  </a>
);
