import SmallDisplayBox from "./SmallDisplayBox";
import ExperienceDescription from "../../../Text Sources/ExperienceDescription";

const tools = {
    resi: ['Java', 'Dockers', 'Jenkins', 'Git', 'MySQL', 'TypeScript', 'React'],
    academicInitiative: [],
}

function ExperienceContainer(){
    return(
        <div className="experience-container">
            
            <SmallDisplayBox title="Resi Media, LLC" 
            jobTitle="Software Engineer Intern" 
            description={ExperienceDescription.resi}
            tools = {tools}/>

            <SmallDisplayBox title="Texas A&M Office for Academic Innovation" 
            jobTitle="Support Specialist (Front-End Development and Data Analytics" 
            description={ExperienceDescription.academicInitiative}/>
            </div>
    );
}

export default ExperienceContainer;