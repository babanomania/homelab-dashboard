import React from "react";
import { Helmet } from "react-helmet";
import config from "../config.json";

export default function Layout({ children }) {
  const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
  );

  return (
    <div className="w-screen min-h-screen dark">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.name}</title>
      </Helmet>
      <header>
        <span className="flex flex-row space-x-2">
          <Logo /> <span>{config.name}</span>
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
}
