import SmallDisplayBox from "./SmallDisplayBox";
import ExperienceDescription from "../../../Text Sources/ExperienceDescription";
import tools from "../../../Text Sources/ExperienceTools";

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

function ExperienceContainer(){
    return(
        <div style={styles.container}>
            
            <SmallDisplayBox title="Resi Media, LLC" 
            jobTitle="Software Engineer Intern" 
            description={ExperienceDescription.resi}
            tools = {tools.Resi}/>

            <SmallDisplayBox title="Texas A&M Office for Academic Innovation" 
            jobTitle="Support Specialist (Front-End Development and Data Analytics)" 
            description={ExperienceDescription.academicInitiative}
            tools = {tools.AcademicInnovation}/>
            </div>
    );
}

export default ExperienceContainer;