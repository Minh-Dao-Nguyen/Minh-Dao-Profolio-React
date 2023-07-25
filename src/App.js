import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/Nav Bar/NavBar";
import Home from "./Pages/Home/Home.js";
import Projects from "./Pages/Projects/Projects.js";
import EmptySpace from './Components/Empty Space/EmptySpace';
import Others from './Pages/Others/Others';

import PhotographyGallery from './Pages/Others/Components/PhotographyGallery';

import EICU_ML from './Pages/Projects Page/EICU_ML';
import DishManager from './Pages/Projects Page/DishManager';
import CplusLib from './Pages/Projects Page/CplusLib';
import EmailCom from './Pages/Projects Page/EmailCom';
import DLE_EXPO from './Pages/Projects Page/DLE_EXPO';

function App() {
  return (
    <div className='App app-container'>
      <Router>
        <EmptySpace height='20px' />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/eICU-ML' element={<EICU_ML />} />
          <Route path='/projects/dish-manage' element={<DishManager />} />
          <Route path='/projects/lib-C++' element={<CplusLib />} />
          <Route path='/projects/email-communication' element={<EmailCom />} />
          <Route path='/projects/DLE-2022' element={<DLE_EXPO />} />
          <Route path='/app' element={<div>App</div>} />
          <Route path='/others' element={<Others />}>
            <Route path='photography' element={<PhotographyGallery />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
