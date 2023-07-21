import './SideMenu.css'

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
        <div id="aboutMe-text" style={styles.container}>
                <p className="name-text reveal-typeText">Minh Dao Nguyen</p>
                <p className="reveal-typeText aboutMe-text">
                    Texas A&M Computer Science
                </p>
                <p className="reveal-typeText aboutMe-text">
                    Software Engineer, ML, Data analytics.
                </p>
            </div>
    );
}

export default Introduction;