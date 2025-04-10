import React from "react";
import './style.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      
      <div className="container" id="about">
        <About/>
      </div>
      
      <div className="container" id="experience">
        <Experience/>
      </div>
      
      <div className="container" id="projects">
        <Projects/>
      </div>
      
      <div className='footer'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
