import React from 'react'
import Cookies from 'js-cookie'

const Home = ({setAuth}) => {
  
  function logout()
  {
    Cookies.remove("loggedin")
    setAuth(false);
  }
  
  return (
    <button onClick={logout}>Logout</button>
  )
}

export default Home