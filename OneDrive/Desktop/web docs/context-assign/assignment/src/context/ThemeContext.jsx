import { createContext, useState } from "react";



export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(false);
    const light=()=>{
        setTheme(false);
    }
    const dark=()=>{
        setTheme(true);
    }
    return (
     <ThemeContext.Provider value={{theme,light,dark}}>
         {children}
     </ThemeContext.Provider>
    );
}