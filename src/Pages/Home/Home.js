import "./Home.css";
import { aboutMe } from "./HomeComp";
import { stickMenu } from "./HomeComp";


function Home() {
    return (
        <div className="home-container">
            {stickMenu()}
            {aboutMe()}
        </div>
    );
}

export default Home;