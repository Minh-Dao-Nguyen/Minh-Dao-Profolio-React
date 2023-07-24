import IMG_0080 from '../../../Images/Photography/IMG_0080.JPG';
import IMG_0222 from '../../../Images/Photography/IMG_0222.JPG';
import IMG_0417 from '../../../Images/Photography/IMG_0417.JPG';
import IMG_0365 from '../../../Images/Photography/IMG_0365.JPG';
import IMG_0283 from '../../../Images/Photography/IMG_0283.JPG';
import IMG_0629 from '../../../Images/Photography/IMG_0629.JPG';
import IMG_1047 from '../../../Images/Photography/IMG_1047.JPG';
import IMG_1102 from '../../../Images/Photography/IMG_1102.JPG';
import IMG_0841 from '../../../Images/Photography/IMG_0841.JPG';
import IMG_4270 from '../../../Images/Photography/IMG_4270.JPG';
import IMG_4275 from '../../../Images/Photography/IMG_4275.JPG';
import IMG_4282 from '../../../Images/Photography/IMG_4282.JPG';
import IMG_4297 from '../../../Images/Photography/IMG_4297.JPG';
import IMG_5375 from '../../../Images/Photography/IMG_5375.JPG';
import IMG_5380 from '../../../Images/Photography/IMG_5380.JPG';
import IMG_1081 from '../../../Images/Photography/IMG_1081.JPG';
import IMG_0191 from '../../../Images/Photography/IMG_0191.JPG';
import IMG_5372 from '../../../Images/Photography/IMG_5372.JPG';


const styles = {    
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#121212',
    }, 
    photo: {
        width: '400px',
        margin: '10px',
    }
}

function PhotographyGallery () {
    return (
        <div style={styles.container}>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0080} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0222} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0417} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0365} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0283} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0629} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_1047} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_1102} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0841} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_4270} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_4275} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_4282} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_4297} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_5375} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_5380} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_1081} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_0191} alt=""/>
            </div>
            <div class="photo-cont">
                <img style={styles.photo} src={IMG_5372} alt=""/>
            </div>
        </div>
    );
}

export default PhotographyGallery;