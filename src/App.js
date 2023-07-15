import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Nav Bar/NavBar";
import Home from "./Pages/Home/Home.js";
import Projects from "./Pages/Projects/Projects.js";
import EmptySpace from './Components/Empty Space/EmptySpace';

function App() {
  return (
    <div className='App app-container'>
      <Router>
        <EmptySpace height='20px' />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
