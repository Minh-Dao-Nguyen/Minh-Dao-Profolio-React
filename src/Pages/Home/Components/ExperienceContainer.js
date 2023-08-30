import SmallDisplayBox from "./SmallDisplayBox";
import ExperienceDescription from "../../../Text Sources/ExperienceDescription";
import tools from "../../../Text Sources/ExperienceTools";
import RevealBottomUp from "../../../Animations/RevealBottomUp.tsx";
import "../../../styles/PhoneScreen.css";

const styles = {
    container: {
        backgroundColor: '#222222',
        boxShadow: '50px rgba(0,0,0,0.75)',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '1px',
        borderRadius: '20px',
        marginBottom: '100px',
    }
}

function ExperienceContainer() {
    return (
        <RevealBottomUp>
            <div style={styles.container} className="main_container container_seperator">
                <RevealBottomUp>
                    <SmallDisplayBox title="Resi Media, LLC"
                        jobTitle="Software Engineer Intern"
                        description={ExperienceDescription.resi}
                        tools={tools.Resi} />
                </RevealBottomUp>
                <RevealBottomUp>
                    <SmallDisplayBox title="Texas A&M Office for Academic Innovation"
                        jobTitle="Support Specialist (Front-End Development and Data Analytics)"
                        description={ExperienceDescription.academicInitiative}
                        tools={tools.AcademicInnovation} />
                </RevealBottomUp>
            </div>
        </RevealBottomUp>
    );
}

export default ExperienceContainer;