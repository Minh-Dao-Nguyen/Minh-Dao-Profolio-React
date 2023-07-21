import './NavBar.css'
import { NavLink } from 'react-router-dom';

const styles = {
    container: {
        marginTop: '20px',
        backgroundColor: '#121212',
    },
    navLinkContainer: {
        display: 'flex',
    },
    navBarContainer : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
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
        paddingTop: '10px',
        paddingBottom: '10px',

    },
    currentPage: {
        backgroundColor: "#2da9ad",
        fontweight: 'bold',
        borderRadius: '12px',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
}



function NavBar() {

    return (
        <div style={styles.container}>
            <nav style={styles.navBarContainer}>
                <div style={styles.navLinkContainer}>
                    <NavLink to="/" style={styles.navStyle} activeStyle={styles.currentPage} >Home</NavLink>
                    <NavLink to="/projects" style={styles.navStyle} activeStyle={styles.currentPage}>Projects</NavLink>
                    <NavLink to="/others" style={styles.navStyle} activeStyle={styles.currentPage}>Others</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;