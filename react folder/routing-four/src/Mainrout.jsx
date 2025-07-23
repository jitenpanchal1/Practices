import React, { Suspense } from 'react'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Help from './Help'
import Header from './Header'

const Addpage = React.lazy(() => import('./Addpage.jsx'))
const Addtwo = React.lazy(() => import('./Addtwo.jsx'))

const Mainrout = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Home />
                    <Header />
                </>
        },
        {
            path: "/about",
            element:
                <>
                    <Header />
                    <About />
                    {/* <Addpage /> */}
                </>,
            children:
                [
                    
                    {
                        path: "addtwo/*",
                        element:
                            (
                                <Suspense fallback={"jim tapaak dumdumdum"}>
                                    <Addtwo />
                                </Suspense>
                            )
                    }
                ]
        },
        // {
        //     path: "/add",
        //     element: (
        //         <Suspense fallback={'pls wait for while'}>
        //             <Addpage />
        //         </Suspense>
        //     )
        // },
        {
            path: "/contact",
            element:
                <>
                    <Contact />
                    <Header />
                </>
        },
        {
            path: "/help",
            element:
                <>
                    <Help />
                    <Header />
                </>
        }

    ]
)

export default Mainrout

