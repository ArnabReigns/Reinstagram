import React from 'react'
import {InputField,Button} from '../components/FormItems';


const LoginForm = (props) => {
  return (
    <>
        <InputField required placeholder='Email'/>
        <InputField required placeholder='Password'/>
        <Button>Log In</Button>
        <p>don't have an account? <span style={{color:"white",cursor:"pointer"}} onClick={()=>{props.setSignin(p =>!p)}}>create one</span></p>
    </>
  )
}

export default LoginForm