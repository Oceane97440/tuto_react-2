import React,{Component,Fragment} from "react";
import Image from "./Image";
class From extends Component {
  
    state = { 
        name:'',
        role:'',
        roles:["red","blue"],
        avis:''
     }

     //fonction onchange tranfere le stat au value
    handleName = (e) => {
       // console.log(e.target.value)

        this.setState({
            name:e.target.value
        })
     }

     handleRole = (e) => {
       // console.log(e.target.value)

        this.setState({
            role:e.target.value
        })
     }
      
     handleAvis = (e) => {
       // console.log(e.target.value)

        this.setState({
            avis:e.target.value
        })
     }

     handleFrom = (e) => {
         e.preventDefault()
        console.log(`name ${this.state.name}`)
        console.log(`role ${this.state.role}`)
        console.log(`name ${this.state.avis}`)

        // this.setState({
        //     avis:e.target.value
        // })
     }

     onClik = (e)=>{
        window.location.replace("http://localhost:3001/");
 
     }

    render() { 
        return (  
            <Fragment>
               <Image color={this.state.role}/>
                <h1>Formulaire</h1>
                <button onClick={this.onClik}>Lien</button>

                <form onSubmit={this.handleFrom}>
                    <label>Name : </label><br/>
                    <input type="text" value={this.state.name} onChange={this.handleName}/>
                    <label>Role : </label><br/>
                    <select value={this.state.role} onChange={this.handleRole}>
                    <option disabled>-</option>
                        {
                            //on affiche les opt de maniere dinamique attention key
                            this.state.roles.map((role,i)=>{
                                return <option key={i} value={role}>{role}</option>
                            })
                        }
                       
                    </select>
                    <label>Avis : </label><br/>
                    <textarea value={this.state.avis} onChange={this.handleAvis}/>
                    <button>Valider</button>
                </form>
            </Fragment>
        );
    }
}
 
export default From;