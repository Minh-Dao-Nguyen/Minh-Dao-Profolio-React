import "./Home.css";
import facePhoto from "../../Images/Image/face-photo.png";


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





