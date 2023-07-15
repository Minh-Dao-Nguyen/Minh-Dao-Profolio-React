import nameLogo from '../../Images/Logo/name-logo.png'
import './NavBar.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';

const NameLogo = () => {
    return(
        <div id="nameLogo-cont">
                    <img id="nameLogo-img" src={nameLogo} alt='name logo' />
                </div>
    );
}

function NavBar() {
    return (
        <div id="nav-container">
            <nav id="navBar">
                <div className="ul-cont">
                    <ul id="navLi-container">
                        <li className="nav-li">
                            <Link to="/" className='link-style'>Home</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/projects" className='link-style'>Projects</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/app" className='link-style'>App</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/photography&art" className='link-style'>Photography/Art</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;