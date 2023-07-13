import "./Home.css";
import facePhoto from "../../Images/Image/face-photo.png";

export function aboutMe() {
    return (
        <div className="aboutMe-cont">
            <div id="aboutMe-text">
                <p className="greeding-text reveal-typeText">Howdy, my name is</p>
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Software Engineer, Full-Stack Developer, Machine Learning, Data analytics.
                </p>
            </div>
        </div>
    );
}

export function MainButtons () {
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

export function stickMenu () {
    return (
        <div >
            
        </div>
    );
}


