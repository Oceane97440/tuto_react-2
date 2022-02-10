import React from "react";
import icon from "../icon.svg"
import '../index.css';

const Image = (props) => {
    console.log(props.color)
    return ( 
        <img src={icon} style={{backgroundColor:props.color}} className="iconBorder"/>
     );
}
 
export default Image;