import {useState,useEffect} from 'react'
import Accounts from '../components/Accounts';
import Home from '../components/Home';
import Cookies from 'js-cookie'
import api from '../API'
import Loading from '../components/Loading';

const Start = () => {

  const [isAuthentifcated,setIsAuthenticated] = useState(false);
  const [authChecked,setAuthChecked] = useState(false);
  const [user,setUser] = useState({});

  useEffect(()=>{
    api.get('currentuser')
    .then(user=> {setUser(user.data);setIsAuthenticated(true);setAuthChecked(true);})
    .catch(err=>{setIsAuthenticated(false);setAuthChecked(true)})
  },[])

  useEffect(()=>{
    setIsAuthenticated(true)
  },[user])


  
  



  return (
    <>
          {  authChecked ?  (isAuthentifcated ? <Home user={user} setAuth={setIsAuthenticated}/> : <Accounts setUser={setUser}/>) : <Loading/>}
    </>
  )
}

export default Start  