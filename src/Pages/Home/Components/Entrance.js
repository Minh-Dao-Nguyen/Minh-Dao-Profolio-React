//import backgroundGif from '../../../Images/Gif/background.gif'

import Introduction from './Introduction';
import "../../../styles/PhoneScreen.css";
import LogoEntrance from './LogoEntrance';

const styles = {
    container: {
        width: '100%',
        marginTop: '50px',
        display: 'flex',
        marginBottom: '50px',
        justifyContent: 'center',
        //backgroundImage: `url(${backgroundGif})`,
        //height: '100vh',
    },
    bgGif: {
        width: '500px',
        borderRadius: '50px',
        marginLeft: '150px',
    },
}    


function Entrance() {
    return (
        <div style={styles.container}>
            <Introduction />
            <LogoEntrance />
        </div>
    );
}

export default Entrance;