import React, {useState} from 'react';
import cn from 'classnames';


const Select = ({name, options, placeholder, value, className, isDisabled, onChange}) => {
    let optionList = [],
        [open, setOpen] = useState(false);

    const onSelect = (value) => {
        setOpen(false);
        onChange({target: {name, value}})
    }
    options.forEach((op, index) => {
        optionList.push(<li key={name + '-option-' + index} className={cn(op.value === value ? "select" : "")} onClick={onSelect.bind(this, op.value)}>
            {op.image && <img src={op.image} alt={""}/>} <span className={'label'}>{op.value}</span> {op.id && <span className={'id'}>{op.id}</span>}</li>)
    });

    return(
        <div className={cn("customSelect", isDisabled ? "disabled" : "")} onClick={setOpen.bind(this, !open)}>
            <input className={className} value={value} placeholder={placeholder} readOnly={true}/>
            {open && <div className="optionList">
                <ul className={cn("list", !optionList.length ? "hidden" : "")}>
                    {optionList}
                </ul>
            </div>}
        </div>
    )
};

export default Select;
