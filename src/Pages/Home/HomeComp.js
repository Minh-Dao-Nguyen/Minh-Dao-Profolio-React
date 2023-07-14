import "./Home.css";
import facePhoto from "../../Images/Image/face-photo.png";
import SmallDisplayBox from "../../Components/Small Display Box/SmallDisplayBox";


export function aboutMe() {
    return (
        <div className="aboutMe-cont">
            <div id="aboutMe-text">

            </div>
        </div>
    );
}

export function MainButtons() {
    return (
        <div className="center-div">
            <div className="reveal-after-typeText resume-button-cont border-reveal">
                <a className="resume-button reveal-after-typeText" href=""> Resume </a>
            </div>
            <div className="reveal-after-typeText resume-button-cont border-reveal">
                <a className="reveal-after-typeText resume-button" href="">
                    Projects &lt;/&gt;
                </a>
            </div>
        </div>
    );
}

export function ExperienceCont() {
    return(
        <div className="experience-container">
            <SmallDisplayBox title="Resi" description="to be determined"/>
            </div>
    );
}



