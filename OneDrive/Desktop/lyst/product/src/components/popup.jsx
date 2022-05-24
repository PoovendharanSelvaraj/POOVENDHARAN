// import { useState } from "react";
import styledComponents from "styled-components";


const PopDiv=styledComponents.div`
width:400px;
max-width:640px;
height:400px;
margin:auto;
margin:0px;
background-color:red;
border:1px solid black;
`;

export const Popup =(props)=>{
    return (props.trigger) ? (
      <PopDiv>
       <div>
         
         <button >close</button>
         {props.children}
       </div>
      </PopDiv>
    ):"";
  }