import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom' 
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import {Title, Container} from '../components/FormItems';




const Accounts = () => {


  const [signin,setSignin] = useState(true)


  return (
    <>
      <Container>
        <Title>RINSTAGRAM</Title>
        {signin ?  <LoginForm setSignin={setSignin}/> : <SignUpForm setSignin={setSignin}/>}
      </Container>
    
    </>
  )
}

export default Accounts