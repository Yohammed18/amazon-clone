import React, { useState } from 'react'
import './Login.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //this has replace useHistory.



  const signIn = e =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) =>{
      //Signed in
      if(auth){
        const user = userCredential.user;
        console.log(user)
        navigate('/')
      }
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  }


  const register = e =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      console.log(auth)
      //it successfully creates a new user with email and password
      if(auth){
        const user = userCredential.user;
        console.log(user)
        navigate('/')
      }
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  }
  
  return (
    <div className="login">
      <Link to='/'>
        {/**Buil the login form */}
        <img 
        className='login_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" 
        />
      </Link>
      {/**Login Container */}
      <div className="login_container">
        <h1>Sign In</h1>
        <form action="" method="get">
          <h5>E-mail </h5>
          <input 
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          />
          <h5>Passowrd</h5>
          <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          />
          <button 
          className="login_signInButton"
          type='submit'
          onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          BY SIGNING you agree to all the Terms and Conditions of this AMAZON FAKE CLONE of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button
        type='submit'
        onClick={register}
        className='login_registerButton'>Create your Amazon Clone Account</button>
      </div>
    </div>
  )
}

export default Login