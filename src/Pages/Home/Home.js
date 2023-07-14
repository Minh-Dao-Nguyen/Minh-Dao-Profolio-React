import "./Home.css";
import { aboutMe } from "./HomeComp";
import SideMenu from "../../Components/Side Menu/SideMenu";
import { ExperienceCont } from "./HomeComp";


function Home() {
    return (
        <div className="home-container">
            <div>
                <SideMenu />
            </div>
            <div>
                {aboutMe()}
                <ExperienceCont />
            </div>
        </div>
    );
}

export default Home;