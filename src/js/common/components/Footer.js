import React from 'react';
import Button from "./Button";


const Footer = (props) => {
    const {values, clearAll, saved, setSaved, toggleOpen} = props;
    let isDisabled = !values ;
    values && Object.keys(values).forEach((key)=>{
        if(!values[key]){
            isDisabled = true;
        }
    });

    return <div className={"footer"}>
        <Button okBtn={true} disabled={isDisabled} text={saved && "Assign To Factory" || "Next"} onClick={saved ? toggleOpen : setSaved.bind(null,true)}/>
        <Button okBtn={false} text={"Back"} onClick={clearAll}/>
    </div>
}

export default Footer;