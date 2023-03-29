import React from 'react'
import Nav from '../Navbar/Nav'
import style from './Registr.module.css'

function Registr() {
  return (
    <div>
     <Nav/>
    <h1>Welcome to Home Page</h1>
    <form  className={style.form} >
        <label>First Nmame</label> 
        <input type={Text} ></input><br />
        <label>Last Name</label>
        <input type={Text} ></input><br />
        <label> Create Password</label>
        <input type={'password'} ></input><br />
        <label> Confirm Password</label>
        <input type={'password'} ></input><br />
        <button type='submit' >submit</button>

      </form>
    
    </div>
  )
}

export default Registr
