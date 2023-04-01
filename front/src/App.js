import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Nav from './componentes/Nav/Nav';
import Portada from './componentes/portada/Portada';
import About from './componentes/about/About';
import TechnicalSkills from './componentes/skills/TechnicalSkills';
import SoftSkills from './componentes/softSkills/SoftSkills';
import Academic from './componentes/academico/Academic';
import TrabajosCom from './componentes/trabajos/TrabajosCom';

function App() {
  return (
    <div>
      <Nav></Nav>
    <Routes>
      <Route exact path='/portafolionumerodos' element={<Portada/>}></Route>
      <Route exact path='/About' element={<About />}></Route>
      <Route exact path='/TechnicalSkills' element={<TechnicalSkills />}></Route>
      <Route exact path='/SoftSkills' element={<SoftSkills />}></Route>
      <Route exact path='/Academic' element={<Academic />}></Route>
      <Route exact path='/Trabajos' element={<TrabajosCom />}></Route>


    </Routes>
    </div>
  );
}

export default App;
