import React, { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Bookmarks from "./components/Bookmarks";
import Layout from "./components/Layout";

function App() {
  const [isDarkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  return (
    <Layout {...{ isDarkMode, setDarkMode }}>
      <Bookmarks {...{ isDarkMode }} />
    </Layout>
  );
}

export default App;
