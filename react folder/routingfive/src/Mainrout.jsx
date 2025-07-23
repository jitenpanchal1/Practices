import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'
import { lazy } from 'react'
import Loadingpage from './Loadingpage'
// import Contactchild from './Contactchild'

let Contactchild = React.lazy(() => import('./Contactchild'))

const Mainrout = createBrowserRouter(
    [
        {
            path: "/",
            element: <>
                <Header />
                <Home />
            </>
        }, {
            path: "/about",
            element: <>
                <Header />
                <About />
            </>
        }, {
            path: "/contact",
            element: <>
                <Header />
                <Contact />
            </>,
            children: [
                {
                    path: "contactchild/*",
                    element: <>
                        <Suspense fallback={<Loadingpage />}>
                            <Contactchild />
                        </Suspense>

                    </>
                }
            ]
        }, {
            path: "/help",
            element: <>
                <Header />
                <Help />
            </>
        }
    ]
)

export default Mainrout
