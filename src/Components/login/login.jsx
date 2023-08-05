import React, { useState } from 'react'
import './login.css';
import img1 from '../images/av2 1.png'
import img2 from '../images/Google.png'
import img3 from '../images/Facebook.png'
import img4 from '../images/Apple.png'
import img5 from '../images/email.png'
import img6 from '../images/Password.png'
import axios from '../../Axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("/api/User/login", {email:username, password:password})
    .then((response) => {
      console.log(response.data.Data.Token);
      if(response.data.Data.Token){
        navigate('/products');
        localStorage.setItem('user_id', response.data.Data.user_id);
        localStorage.setItem('Token', response.data.Data.Token);
        localStorage.setItem('role', response.data.Data.role);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <div className='loginmainpage'>    
      <div  className='loginpage'>
          <img src={img1} alt="login" className='logimg'/>
          <div className='signin'>

            <form>
              <label htmlFor="email" className='email_label'>Email</label><br />
              <img src={img5} alt="" className='email_icon'/>

              <input value={username} onChange={(e)=>setusername(e.target.value)} type="email" className='email_field' placeholder='example@gmail.com' /><br />
              <label htmlFor="password" className='password_label'>Password</label><br />
              <img src={img6} alt="" className='password_icon' />
              <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className='password_field' placeholder='**********' />
              <p className='forget'>Forget Password ?</p>
              <div className='line1'></div>
              <div className='line2'></div>
              <button className='logbtn' onClick={handleSubmit}>Log In</button>
            </form>
            

            <div>
              <div className='underline1'></div>
              <p className='or'>Or</p>
            </div>
            <img src={img2} alt="" className='google'/>
            <img src={img3} alt="" className='facebook' />
            <img src={img4} alt="" className='apple' />

            <p className='account'>Don't have an account? <span className='signup'>Sign up</span></p>


            </div>
    </div>
    </div>

  )
}

export default Login