import React from 'react'
import { Link, Outlet, } from 'react-router'

function Header() {
    return (
        <div>
            <ul>
                <li><Link to="allpro">allProduct</Link></li>
                <li><Link to="addproduct">Add Product</Link></li>
                <li><Link to="cart">Add toCart</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Header
