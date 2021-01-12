import React from 'react';
import cn from "classnames";
import '../../../css/App.scss';

function Button(props) {
    const {text, okBtn, cssClass = '', onClick, disabled} = props;

    return <button className={cn("button", okBtn ? "okBtn" : "cancelBtn", disabled && 'disabled', cssClass)} disabled={disabled} onClick={onClick}>{text}</button>
}

export default Button;