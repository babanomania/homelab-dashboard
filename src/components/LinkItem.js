import React from "react";

export default function LinkItem({ logo, title, description, link }) {
  const LinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );

  return (
    <section className="divide-x-2 dark:darkerSection">
      <span className="flex flex-row space-x-4 p-2">
        <img src={logo} className="w-12 h-12" alt="logo" />
        <div className="flex flex-col">
          <span>{title}</span>
          <span className="text-xs text-gray-500">{description}</span>
        </div>
      </span>
      <a href={link}>
        <LinkIcon /> <span>open</span>
      </a>
    </section>
  );
}
