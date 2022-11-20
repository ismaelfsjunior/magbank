import React from "react";
import Routes from "./routes/index";
import Navbar from "./componets/Navbar/Index.js";
import Footer from "./componets/Footer/index.js";
import "./App.scss";

const App = () => {

  return (
    <div className="App">
      <Navbar /> 
      <Routes />  
      <Footer />
    </div>
  );
}

export default App;
