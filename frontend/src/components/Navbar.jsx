import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    font-family:'Titillium Web';
    font-weight:600;
    font-size:1.6rem;

`

const Button = styled.button`
    padding: 0rem 2rem; 
    font-size:1rem;
    background-color:whitesmoke;
    border:1px solid blueviolet;
`

const navName = {
    padding:"0 1rem",
    fontSize:"1rem"
}


const Navbar = (props) => {
  return (
    <div className='d-flex justify-content-between'>
        <Title>Rinstagram</Title>

        <div className="d-flex align-items-center">
            <Button>{props.user.username}</Button>  
            <Button onClick={props.Logout}>Log Out</Button>
        </div>
    </div>
  )
}

export default Navbar