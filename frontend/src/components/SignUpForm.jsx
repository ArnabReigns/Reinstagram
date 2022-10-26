import {useRef} from 'react'
import api from '../API';
import {InputField,Button} from '../components/FormItems';

const SignUpForm = ({setSignin,setAuth}) => {

  const nameRef = useRef()
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const cPasswordRef = useRef()
  
  function Register()
  {
    if(passwordRef.current.value !== cPasswordRef.current.value) console.log("passwords not matching!")
    else {
      api.post('register',{
      name: nameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
    .then(res => 
      {
        console.log(res.data);
        setAuth(true);
      })
    .catch(err=>console.log(err.response))
    }
  }

  return (
    <>
        <InputField ref={nameRef} required type={'name'} placeholder='Full Name'/>
        <InputField ref={emailRef}required type={'email'} placeholder='Email'/>
        <InputField ref={usernameRef} required placeholder='username'/>
        <InputField ref={passwordRef} required type={'password'} placeholder='Password'/>
        <InputField ref={cPasswordRef} required type={'password'} placeholder='Confirm Password'/>
        <Button onClick={Register}>Sign Up</Button>
        <p>Already have an account? <span style={{color:"white",cursor:"pointer"}} onClick={()=>{setSignin(p =>!p)}}>Log In</span></p>
        </>
        
  )
}

export default SignUpForm