import React from 'react'
import { Link, Outlet } from 'react-router'

function Contact() {
    return (
        <div>
            <h1 className='text-center'>You are at Contact</h1>
            <li className='text-center'><Link to='contactchild'> click to see more</Link></li>
            <Outlet />
        </div>
    )
}

export default Contact
