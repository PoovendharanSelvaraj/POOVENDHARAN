
import './App.css';
import styledComponents from 'styled-components';

import { Women } from './components/women';
import { Mens } from './components/men';


const Titlebar=styledComponents.div`
  border:1px solid black;
  width:100%;
  height:100px;
  background-color:rgb(245,244,242);
 `;
 const Headline=styledComponents.h1`
  font-size:35px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:100;
  justify-content: center;
  margin-left: 200px;
 `;

const Container=styledComponents.div`
  width:100%;
  height:fit-content;
`;
 
export const ProductPage=()=>{
  return (

     <Container>
       
    
     </Container>
   
  
  )
}
