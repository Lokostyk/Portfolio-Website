import React from "react";

import Main from "./Components/Main/Main";
import Nav from "./Components/Navbar/Nav";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Info />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
