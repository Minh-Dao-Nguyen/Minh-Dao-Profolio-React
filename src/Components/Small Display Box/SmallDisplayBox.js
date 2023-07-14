import "./SmallDisplayBox.css"

function SmallDisplayBox(props) {
    return (
        <div className="small-display-box">
            <p className="title-text"> {props.title} </p>
            <p className="description-text"> {props.description} </p>
            <div className="tools-container">

            </div>
        </div>
    )
}

export default SmallDisplayBox;