import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Accounts from '../components/Accounts';
import Home from '../components/Home';
import Cookies from 'js-cookie'

const Start = () => {

  const [isAuthentifcated,setIsAuthenticated] = useState(false);

  useEffect(()=>{
    if(Cookies.get('loggedin')==="true") setIsAuthenticated(true);
  })

  return (
    <>
          {isAuthentifcated ? <Home setAuth={setIsAuthenticated}/> : <Accounts setAuth={setIsAuthenticated}/>}
    </>
  )
}

export default Start