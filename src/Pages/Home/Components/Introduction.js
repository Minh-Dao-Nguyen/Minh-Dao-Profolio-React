import './SideMenu.css'
import {motion} from 'framer-motion'

const styles ={
    container: {
        textAlign: 'left',
        display: 'block',
        fontSize: '15px',
        lineHeight: '30px',
        marginTop: '130px', 
        color: 'white',
    },
}


function Introduction() {
    return(
        <motion.div id="aboutMe-text" style={styles.container}
         initial={{x: '-100vw'}}
         animate={{x:0}}
         transition={{type: 'tween'}}>
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Software Engineer, ML, Data analytics.
                </p>
            </motion.div>
    );
}

export default Introduction;