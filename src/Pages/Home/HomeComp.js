import "./Home.css";
import facePhoto from "../../Images/Image/face-photo.png";

export const aboutMe = () => {
    return (
        <div className="aboutMe-cont1">
            <div id="aboutMe-text">
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Knowledge and Experiment: Software Engineer, Full-Stack Developer, Machine Learning, Data analytics.
                </p>
            </div>
            <div className="center-div">
                        <div className="reveal-after-typeText resume-button-cont border-reveal">
                            <a className="resume-button reveal-after-typeText" href=""> Resume </a>
                        </div>
                    </div>
        </div>
    );
}

export const aboutMe2 = () => {
    return (
        <div className="aboutMe-cont2">
                    <img id="face-photo" src={facePhoto} className="reveal-after-typeText"/>
                    <div className="center-div">
                        <div className="reveal-after-typeText resume-button-cont border-reveal">
                            <a className="reveal-after-typeText resume-button" href="">
                                Projects &lt;/&gt;
                            </a>
                        </div>
                    </div>
                </div>
    );
}
