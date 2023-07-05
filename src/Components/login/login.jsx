import React from 'react'
import './login.css'
import { Container } from 'react-bootstrap'
import img1 from '../images/av2 1.png'

function Login() {
  return (
    <div>
        <Container className='loginpage'>
          <img src={img1} alt="login"/>
        </Container>
    </div>
  )
}

export default Login