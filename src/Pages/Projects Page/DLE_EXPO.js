import textColor from "../../styles/Color";

const styles = {
    container: {
        paddingTop: '50px',
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    titleText: {
        color: textColor.MainBlue,
        fontSize: '30px',
    },
    linkButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        
    },
    linkButton: {
        textDecoration: 'none',
        color: 'white', 
        fontSize: '20px',
        border: '1px solid white',
        width: '100px',
        borderRadius: '10px',
        padding: '10px',
    }

}


function DLE_EXPO() {
  return (
    <div style={styles.container}>
        <div style={styles.titleContainer}>
            <p style={styles.titleText}>
            Digital Learning Expo 2022 Website
            </p>
        </div>
        <div style={styles.linkButtonContainer}>
            <a href="https://lms.tamu.edu/Digital-Learning-Expo-2022"
            style={styles.linkButton}> 
            <div>
                Website
            </div>
            </a>
        </div>
    </div>
  );
}

export default DLE_EXPO;