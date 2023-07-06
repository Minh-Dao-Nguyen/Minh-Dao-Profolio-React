import "./Home.css";
import {aboutMe} from "./HomeComp";
import {aboutMe2} from "./HomeComp";


const Home = () => {
    return (
        <div className="center-div home-container">
           {aboutMe()}
           {aboutMe2()}
        </div>
                
    );
 }

 export default Home;