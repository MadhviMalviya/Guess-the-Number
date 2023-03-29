import React from 'react'
import Nav from '../Navbar/Nav'
import style from './Login.module.css'

function Login() {
  return (
    <div  >
    <Nav/>
    <h1>Welcome to Home Page</h1>
      <form  className={style.form} >
        <label>Username</label>
        <input type={Text} ></input><br />
        <label>Password</label>
        <input type={'password'} ></input><br />
        <button type='submit' >submit</button>
<h6 >  Dont have account? Register here</h6>
      </form>
    </div>
  )
}

export default Login
