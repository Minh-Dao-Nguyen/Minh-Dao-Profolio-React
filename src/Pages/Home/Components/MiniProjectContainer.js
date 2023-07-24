import TinyDisplayBox from "./TinyDisplayBox";
import ShortProjectDescription from "../../../Text Sources/ShortProjectDescription";
import ProjectPageLink from "../../Page Link/ProjectPageLink";
import { Link } from "react-router-dom";
import gotoIcon from "../../../Images/icon/gotoIcon.png";

const styles = {
    linkContainer: {
        display: 'flex',
        justifyContent: 'left',
    },
    gotoIcon: {
        width: '25px',
        height: '25px',
        marginTop: '15px',
        marginLeft: '15px',
    },
    linkText: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '17px',
    }
}


function MiniProjectContainer () {
    return (
        <div>
            <TinyDisplayBox title="Machine Learning ICU mortality prediction"
            description={ShortProjectDescription.MLICU}
            tools={['Python', 'Latex']}
            link={ProjectPageLink.eICU_ML}
            />
            <TinyDisplayBox title="Personal Website"
            description={ShortProjectDescription.PersonalWeb}
            tools={['React.js', 'AWS', 'Docker']}
            link={ProjectPageLink.PersonalWeb}
            />
            <div style={styles.linkContainer}>
                <Link style={styles.linkText} to={"/projects"} onClick={() => window.scrollTo(0, 0)}>
                    View Projects Archive<img src={gotoIcon} style={styles.gotoIcon} alt="goto icon" />
                </Link>
            </div>
        </div>
    );
}


export default MiniProjectContainer;