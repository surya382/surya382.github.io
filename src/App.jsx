import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import profPic from "../src/Assets/prof.jpeg"



import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts/Contacts";

function App() {
 
  useEffect(() => {
    document.title = "Rahul Suryawanshi | Portfolio";
   
  }, []);

  return (
   
      
      <div className="App" >
        <Navbar />
       
        <Home/>
        <Contacts/>
        <Footer />
      </div>
    
  );
}

export default App;
