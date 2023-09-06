import MDLogo from "../../../Images/Logo/MD_logo.png";
import "../../../styles/PhoneScreen.css";
import RevealSliding from "../../../Animations/RevealSliding.tsx";

const styles = {
    container: { 
        display: 'block', 
        alignItems: 'center',
        marginLeft: '150px',
    },
    languagesContainer: {
        height: '200px',
    }, 
    nameLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80px',
    },
    nameLogo: {
        width: '160px',
        height: '90px',
    },
    textContainer: {
        width: '100%',
        marginTop: '30px',
    },
    text: {
        color: 'white',
        fonxtSize: '20px',
    },
}

const LogoEntrance = () => {
  return (
    <RevealSliding>
    <div style={styles.container} className="display_off_onSmall">
        <div style={styles.languagesContainer}> 

        </div>
        <div style={styles.nameLogoContainer}>
        <img style={styles.nameLogo} src={MDLogo} alt="name logo"/>
        </div>
        <div style={styles.textContainer}>
            <p style={styles.text}>Turning abstracting solutions to functional code</p>
        </div>
    </div>
    </RevealSliding>
  )
}

export default LogoEntrance;