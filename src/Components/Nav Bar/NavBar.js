import nameLogo from '../../Images/Logo/name-logo.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div id="nav-container">
        <nav id="navBar">
            <div id="nameLogo-cont">
                <img id="nameLogo-img" src={nameLogo} alt='name logo'/>
            </div>
            <ul id="navLi-container">
                <li className="nav-li"><a className="atr-style" href="">Photography / Art</a></li>
                <li className="nav-li"><a className="atr-style" href="">Apps</a></li>
                <li className="nav-li"><a class="atr-style" href="">Projects</a></li>
                <li className="nav-li"><a className="atr-style" href="">Home</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default NavBar;