import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Nav Bar/NavBar";
import Home from "./Pages/Home/Home.js";
import Projects from "./Pages/Projects/Projects.js";

function App() {
  return (
    <div className='App app-container'>
      <Router>
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
