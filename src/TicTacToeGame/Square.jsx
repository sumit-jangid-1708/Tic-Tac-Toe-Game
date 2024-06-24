import React from "react";

const Square =(props) =>{
    return(
        <div 
        onClick={props.onClick}        
        style={{
            border:"3px solid #ffebdd",
            width:"100px",
            height:"100px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}
         className="square">
            <h5 style={{
                color:props.value === "X" ? "#ff0101" : "#3445f7",
                fontSize:"50px",
            }}>{props.value}</h5>
        </div>
        );

};

export default Square;