import React from "react";
import { Helmet } from "react-helmet";
import config from "../config.json";

export default function Layout({ children }) {
  return (
    <div className="w-screen min-h-screen dark">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.name}</title>
      </Helmet>
      <header>{config.name}</header>
      <main>{children}</main>
    </div>
  );
}
