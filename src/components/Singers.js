import React, { Component, Fragment } from "react";

//function
/*const UI_compenant = ({name,age})=>{

    //console.log(props)
    //sythaxe simplifier de const namr = props.name => destruturing
   // const {name,age}=props

    return(
        <Fragment>
            <p>Chanteur: {name}</p>
        </Fragment>
    )

    
}*/

class UI_compenant extends Component {

    state = {}
    render() {
        //sythaxe simplifier de this.props.name => destruturing class

      //  console.log(this.props.name)
        const {name,age}=this.props

        return (
            <Fragment>
                <p>Chanteur: {name}</p>
                <p>Age: {age}</p>

            </Fragment>
        );
    }
}


export default UI_compenant