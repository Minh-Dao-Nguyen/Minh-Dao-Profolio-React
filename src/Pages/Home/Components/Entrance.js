//import backgroundGif from '../../../Images/Gif/background.gif'
import techEarthGif from '../../../Images/Gif/techEarth.gif'
import Introduction from './Introduction';

const styles = {
    container: {
        width: '100%',
        marginTop: '50px',
        display: 'flex',
        
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
            <img style={styles.bgGif} src={techEarthGif} alt="background gif"/>
        </div>
    );
}

export default Entrance;