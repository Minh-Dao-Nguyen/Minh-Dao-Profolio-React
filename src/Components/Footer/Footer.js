import './Footer.css'
import LinkedinLogo from '../../Images/Logo/linkIn-logo.png'

const Footer = () => { 
    return (
    <div id="footer">
        <div id="footer-location">
            <div className="footer-cont">
                <p className="footer-title">
                    Location
                </p>
                <p className="footer-text">
                    College Station, TX
                </p>
            </div>
        </div>
        <div id="footer-social">
            <div className="footer-cont">
                <p className="footer-title">
                    Connect with me
                </p>
                <a href="https://www.linkedin.com/in/minhdaonguyen/">
                    <img src = {LinkedinLogo} className="footer-logo" alt='LinkedIn logo'/>
                </a>
            </div>
        </div>
        <div id="footer-contact">
            <div className="footer-cont">
                <p className="footer-title"> Contact me</p>
                <p className="footer-text hidden"> 323-244-5599</p>
                <p className="footer-text"> minhdao@tamu.edu</p>
            </div>
        </div>
    </div>
    );
}

export default Footer;
