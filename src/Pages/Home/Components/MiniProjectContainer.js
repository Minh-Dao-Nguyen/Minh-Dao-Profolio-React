import TinyDisplayBox from "./TinyDisplayBox";
import ShortProjectDescription
 from "../../../Text Sources/ShortProjectDescription";
function MiniProjectContainer () {
    return (
        <div>
            <TinyDisplayBox title="Machine Learning ICU mortality prediction"
            description={ShortProjectDescription.MLICU}
            tools={['Python', 'Latex']}/>
            <TinyDisplayBox title="Personal Website"
            description={ShortProjectDescription.PersonalWeb}
            tools={['React.js', 'AWS', 'Docker']}/>

        </div>
    );
}


export default MiniProjectContainer;