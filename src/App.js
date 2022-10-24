import React from "react";
import Navbar from "./componets/Navbar/Index.js";
import Hero from "./componets/Hero/index.js";
import Main from "./componets/Main/index.js";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />   
      <Hero />
      <Main />
    </div>
  );
}

export default App;
