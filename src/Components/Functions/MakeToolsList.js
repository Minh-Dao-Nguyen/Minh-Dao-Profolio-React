import "../../styles/PhoneScreen.css"

const styles = {
    toolCont: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '10px',
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



function MakeToolsList(array) {
    return (
        <>
                {array.map((item, index) => (
                    <div style={styles.toolCont} key={index}
                    className="remove_margin_padding small_padding container_seperator_Rside" 
                    >
                        {item}</div>
                ))}
        </>
    )
}


export default MakeToolsList;