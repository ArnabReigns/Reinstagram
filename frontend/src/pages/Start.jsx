import {useState,useEffect,useContext} from 'react'
import Accounts from '../components/Accounts';
import Home from '../components/Home';
import api from '../API'
import Loading from '../components/Loading';
import { UserContext } from '../context/UserContext';

const Start = () => {
  
  const user = useContext(UserContext);

  return (
    <>
          {  user.authChecked ?  (user.state ? <Home/> : <Accounts setUser={user.setState}/>) : <Loading/>}
    </>
  )
}

export default Start  