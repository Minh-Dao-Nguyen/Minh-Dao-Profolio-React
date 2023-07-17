import ProjectContainer from "./Components/ProjectContainer";
import ProjectDescription from "../../Text Sources/ProjectDescription";

const styles = {
    ProjectContainer: {
        paddingTop: '50px',
        paddingRight: '100px',
        paddingLeft: '100px',
    }
}

function Projects () {
    return (
        <div style={styles.ProjectContainer}>
            <ProjectContainer title="Peronsal Website" 
            description={ProjectDescription["Personal Website"]}/>
        </div>
    );
}

export default Projects;