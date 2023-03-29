import React from 'react'
import style from "./About.module.css"
import Nav from '../Navbar/Nav'

function About() {


    return (
        <>
            <Nav />
            <div className={style.mainContainer}>
                <h1>About me</h1>

                <section className={style.wrapper} >
                    <div className={style.first}>

                        <img src='https://img.freepik.com/premium-vector/software-language-programmer-avatar_24877-770.jpg?w=2000' alt='profile img' />

                        <small>Age:24</small>
                        <small>Location:Sehore,Madhya Pradesh India</small>
                    </div>

                    <div>
                        <h1>Madhvi Malviya</h1>
                        <h2>Frontend Developer</h2>
                        <p>I have completed B.Sc.IT and M.Sc. IT from Barkatullah University, Bhopal</p>

                        <div className={style.container} >
                            <div className={style.skill} >
                                <h4> Technical Skills</h4>
                                <ul>
                                    <li>HTML 5</li>
                                    <li>CSS 3</li>
                                    <li>JavaScript</li>
                                    <li>React JS</li>

                                    <li>MySql</li>
                                </ul>
                            </div>

                            <div className={style.skill} >
                                <h4> Hobbies</h4>
                                <ul>
                                    <li>Sketching</li>
                                    <li>Learning</li>
                                    <li>Books reading</li>
                                    <li>Travelling</li>
                                    <li>Stargazing</li>
                                </ul>
                            </div>
                            <div className={style.skill} >
                                <h4> Learnings</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JS</li>
                                    <li>React js</li>
                                    <li>DBMS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        </>
    )
}

export default About
