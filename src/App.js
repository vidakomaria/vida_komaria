import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects';
import Summary from './Components/Sumarry';
import ProjectDetail from './Components/ProjectDetail';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='sumarry' element={ <Summary/> }/>
        <Route path='projects'>
          <Route index element= { <Projects/> }/>
          <Route path=':id' element={ <ProjectDetail/> }/>
        </Route>
      </Routes>

      <div className='footer'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
