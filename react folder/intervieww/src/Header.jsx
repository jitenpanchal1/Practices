import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <div>
            <div>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/product">Product</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
