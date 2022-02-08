import React from "react";

const Test = ()=>{

    //comment asignier des valeur d'un tab
    var array =["Mark","Tata","Toto"];
    var [idex0,index1,index2] = array;
    console.log(idex0,index1,index2)

    /* ['Tata', 'Toto']
    var [idex0, ...rest]  = array
    console.log(rest)
    var {index0,...rest} = obj
    */

    //destruturation d'un obj
    var obj ={
        index0:"Mark",
        index1:"Tata",
        index2:"Toto"
    }
    
   // var {index0,index1,index2} = obj
   //Mark
    var {index0:test,index1,index2} = obj

    //console.log(index0,index1,index2)
    console.log(test)


    return(
        <>
        <p>Destruturing</p>
        
        
        </>
    )


}
export default Test