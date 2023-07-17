import textColor from "../../../styles/Color";


const styles = {
    container: {
        textAlign: 'center',
        marginBottom: '100px',
        width: '500px',
        padding: '30px',
        margin: '50px',
    },
    titaleText: {
        color: textColor.MainBlue,
        fontSize: '25px',
        fontWeight: 'bold',
    },
    lineBreakContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    lineBreak: {
        width: '600px',
    },
    descriptionText: {
        color: 'white',
        marginTop: '10px',
        lineHeight: '30px',
        fontSize: '18px',
    },
    toolsContainer: {
    }
}

function ProjectContainer(props){
    return (
        <div className={styles.container}>
            <p style={styles.titaleText}> {props.title} </p>
            <div style={styles.lineBreakContainer}>
                <hr style={styles.lineBreak}></hr>
            </div>
            <p style={styles.descriptionText}> {props.description}</p>
            <div className="tools-container">

            </div>
        </div>
    );
}

export default ProjectContainer;