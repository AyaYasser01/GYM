import React from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Features from "./components/Features.jsx";
import Offer from "./components/Offer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
