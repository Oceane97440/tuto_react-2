import React,{Component,Fragment} from "react";
import UI_compenant from "./Singers";


class Display extends Component {
   
    render() { 
        return ( 
            <Fragment>
                <h1>Chantrur</h1>
                <UI_compenant name='Bob marlay' age='30'/>
                <UI_compenant name='BlackM' age='20'/>
                <UI_compenant name='MaitreGim' age='46'/>
         
            </Fragment>
         );
    }
}
 
export default Display;