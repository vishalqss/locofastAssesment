import React from 'react';
import CloseIcon from "../../../view/CloseIcon.svg";


const Header = (props) => {
    return <div className={"header"}>
        <span>
            <p>Material Details</p>
            <img src={CloseIcon} className="App-logo" alt="X" onClick={props.toggleOpen}/>
        </span>
    </div>
}

export default Header;