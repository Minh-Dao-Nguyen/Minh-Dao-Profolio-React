import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/Nav Bar/NavBar";
import Home from "./Pages/Home/Home.js";
import Projects from "./Pages/Projects/Projects.js";
import EmptySpace from './Components/Empty Space/EmptySpace';
import Others from './Pages/Others/Others';

function App() {
  return (
    <div className='App app-container'>
      <Router>
        <EmptySpace height='20px' />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/app' element={<div>App</div>} />
          <Route path='/others' element={<Others/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
