import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import styles from "./login.module.css";

const Todo = () => {
  const email=useRef();
  const password=useRef();
  const {theme,light,dark}=useContext(ThemeContext)
  const {isAuth,login,logout}=useContext(AuthContext)
 const handleSubmit=(e)=>{
   e.preventDefault();
   if(isAuth){
     logout();
   }else{
     login();
   }
   
 }
 const handleTheme=()=>{
    if(theme){
      light();
    }else{
      dark();
    }
 }
 const handleLogin=()=>{
   if(isAuth){
     logout();
   }
 }
  return (
    <div className={theme?styles.darkMode:null}>
        <button onClick={handleLogin}>{isAuth?"Logout":"Login"}</button>
        <button onClick={handleTheme}  >{theme?"LightMode":"DarkMode"}</button>
        <div style={{width:"200px",margin:"auto",display:"flex",flexDirection:"column"}}>
          <form action="" >
          Enter mail:<input ref={email} type="text" placeholder='enter email'/>
          Password:<input ref={password} type="password" name="" id="" placeholder='enter password' />
          <button onClick={handleSubmit} >Login</button>
          </form>
        </div>
    </div>
  )
}

export default Todo