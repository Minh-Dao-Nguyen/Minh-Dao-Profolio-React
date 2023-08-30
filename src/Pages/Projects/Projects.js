import ProjectContainer from "./Components/ProjectContainer";
import "../../styles/PhoneScreen.css"

const styles = {
    ProjectContainer: {
        paddingTop: '50px',
        paddingRight: '100px',
        paddingLeft: '100px',
        paddingBottom: '50px',
        backgroundColor: '#121212',
    }
}

function Projects () {
    return (
        <div style={styles.ProjectContainer} className="small_padding">
            <ProjectContainer/>
        </div>
    );
}

export default Projects;