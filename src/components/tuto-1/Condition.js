import React, { Component } from 'react';

class Condition extends Component {

    state = {
        name: 'Mario',
        winner: true//false
    }
    render() {

        /*condition if else jsx
        let result;

        if (this.state.winner) {
            result = <h1>Bravo {this.state.name}</h1>
        } else {
            result = <h1>Raté </h1>
        }
        return result;*/


        return(
           // this.state.winner ? <h1>Bravo {this.state.name}</h1> : <h1>Raté </h1>
          // this.state.winner ? <h1>Bravo {this.state.name}</h1> : null
            //selement si
            this.state.winner && <h1>Bravo {this.state.name}</h1>

        )


    }
}

export default Condition;