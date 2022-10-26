import {React,useState,useEffect} from 'react' 
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Title, Container} from './FormItems';




const Accounts = ({setAuth}) => {

  const [signin,setSignin] = useState(true)


  return (
    <>
      
      <Container autoComplete='off' onSubmit={e=> e.preventDefault()}>
        <Title>RINSTAGRAM</Title>
        {signin ?  <LoginForm setAuth={setAuth} setSignin={setSignin}/> : <SignUpForm setAuth={setAuth} setSignin={setSignin}/>}
      </Container>
    
    </>
  )
}

export default Accounts