import React from 'react';
import textColor from "../../../styles/Color";

const styles = {
    container: {
        textAlign: 'left',
        marginBottom: '50px',
    },
    titleText: {
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
        display: 'flex',
        width: '100%',        
        justifyContent: 'left',
        flowDirection: 'row',
        paddingTop: '10px',
    },
    toolCont: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: '#01FF8E',
        marginRight: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        opacity: '0.9',
    }
}

function SmallDisplayBox(props) {
    return (
        <div style={styles.container}>
            <p style={styles.titleText}> {props.title} </p>
            <div style={styles.lineBreak}>
                <hr></hr>
            </div>
            <p style={styles.jobTitle}>{props.jobTitle}</p>
            <div style={styles.descriptionText}>
                {makeDescriptionList(props.description)}
            </div>
            <div style={styles.toolsContainer}>
                {makeToolsList(props.tools)}
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
        <>
                {array.map((item, index) => (
                    <div style={styles.toolCont} key={index}>{item}</div>
                ))}
        </>
    )
}


export default SmallDisplayBox;