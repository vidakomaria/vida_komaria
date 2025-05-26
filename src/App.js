import React from "react";
import { Routes, Route } from 'react-router-dom';
import './style.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import ProjectDetail from './Components/ProjectDetail';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={
          <>
            <div className="container" id="about">
              <About />
            </div>

            <div className="container" id="experience">
              <Experience />
            </div>

            <div className="container" id="projects">
              <Projects />
            </div>

            <div className='footer'>
              <Contact />
            </div>
          </>
        } />

        {/* Route untuk detail fastwork */}
        <Route path="/project/fastwork" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
