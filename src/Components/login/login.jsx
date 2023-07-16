import React from 'react'
import './login.css';
import img1 from '../images/av2 1.png'
import img2 from '../images/Google.png'
import img3 from '../images/Facebook.png'
import img4 from '../images/Apple.png'
import img5 from '../images/email.png'
import img6 from '../images/Password.png'

function Login() {
  return (
    <div className='loginmainpage'>    
      <div  className='loginpage'>
          <img src={img1} alt="login" className='logimg'/>
          <div className='signin'>
            <form action="signin">
              <label htmlFor="email" className='email_label'>Email</label><br />
              {/* <AiTwotoneMail className='email_icon'/> */}
              <img src={img5} alt="" className='email_icon'/>
              <input type="text" className='email_field' placeholder='example@gmail.com' /><br />
              <label htmlFor="password" className='password_label'>Password</label><br />
              {/* <RiLockPasswordFill className='password_icon'/> */}
              <img src={img6} alt="" className='password_icon' />
              <input type="text" className='password_field' placeholder='**********' />
              <p className='forget'>Forget Password ?</p>
              <div className='line1'></div>
              <div className='line2'></div>
              <button className='logbtn'>Log In</button>
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