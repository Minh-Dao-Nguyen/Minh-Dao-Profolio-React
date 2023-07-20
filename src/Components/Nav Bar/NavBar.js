import './NavBar.css'
import { NavLink } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
    },
    navStyle: {
        textDecoration: 'none',
        color: '#0078d7',
        fontSize: '20px',
        width: '100px',
        display: 'block',
        borderRadius: "12px",
        marginRight: '40px',
        height: '30px',

    },
    currentPage: {
        backgroundColor: "#2da9ad",
        fontweight: 'bold',
    },
}



function NavBar() {

    return (
        <div id="nav-container">
            <nav id="navBar">
                <div style={styles.container}>
                    <NavLink to="/" style={styles.navStyle} activeStyle={styles.currentPage} >Home</NavLink>
                    <NavLink to="/projects" style={styles.navStyle} activeStyle={styles.currentPage}>Projects</NavLink>
                    <NavLink to="/others" style={styles.navStyle} activeStyle={styles.currentPage}>Others</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;