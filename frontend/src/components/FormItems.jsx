import React from 'react'
import styled from 'styled-components'


const Container = styled.form`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-family:'Titillium Web';
  height:100vh;
  width: 100vw;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
`;

const InputField = styled.input`
  background-color:transparent;
  border:none;
  outline:none;
  border-bottom: 2px solid white;
  padding:0.5rem 0;
  width:50vw;
  margin-top:1rem;
  color: white;

  &::placeholder{
    color: #e7e7e7;
  }
`;

const Button = styled.button`
  margin: 1rem;
  padding:0.5rem 2rem;
  border:none;
  background-color: #ffffff42;  
  border-radius:5px;
  transition:0.3s ease;
  color: white;
  width:50vw;
  margin-top:3rem;

  &:active{
    background-color: #ffffff1d;  
  }
`

const Title = styled.h1`

  color: white;

`

export { Container,InputField, Button, Title}

