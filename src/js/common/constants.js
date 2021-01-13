import Button from '../../view/Button.svg';
import Green_Gradient from '../../view/Green_Gradient.svg';
import Leaf from '../../view/Leaf.svg';
import Textured_Gradient from '../../view/Textured_Gradient.svg';
import first_design from '../../view/first_design.svg';
import second_design from '../../view/second_design.svg';
import third_design from '../../view/third_design.svg';
import factoryImage1 from '../../view/factoryImage1.svg';
import factoryImage2 from '../../view/factoryImage2.svg';

const Thumbnails = [{id: "CT-696", source: Green_Gradient},
    {id:  "CT-697", source: Leaf},
    {id:  "CT-698", source: Textured_Gradient},
    {id:  "CT-699", source: Button, desc: "Designer Wooden Buttons"}];

const COMMON_DESC = "100% Cotton Navy/White Colour Oxford Chambery";

const COLORS_AVAILABLE = "8 more colors";

const FACTORY_OPTIONS = [
    {label: "amaya_creations", id: "amaya_creations", value: "Amaya Creations", image: factoryImage2},
    {label: "vishal_creations", id: "vishal_creations", value: "Vishal Creations", image: factoryImage2}
    ];

const ASSIGNMENT_OPTIONS = [
    {label: "design1", id: "DM-08", value: "Design name 1", image: first_design},
    {label:  "design2", id: "DM-09", value: "Design name 2", image: second_design},
    {label:  "design3", id: "GQ-03", value: "Design name 3", image: third_design}
    ];


export {
    Thumbnails,
    COMMON_DESC,
    COLORS_AVAILABLE,
    FACTORY_OPTIONS,
    ASSIGNMENT_OPTIONS
}