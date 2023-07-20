import { Link } from "react-router-dom";
import textColor from "../../../styles/Color";
import { useState } from "react";

const styles = {
    container: {
        width: '250px',
        border: '1px solid white',
        borderRadius: '10px',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '40px',
        paddingBottom: '40px',
        margin: '20px',
    },
    imageContainer: {
        display: 'flex',

    },
    image: {
        width: '60px',

    },
    title: {
        color: textColor.MainBlue,
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px',
        fontsize: '25px',
        fontWeight: 'bold',
    },
    description: {
        color: 'white',
        marginBottom: '20px',
        textAlign: 'left',
    },
    linkButtonContainer: {
        display: 'flex',
        marginTop: '40px',
    },
    linkButton: {
        color: '#b4fc83',
        textDecoration: 'none',
        fontSize: '15px',
    },
}

function ProjectBox(props) {
    const [isHover, setIsHover] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        width: '250px',
        backgroundColor: isHover ? '#256566' : '',
        transform: isHover ? 'scale(1.1)' : '',
        transition: 'all 0.2s ease-in-out',
        border: '1px solid white',
        borderRadius: '10px',
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '40px',
        paddingBottom: '40px',
        margin: '20px',
    }

    return (
        <div style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div>
                <div style={styles.imageContainer}>
                    <img style={styles.image} src={props.image} alt="" />
                </div>
            </div>
            <div style={styles.title}>
                {props.title}
            </div>
            <div style={styles.description}>
                {props.description}
            </div>
            <div style={styles.linkButtonContainer}>
                <Link style={styles.linkButton} to={"/projects" + props.link}>Learn More</Link>
            </div>
        </div>
    );
}

export default ProjectBox;