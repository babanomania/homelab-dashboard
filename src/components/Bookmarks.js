import React from "react";
import config from "../config.json";
import LinkItem from "./LinkItem";

export default function Bookmarks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {config.bookmarks.map((dta, idx) => (
        <LinkItem key={idx} {...dta} />
      ))}
    </div>
  );
}
