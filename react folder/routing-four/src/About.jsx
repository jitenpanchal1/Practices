import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router'

function About() {
    return (

        <div>
            <div>
                <h1>Hello About</h1>
                <div>

                </div>
            </div>
            {/* <li>
                <Link to='/add'>thes is for data</Link>
            </li> */}
            <li>
                <Link to='addtwo'>khow more</Link>
            </li>
            <Outlet />


            {/* <Header /> */}
        </div>
    )
}

export default About
