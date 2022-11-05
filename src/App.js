import React from "react";
import Navbar from "./componets/Navbar/Index.js";
import Hero from "./componets/Hero/index.js";
import Main from "./componets/Main/index.js";
import Institutional from "./componets/Institutional/index.js";
import Faq from "./componets/Faq/index.js";
import Footer from "./componets/Footer/index.js";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />   
      <Hero />
      <Main />
      <Institutional />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
