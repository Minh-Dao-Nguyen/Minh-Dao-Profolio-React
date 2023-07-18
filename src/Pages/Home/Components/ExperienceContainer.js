import SmallDisplayBox from "./SmallDisplayBox";
import ExperienceDescription from "../../../Text Sources/ExperienceDescription";
import tools from "../../../Text Sources/ExperienceTools";

function ExperienceContainer(){
    return(
        <div>
            
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