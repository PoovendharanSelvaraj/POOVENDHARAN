import styledComponents from 'styled-components';
import { Sidebar } from './sidebar';
import { ProductbarW } from './productbarwomen';



const Container=styledComponents.div`
  margin:auto;
  width:100%;
  height:fit-content;
`;
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
 const Box=styledComponents.div`
  width:90%;
  display:flex;
  height:1500px;
  margin:auto;
 `;
 const Left=styledComponents.div`
   flex:20%;
   padding:0 3px 0 0;
 `;
 const Right=styledComponents.div`
   flex:80%;
  overflow:auto;

 `;


 export const Women=()=>{
     return (
            
    <Container>
     <Titlebar>
      <Headline>WOMEN'S CLOTHING</Headline>
    </Titlebar>
    <Box>
      <Left><Sidebar/></Left>
      <Right><ProductbarW/></Right>
    </Box>
  </Container>
     );
 }