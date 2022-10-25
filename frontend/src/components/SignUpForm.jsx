import React from 'react'
import {InputField,Button} from '../components/FormItems';

const SignUpForm = ({setSignin}) => {
  return (
    <>
        <InputField required placeholder='Full Name'/>
        <InputField required type={'email'} placeholder='Email'/>
        <InputField required placeholder='username'/>
        <InputField required type={'password'} placeholder='Password'/>
        <InputField required type={'password'} placeholder='Confirm Password'/>
        <Button>Sign Up</Button>
        <p>Already have an account? <span style={{color:"white",cursor:"pointer"}} onClick={()=>{setSignin(p =>!p)}}>Log In</span></p>
        </>
        
  )
}

export default SignUpForm