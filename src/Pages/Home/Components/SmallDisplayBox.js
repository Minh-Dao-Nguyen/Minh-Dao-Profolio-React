import textColor from "../../../styles/Color";

const styles = {
    container: {
        textAlign: 'left',
    },
    titaleText: {
        color: textColor.MainBlue,
        fontSize: '25px',
        fontWeight: 'bold',
    },
    lineBreak: {
        width: '200px',
        textAlign: 'left',
    },
    jobTitle: {
        color: 'light-gray',
    },
    descriptionText: {
        color: 'white',
        marginTop: '10px',

    },
    toolsContainer: {
    }
}

function SmallDisplayBox(props) {
    return (
        <div style={styles.container}>
            <p style={styles.titaleText}> {props.title} </p>
            <div style={styles.lineBreak}>
                <hr></hr>
            </div>
            <p style={styles.jobTitle}>{props.jobTitle}</p>
            <p style={styles.descriptionText}> {props.description} </p>
            <div className="tools-container">

            </div>
        </div>
    )
}

export default SmallDisplayBox;