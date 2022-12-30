import React,{ createContext , useEffect, useState } from "react";  
import api from "../API";

const UserContext = createContext();


const UserState = (props) => {
    
    const [state,setState] = useState({})
    const [authChecked,setAuthChecked] = useState(false);


    useEffect(()=>{
        api.get('account/currentuser')
        .then(res => 
          {
            setState(res.data);
            setAuthChecked(true)
            console.log(res.data)
          })
        .catch(err=>{console.log(err);setAuthChecked(true)});
       
      },[])

      useEffect(()=>{
        console.log(state)
      },[state])

    return ( 
        <UserContext.Provider value = {{state,setState,authChecked,setAuthChecked}}>
            {props.children}            
        </UserContext.Provider>
    )}   

   


export {UserState,UserContext}