import backgroundGif from '../../../Images/Gif/background.gif'


const styles = {
    container: {
        width: '100%',
        marginTop: '80px',
        //backgroundImage: `url(${backgroundGif})`,
        //height: '100vh',
    },
    bgGif: {
        width: '1100px',
        marign: '100px',
        borderRadius: '50px',
    },
}    


function Entrance() {
    return (
        <div style={styles.container}>
        </div>
    );
}

export default Entrance;