import React from "react";

const Enfant = (props)=>{

    console.log(props)

    //on accède au propos parent
    console.log(props.leState)

  const btn_res_enfant = props.leState.sendParent !== null ? ( <button onClick={props.fonctionPropos}>Réponce</button>):( <button disabled>Réponce</button>)

    return(
        <>
            <h2>Composent Enfant</h2>
            <h3>{props.name}</h3>
            {btn_res_enfant}<br/>
            <p>{props.leState.sendEnfant}</p>
           
        </>
    )
}

export default Enfant