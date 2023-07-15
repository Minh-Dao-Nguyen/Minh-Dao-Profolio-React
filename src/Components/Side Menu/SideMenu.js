import "./SideMenu.css";
import LinkedinLogo from '../../Images/Logo/linkIn-logo.png'

function SideMenu() {
    return (
        <div className="sideMenu-container">
            <div id="aboutMe-text">
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Software Engineer, Machine Learning, Data analytics.
                </p>
            </div>
            <div className="sections-container">
                <ul>
                    <li className="section-option active"> About </li>
                    <li className="section-option"> Experience </li>
                    <li className="section-option"> Projects </li>
                    <li className="section-option"> Others </li>
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