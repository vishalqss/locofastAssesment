import React, {useState} from 'react';
import cn from 'classnames';
import Arrow from '../../view/arrow.svg';
import eyeIcon from '../../view/eyeIcon.svg';
import Alert from '../../view/Alert.svg';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import FileUpload from "../common/components/FileUpload";
import Select from "../common/components/Select";
import {ASSIGNMENT_OPTIONS, FACTORY_OPTIONS} from "../common/constants";
import '../../css/App.scss';



const fieldConfig = [
    {name: "factory", label: "Factory", type: "select", dependentField: "", placeHolder: "Select Factory", options: FACTORY_OPTIONS},
    {name: "assignment", label: "Assign for design", type: "select", placeHolder: "Search by Name or Design ID", dependentField: "factory", options: ASSIGNMENT_OPTIONS},
    {name: "quantity", label: "Assign quantity", type: "text", dependentField: "assignment"},
    {name: "inventory", label: "Available Inventory", type: "text", dependentField: "assignment"},
    {name: "challan", label: "Attach Challan", type: "file", dependentField: "quantity"},
];



function MaterialCard(props) {
    const {selected, toggleOpen} = props,
        [values, setValues] = useState({factory: "",assignment: "",quantity: "", inventory: "1,650 meter", challan: ""}),
        [saved, setSaved] = useState(false),
        onChange = ({target: {name, value = ""}} = {}) =>{
            setValues({...values, [name]: value});
        },
        clearAll = () => {
            saved ? setSaved(false) :
            setValues({factory: "",assignment: "",quantity: "", inventory: "1,650 meter", challan: ""});
        }

    return (
        <div className={'mask'}>
            <div className={"addForm"}>
                <Header toggleOpen={toggleOpen}/>
                <div className={"body"}>
                    <div>
                        <img src={selected.source} className="App-logo" alt="logo"/>
                    </div>
                    <div style={{width: '100%', paddingTop: '12px'}}>
                        <img src={Arrow} className="arrowBack" alt="logo"/>
                        <p>Assign To Factory</p>
                        {saved && <img src={Alert} style={{marginTop: "24px"}}/>}

                         {fieldConfig.map(({name, label, type, dependentField, options, placeHolder}) => {
                             let field = null;
                             switch(type){
                                 case "select":
                                     field = <Select name={name} className={"fieldInput"} value={values[name]} onChange={onChange} options={options} placeholder={placeHolder}/>
                                     break;
                                 case "text": field = <input name={name} className={"fieldInput"} style={{border: name === "inventory" && "none"}} value={values[name]} onChange={onChange}/>
                                     break;
                                 case "file": field = <FileUpload value={values[name]} name={name} onChange={onChange}/>;
                                     break;
                                 default :  break;
                             }
                            return (dependentField && !values[dependentField] || (saved && name === "inventory") ? null :
                                <span className={cn("field", type === "text" ? "textField" : "")}>
                                    <label className={saved ? "savedLabel" : ""}>{saved && name === "challan" && "Challan" || label}{!saved && name !== "inventory" && '*'}</label>
                                    {saved ? <label className={name === "challan" ? "challanLabel" : ""}>{values[name]} {name === "challan" && <img src={eyeIcon} className={"Eye-Icon"}/>}</label> : field}
                                </span>)
                        })}
                    </div>
                </div>
                <Footer values={values} clearAll={clearAll} saved={saved} setSaved={setSaved} toggleOpen={toggleOpen}/>
            </div>
        </div>
    );
}

export default MaterialCard;