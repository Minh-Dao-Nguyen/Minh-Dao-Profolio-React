import SmallDisplayBox from "./SmallDisplayBox";

const description = {
    resi: '', 
    academicInitiative: '',
    CTE: '', 
}


function ExperienceContainer(){
    return(
        <div className="experience-container">
            <SmallDisplayBox title="Resi" jobTitle="Software Engineer Intern" description="to be determined"/>
            </div>
    );
}

export default ExperienceContainer;