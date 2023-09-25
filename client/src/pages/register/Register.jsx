import React from 'react'
import "./register.scss";


const Register = () => {
  return (
    <div className='register-container'>
    <div className='register-top'>
        <h2>WELCOME</h2>
    </div>
    <div className='register-bottom'>
        <form>
        <span>Name</span>
        <input></input>
        <span>Email Address</span>
        <input></input>
        <span>Password</span>
        <input style={{font:"small-caption", fontSize:"20px"}} type='password'></input>
        <span>Confirm Password</span>
        <input style={{font:"small-caption", fontSize:"20px"}} type='password'></input>
        <span className='policy'>By registering, you agree to our <u style={{cursor:"pointer"}}>Terms & Conditions</u> and <u style={{cursor:"pointer"}}>Privacy Policy</u>.</span>
        <div className='checkbox'>
        <input type='checkbox' id='newsletter' name='newsletter'></input>
        <label for="newsletter">Sign up to our newsletter for exclusive sales and new collection updates. Unsubscribe at any time.</label>
        </div>
        <button>Create Account</button>
        </form>
        
    </div>
      
    </div>
  )
}

export default Register
