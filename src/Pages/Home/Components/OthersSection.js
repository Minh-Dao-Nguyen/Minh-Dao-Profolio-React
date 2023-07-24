import { Link } from "react-router-dom";

const styles ={
    container: {
        marginTop: '100px',
    },
    buttonContainer: {
        color: 'white',
        width: '200px',
        border: '1px solid white',
        padding: '10px',
        borderRadius: '10px',
    },
    link: {
        textDecoration: 'none',
    }
}

function OthersSection () {
    return (
        <div style={styles.container}>
            <Link style={styles.link} to="/others/photography" onClick={() => window.scroll(0, 0 )}>
                <div style={styles.buttonContainer}> PhotoGraphy </div>
            </Link>
        </div>
    );
}


export default OthersSection;