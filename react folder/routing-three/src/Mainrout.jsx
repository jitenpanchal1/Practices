import React from 'react'
import { createBrowserRouter } from 'react-router'


import Home from './Home'
import About from './About'
import Contact from './Contact'



const Mainrout = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }
    ]
)



export default Mainrout
