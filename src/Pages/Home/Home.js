import { useState, useEffect } from "react";

import Entrance from "./Components/Entrance";
import AboutMe from "./Components/AboutMe";
import SideMenu from "./Components/SideMenu";
import ExperienceContainer from "./Components/ExperienceContainer";
import MiniProjectContainer from "./Components/MiniProjectContainer";

const styles = {
    homeContainer: {
        paddingBottom: '80px',
        paddingTop: '40px',
        paddingLeft: '100px',
        paddingRight: '100px',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

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
        <div style={styles.homeContainer}>
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