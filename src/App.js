import React from "react";

import Main from "./Components/Main/Main";
import Nav from "./Components/Navbar/Nav";
import Info from "./Components/Info/Info";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Info />
      <Projects />
    </>
  );
}

export default App;
