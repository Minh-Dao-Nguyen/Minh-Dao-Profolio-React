import ProjectContainer from "./Components/ProjectContainer";

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
            <ProjectContainer/>
        </div>
    );
}

export default Projects;