import React from 'react'
import { createBrowserRouter } from 'react-router'
import Header from './Header'

import Home from './Home';
import Input from './Input';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element: <>
                <Header />
            </>
        }, {
            path: "/home",
            element: <>
                <Header />
                <Home />
            </>
        }, {
            path: "/input",
            element: <>
                <Header />
                <Input />
            </>
        }
    ]
)



export default Mainroute
