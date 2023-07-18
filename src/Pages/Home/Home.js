import { useState, useEffect } from "react";

import "./Home.css";
import AboutMe from "./Components/AboutMe";
import SideMenu from "./Components/SideMenu";
import ExperienceContainer from "./Components/ExperienceContainer";
import MiniProjectContainer from "./Components/MiniProjectContainer";

function Home() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 500) {
                setActiveSection('about');
            } else if (currentScrollY < 1000) {
                setActiveSection('experience');
            } else if (currentScrollY < 1500) {
                setActiveSection('project');
            } else {
                setActiveSection('other');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="home-container">
            <div>
                <SideMenu section={activeSection}/>
            </div>
            <div>
                <AboutMe />
                <ExperienceContainer />
                <MiniProjectContainer/>
            </div>
        </div>
    );
}

export default Home;