import "./SideMenu.css";
import LinkedinLogo from '../../../Images/Logo/linkIn-logo.png'

function SideMenu(props) {

    return (
        <div className="sideMenu-container">
            <div id="aboutMe-text">
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Software Engineer, ML, Data analytics.
                </p>
            </div>
            <div className="sections-container">
                <ul>
                    <li className={`section-option ${props.section === 'about' ? 'section-active' : ''}`}>
                        About
                    </li>
                    <li className={`section-option ${props.section === 'experience' ? 'section-active' : ''}`}>
                        Experience
                    </li>
                    <li className={`section-option ${props.section === 'project' ? 'section-active' : ''}`}>
                        Projects
                    </li>
                    <li className={`section-option ${props.section === 'other' ? 'section-active' : ''}`}>
                        Others
                    </li>
                </ul>
            </div>
            <div className="icons-container">
                <a href="https://www.linkedin.com/in/minhdaonguyen/">
                    <img src={LinkedinLogo} className="linkIn-logo" alt='LinkedIn logo' />
                </a>
            </div>
        </div>
    )
}


export default SideMenu;