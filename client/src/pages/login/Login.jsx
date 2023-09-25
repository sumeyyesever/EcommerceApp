import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
      <div className='login-container'>
    <div className='login-top'>
        <h2>WELCOME</h2>
    </div>
    <div className='login-bottom'>
        <form>
        <span>Email Address</span>
        <input></input>
        <span>Password</span>
        <input style={{font:"small-caption", fontSize:"20px"}} type='password'></input>
        <span className='forgot'><u>Forgot Your Password?</u></span>
        <button>Log In</button>
        </form>
        <span className='register'>New to SMY?<Link className="link" to="/register"><u style={{marginLeft:"3px"}}>Register Now</u></Link></span>
    </div>
      
    </div>

  )
}

export default Login