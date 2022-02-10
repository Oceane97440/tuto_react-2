import React, {Component, Fragment} from "react";
import Enfant from "./Enfant";
import Test from "./Test";
class Parent extends Component {
  
    state = { 
        sendParent : null,
        sendEnfant : null
     }

     order = ()=>{

        this.setState({
            sendParent:"Range ta chambre"
        })
     }

     resEnfant = ()=>[
         console.log("Fonction propos parent est activer"),
        this.setState({
            sendEnfant:"Ok maman je vais ranger ma chambre :("
        })
     ]

    render() { 
        return (  
            //au lieux de parent <div></div> ou <></>
            <Fragment> 
                <h1>Composent Parent</h1>
                <button onClick={this.order}>Order du parent</button>
                <p>{this.state.sendParent}</p>
                <hr/>

            {/* obj leState est un stat qu'on passe en propos pour recup la valeur dans le composanr enfant */}
                <Enfant fonctionPropos={this.resEnfant} name="Je suis un propos" leState={this.state}/>
            <Test></Test>
            </Fragment>    
        );
    }
}
 
export default Parent;