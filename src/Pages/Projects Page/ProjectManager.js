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


function ProjectManager() {
  return (
    <div style={styles.container}>
        <div style={styles.titleContainer}>
            <p style={styles.titleText}>
                Personal-Project-To-do-List
            </p>
        </div>
        <div style={styles.linkButtonContainer}>
            <a href="https://github.com/Minh-Dao-Nguyen/Personal-Project-To-do-List"
            style={styles.linkButton}> 
            <div>
                GitHub
            </div>
            </a>
        </div>
    </div>
  )
}

export default ProjectManager;