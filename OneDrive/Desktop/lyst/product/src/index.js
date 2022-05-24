import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";
import styledComponents from 'styled-components';
import { AllPage } from './components/allPage';
import { Mens } from './components/men';
import { Women } from './components/women';
import './index.css';


import reportWebVitals from './reportWebVitals';



const Container=styledComponents.div`
  width:100%;
  height:fit-content;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Container>
    
       
    <Routes>
      <Route path="/" exact element={<AllPage/>}></Route>
       <Route  path='/women' exact element={<Women/>}></Route>
       <Route  path='/men' exact element={<Mens/>}></Route>
     </Routes>
       </Container>
   </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
