import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import { store } from './Store'
import { Provider } from 'react-redux'


const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                </>
        },
        {
            path: "/home",
            element: <>
                <Home />
            </>
        },
        {
            path: "/about",
            element: <>
                <About />
            </>
        },
        {
            path: "contact",
            element: <>
                <Contact />
            </>
        },
        {
            path: "/product",
            element: <>
                <Provider store={store}>
                    <Product />
                </Provider>
            </>
        }

    ]
)


export default Mainroute

