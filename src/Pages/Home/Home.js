import { useState, useEffect } from "react";
import Entrance from "./Components/Entrance";
import AboutMe from "./Components/AboutMe";
import SideMenu from "./Components/SideMenu";
import ExperienceContainer from "./Components/ExperienceContainer";
import MiniProjectContainer from "./Components/MiniProjectContainer";
import OthersSection from "./Components/OthersSection";
import "../../styles/PhoneScreen.css"

const styles = {
    container: {
        display: 'block',
    },
    homeContainer: {
        paddingBottom: '80px',
        paddingTop: '40px',
        paddingLeft: '100px',
        paddingRight: '100px',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    sideMenuContainer: {
        marginRight: '100px',
    },

}

function Home() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 1000) {
                setActiveSection('about');
            } else if (currentScrollY < 1500) {
                setActiveSection('experience');
            } else if (currentScrollY < 2000) {
                setActiveSection('project');
            } else {
                setActiveSection('other');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="main_container">
            <div style={styles.container}>
                <Entrance />
            </div>
            <div  style={styles.container}>
                <div style={styles.homeContainer}>
                    <div style={styles.sideMenuContainer} className="remove_margin_padding">
                        <SideMenu section={activeSection} />
                    </div>
                    <div>
                        <AboutMe />
                        <ExperienceContainer />
                        <MiniProjectContainer />
                        <OthersSection/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;