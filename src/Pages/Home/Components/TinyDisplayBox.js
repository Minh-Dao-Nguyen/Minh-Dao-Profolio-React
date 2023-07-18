import textColor from "../../../styles/Color";


const styles = {
    container: {
        textAlign: 'left',
        marginBottom: '100px',
    },
    titaleText: {
        color: textColor.MainBlue,
        fontSize: '20px',
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
    descriptionContainer: {
        color: 'white',
        marginTop: '10px',
        lineHeight: '30px',
        width: '700px',
    },
    toolsContainer: {
        display: 'flex',
        width: '100%',        
        justifyContent: 'left',
        flowDirection: 'row',
        paddingTop: '10px',
    },
    toolCont: {
        color: 'white',
        backgroundColor: '#231f63',
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


function TinyDisplayBox(props) {
    return ( 
        <div style={styles.container}>
            <p style={styles.titaleText}> {props.title} </p>
            <div style={styles.lineBreak}>
                <hr></hr>
            </div>
            <div style={styles.descriptionContainer}>
                {props.description}
            </div>
            <div style={styles.toolsContainer}>
                {makeToolsList(props.tools)}
            </div>
        </div>
    );
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


export default TinyDisplayBox;