import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from './assets/Header/Header'
import Home from './Home/Home'

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                    <Home />
                </>
        },
        {
            path: "/home",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }
    ]
)

export default Mainroute