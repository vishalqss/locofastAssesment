import CloseIcon from "../../../view/CloseIcon.svg";
import React from "react";


const Header = (props) => {
    return <div className={"header"}>
        <span>
            <p>Material Details</p>
            <img src={CloseIcon} className="App-logo" alt="logo" onClick={props.toggleOpen}/>
        </span>
    </div>
}

export default Header;