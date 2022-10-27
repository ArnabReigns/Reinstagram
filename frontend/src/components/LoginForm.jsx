import {useState,useEffect,useRef} from 'react'
import {InputField,Button} from '../components/FormItems';
import api from '../API';


const LoginForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function LogIn()
  {
    var email = emailRef.current.value;
    var password = passwordRef.current.value;

    api.post('login',{
      email:email,
      password:password
    }).then(res=>{
      
      props.setUser(res.data)
    })
    .catch(err=>console.log(err))
  }



  return (
    <>
        <InputField autoComplete='off' ref={emailRef} required placeholder='Email or Username'/>
        <InputField type='password' ref={passwordRef} required placeholder='Password'/>
        <Button onClick={LogIn}>Log In</Button>
        <p>don't have an account? <span style={{color:"white",cursor:"pointer"}} onClick={()=>{props.setSignin(p =>!p)}}>create one</span></p>
    </>
  )
}

export default LoginForm