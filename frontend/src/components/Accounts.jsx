import {React,useState,useEffect} from 'react' 
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Title, Container} from './FormItems';




const Accounts = (props) => {

  const [signin,setSignin] = useState(true)


  return (
    <>
      
      <Container autoComplete='off' onSubmit={e=> e.preventDefault()}>
        <Title>RINSTAGRAM</Title>
        {signin ?  <LoginForm setUser={props.setUser} user={props.user} setSignin={setSignin}/> : <SignUpForm setAuth={props.setAuth} setSignin={setSignin}/>}
      </Container>
    
    </>
  )
}

export default Accounts