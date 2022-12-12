import React from "react";
import './Cardanimais.css';

/*import Article from "/Article";*/
function Cardanimal(props){
    return(
        
         <div className="cardbody"> 
          <img src={props.image} alt=""/> 
          <h3>{props.name}</h3>
          <p>...Phone: {props.phone}</p>
          <p>...Email: {props.email}</p> 
         </div>
    );
}
 
export default Cardanimal;
