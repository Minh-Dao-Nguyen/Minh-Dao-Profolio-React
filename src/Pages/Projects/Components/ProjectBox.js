import { Link } from "react-router-dom";
import textColor from "../../../styles/Color";

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
    imageContainer:{

    },
    image: {
        width: '50px',

    },
    title:{
        color: textColor.MainBlue,
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px',
        fontsize: '25px',
        fontWeight: 'bold',
    },
    linkButton: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '15px',
    },    
}

function ProjectBox(props) {
  return (
    <div style={styles.container}>
        <div>
            <div style={styles.imageContainer}>
                <img style={styles.image} src={props.image} alt="" />
            </div>
        </div>
        <div style={styles.title}>
            {props.title}
        </div>
        <div>
            <Link style={styles.linkButton} to={"/projects" + props.link}>Learn More</Link>
        </div>
    </div>
  );
}

export default ProjectBox;