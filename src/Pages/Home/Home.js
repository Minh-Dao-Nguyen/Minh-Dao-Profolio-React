import "./Home.css";
import AboutMe from "./Components/AboutMe";
import SideMenu from "../../Components/Side Menu/SideMenu";
import ExperienceContainer from "./Components/ExperienceContainer";

function Home() {
    return (
        <div className="home-container">
            <div>
                <SideMenu />
            </div>
            <div>
                <AboutMe />
                <ExperienceContainer />
            </div>
        </div>
    );
}

export default Home;