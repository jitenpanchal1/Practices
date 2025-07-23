import React from 'react'
import { Link } from 'react-router';


function Header() {
    return (
        <div className='container'>
            <div>
                <ul className=''>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
