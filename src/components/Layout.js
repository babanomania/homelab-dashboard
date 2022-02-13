import React from "react";
import { Helmet } from "react-helmet";
import config from "../config.json";

export default function Layout({ children }) {
  return (
    <div className="w-screen min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.name}</title>
      </Helmet>
      <div className="bg-indigo-700 shadow-lg text-white flex items-center h-12 w-screen pl-2">
        {config.name}
      </div>
      <div className="p-4 pt-6">{children}</div>
    </div>
  );
}
