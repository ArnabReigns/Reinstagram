import {useEffect} from 'react'
import Cookies from 'js-cookie'
import Navbar from './Navbar';
import api from '../API';

const Home = (props) => {

  

  function logout()
  {
    api.get("logout");
    props.setAuth(false);
  }
  
  return (
    <div className='container vh-100 vw-100 p-3'>
      <Navbar user={props.user} Logout={logout}/>
      {props.a && <h1>Hiii</h1>}
    </div>

  )
}

export default Home