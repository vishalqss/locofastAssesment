import React, {useState} from 'react';
import fileIcon from '../../../view/filePicker.svg';
import '../../../css/App.scss';


const FileUpload = (props) => {

    const {name, value, onChange} = props,
        onFileChange = ({target: {value = ""}} = {}) => {
            onChange({target: {name, value: value.split('\\').pop()}});
        };

    return (<label className="file">
        <input type="file" id="file" name={name} className={"fieldInput custom-file-input"} aria-label="File browser example" onChange={onFileChange}/>
        <input type={"text"} name={name} value={value} className={"fieldInput fake-file-input"}/>
        <img src={fileIcon} className="File-input-icon" alt="logo"/>
    </label>)
};

export default FileUpload