import React,{Component,Fragment} from "react";
import Image from "./Image";
import styled from "styled-components";
// import styles from './Test.module.css'
const Title=styled.h1`color:red`


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

        //ajout +2 class{{ `${class1}autre class`}}
        return (  
            <Fragment>
               <Image  color={this.state.role}/>
               
               
                <Title>Formulaire</Title>
                {/* <button onClick={this.onClik}>Lien</button> */}

                <form  onSubmit={this.handleFrom}>

                    <label>Name : </label>
                    <input type="text" value={this.state.name} onChange={this.handleName}/>
                   
                    <label>Role : </label>
                   
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
                    <button className="btn-info"> Valider</button>
                </form>

                {/* <h2 className={styles.green}>Style parent</h2> */}
               
            </Fragment>
        );
    }
}
/*css inline
const stylesh1 ={

    fontSize:'20px',
    color:'red'
}*/
export default From;