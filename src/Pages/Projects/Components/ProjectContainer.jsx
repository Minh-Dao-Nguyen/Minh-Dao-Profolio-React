import textColor from "../../../styles/Color";
import ProjectBox from "./ProjectBox";
import folder from "../../../Images/Image/folder.png";
import TinyProjectDescription from "../../../Text Sources/TinyProjectDescription";

const styles = {
    container: {
        display: 'block',
        marginBottom: '100px',

    },
    boxContainer: {
        display: 'flex',
        flowDirection: 'row',
        justifyContent: 'center',
    },
    titaleText: {
        color: textColor.MainBlue,
        fontSize: '25px',
        fontWeight: 'bold',
    },
    lineBreakContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    lineBreak: {
        width: '600px',
    },
    descriptionText: {
        color: 'white',
        marginTop: '10px',
        lineHeight: '30px',
        fontSize: '18px',
    },
    toolsContainer: {
    }
}

function ProjectContainer(props) {
    return (
        <div style={styles.container}>
            <div style={styles.boxContainer}>
                <ProjectBox title="eICU mortality prediction"
                    image={folder}
                    description={TinyProjectDescription.eICUML}
                    link="/eICU-ML"
                />
                <ProjectBox title="Restaurant’s dishes managing system"
                    image={folder}
                    description={TinyProjectDescription.dishManage}
                    link="/dish-manage"
                />
                <ProjectBox title="C++ Custom Libraries"
                    image={folder}
                    description={TinyProjectDescription.cPlusLib}
                    link="/lib-C++"
                />
            </div>
            <div style={styles.boxContainer}>
                <ProjectBox title="Enterprise Email Communication"
                    image={folder}
                    description={TinyProjectDescription.emailCom}
                    link="/email-communication"
                />
                <ProjectBox title="Digital Learning Expo 2022 Website"
                    image={folder}
                    description={TinyProjectDescription.expo22}
                    link="/DLE-2022"
                />
                <ProjectBox title="University Proctoring System Evaluation"
                    image={folder}
                    description={TinyProjectDescription.uniProtor}
                    link="/proctoring-system"
                />
            </div>
        </div>
    );
}

export default ProjectContainer;