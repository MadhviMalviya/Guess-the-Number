import React from 'react'
import style from './nav.module.css'
import { Link } from "react-router-dom"

function Nav() {


  return (
    <>
      <div className={style.container}>
      
        <h3>UI/UX DESIGN</h3>

        <nav className={style.list} >
          <Link className={style.navlink} to="/">Home</Link>
          <Link className={style.navlink} to="/About">About</Link>
          <Link className={style.navlink} to="/Login">Login</Link>
          <Link className={style.navlink} to="/Registr">Register</Link>
        </nav>

      </div>
    </>
  )
}

export default Nav
