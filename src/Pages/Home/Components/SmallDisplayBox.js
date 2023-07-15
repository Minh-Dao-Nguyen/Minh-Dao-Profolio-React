import React from 'react';
import textColor from "../../../styles/Color";

const styles = {
    container: {
        textAlign: 'left',
        marginBottom: '100px',
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
        color: 'gray',
        fontSize: '18px',
    },
    descriptionText: {
        color: 'white',
        marginTop: '10px',
        lineHeight: '30px',
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
            <div style={styles.descriptionText}>
                {makeDescriptionList(props.description)}
            </div>
            <div className="tools-container">

            </div>
        </div>
    )
}

function makeDescriptionList(array) {
    return (
        <div>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

function makeToolsList(array) {
    return (
        <div>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}


export default SmallDisplayBox;