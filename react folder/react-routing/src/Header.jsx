import React from 'react'
import { useState } from 'react';

import './style.css'
import logo from './assets/Logo.png'
import { Link } from 'react-router';




function Header() {

    let [open, setopen] = useState(false)

    function TTT() {
        setopen(!open)
    }

    let [activelink, setactivelink] = useState("")

    function Handlink(linkname) {
        setactivelink(linkname)
    }


    return (
        <>
            <header>
                <div className='container'>
                    <nav className='nav'>
                        <div className='logo'>
                            <a ><img src={logo} alt="" /></a>
                        </div>
                        <button id='bar' onClick={TTT}>
                            ☰
                        </button>
                        <div className={open ? "link jtn" : "link"}>
                            <ul>
                                {["Home", "About", "Contact", "Help"].map((label) =>
                                (
                                    <li
                                        key={`nav-${label}`}
                                        className={activelink === label ? "active" : ""}
                                        onClick={() => Handlink(label)}
                                    >
                                        <Link to={`/${label === "Home" ? "" : label.toLowerCase()}`}> {label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div >
            </header >
        </>

    )
}



export default Header
