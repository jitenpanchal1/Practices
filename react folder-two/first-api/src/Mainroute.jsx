import React from 'react'
import { createBrowserRouter } from 'react-router'
import Register from './Register'
import Login from './Login'

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Register />
                </>
        },
        {
            path: "/login",
            element:
                <>
                    <Login />
                </>
        }
    ]
)




export default Mainroute
