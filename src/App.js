import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Nav Bar/NavBar";
import Home from "./Pages/Home/Home.js";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
          <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
