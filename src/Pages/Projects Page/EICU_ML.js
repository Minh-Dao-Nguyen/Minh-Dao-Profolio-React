import textColor from "../../styles/Color";
import doc from "./Documents/ML Report.pdf"

const styles = {
    container: {
        paddingTop: '50px',
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    titleText: {
        color: textColor.MainBlue,
        fontSize: '30px',
    },
    linkButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        
    },
    linkButton: {
        textDecoration: 'none',
        color: 'white', 
        fontSize: '20px',
        border: '1px solid white',
        width: '100px',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    },
    descriptionText: {
        color: 'white',
        fontSize: '18px',
    }

}


function EICU_ML() {
  return (
    <div style={styles.container}>
        <div style={styles.titleContainer}>
            <p style={styles.titleText}>
                eICU Mortality Prediction using Machine Learning
            </p>
        </div>
        <div style={styles.linkButtonContainer}>
            <a href="https://github.com/Minh-Dao-Nguyen/Machine-Learning-eICU-mortality-prediction"
            style={styles.linkButton}> 
            <div>
                GitHub
            </div>
            </a>
            <a href={doc} target="_blank"
               style={styles.linkButton}>
                <div>
                    Doccument
                </div>
            </a>
        </div>
        <div style={styles.descriptionText}>
            <p> This is a Machine Learning model built to predict patient mortality using data from eICU.</p>
            <p> The program is written using Python and Jupyter notebook. Documentation of the development process is written in LaTex</p>
        </div>
    </div>
  );
}

export default EICU_ML;