import React, { useState } from 'react'
import { Link } from 'react-router'

import './style.css'



function Header() {

    let [activelink, setactivelink] = useState("")

    function handlicolor(setlink) {
        setactivelink(setlink)
    }
    return (
        <div>
            {/* <ul>
                <li><Link className='touch' to="/">Home</Link></li>
                <li><Link className='touch' to="/about">About</Link></li>
                <li><Link className='touch' to="/contact">Contact</Link></li>
            </ul> */}
            <ul>
                {["Home", "About", "Contact"].map((label) => (
                    <li
                        key={`${label}`}
                        onClick={() => handlicolor(label)}>
                        <Link
                            to={`/${label === "Home" ? "" : label.toLocaleLowerCase()}`}
                            className={activelink === label ? "touch" : ""}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Header


