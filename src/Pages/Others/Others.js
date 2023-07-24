import { Link, Outlet } from "react-router-dom";

const styles = {
    container: {
        paddingTop: '50px',
    },
    linkButton: {
        textDecoration: 'none',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: '200px',
        border: '1px solid white',
        fontSize: '20px',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
    },
}

function Others() {
    return (
        <div style={styles.container}>
            <div style={styles.buttonContainer}>
                <Link to='/others/photography' style={styles.linkButton}>
                    <div style={styles.button}>Photography</div>
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Others;