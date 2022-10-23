import React from "react";
import Navbar from "./componets/Navbar/Index.js";
import Hero from "./componets/Hero/index.js";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />   
      <Hero />
    </div>
  );
}

export default App;
