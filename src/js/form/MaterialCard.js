import React from 'react';
import cn from "classnames";
import Button from '../common/components/Button';
import {COLORS_AVAILABLE, COMMON_DESC} from '../common/constants'
import '../../css/App.scss';

function MaterialCard(props) {
    const {id, source, desc, isSelected, onClick, toggleOpen} = props;

    return (<span className={cn("card", isSelected && "selectedCard")} onClick={onClick}>
                <span className={"imgWrapper"}>
                    <img src={source} className="App-logo" alt="logo"/>
                    {isSelected && <em>ID: {id}</em>}
                    </span>
                <p>{desc || COMMON_DESC}</p>
                <em>{COLORS_AVAILABLE}</em>
                {isSelected && <Button okBtn={true} text={"Add"} onClick={toggleOpen} cssClass={"addButton"}/>}
            </span>);
}

export default MaterialCard;