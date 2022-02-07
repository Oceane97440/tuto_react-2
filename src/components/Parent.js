import React, {Component} from "react";
import Enfant from "./Enfant";
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
            <div>
                <h1>Composent Parent</h1>
                <button onClick={this.order}>Order du parent</button>
                <p>{this.state.sendParent}</p>
                <hr/>

            {/* obj leState est un stat qu'on passe en propos pour recup la valeur dans le composanr enfant */}
                <Enfant fonctionPropos={this.resEnfant} name="Je suis un propos" leState={this.state}/>

            </div>    
        );
    }
}
 
export default Parent;