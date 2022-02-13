import React, { useState } from "react";
import { Helmet } from "react-helmet";
import config from "../config.json";

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

const LightMode = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-indigo-600"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
  </svg>
);

const DarkMode = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

export default function Layout({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={`w-screen min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.name}</title>
      </Helmet>
      <header className="dark:darkerHeader">
        <span className="flex flex-row justify-between w-screen ">
          <span className="flex flex-row space-x-2">
            <Logo /> <span>{config.name}</span>
          </span>
          <span
            className="text-white pr-4 cursor-pointer select-none"
            onClick={() => setDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <div className="h-8 w-16 bg-white bg-opacity-20 flex items-center justify-end p-2 rounded-full shadow-inner">
                <DarkMode />
              </div>
            ) : (
              <div className="h-8 w-16 bg-white bg-opacity-70 flex items-center p-2 rounded-full shadow-inner">
                <LightMode />
              </div>
            )}
          </span>
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
}
