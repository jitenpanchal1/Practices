import React from "react";
import { createBrowserRouter } from "react-router";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                </>
        }, {
            path: "/home",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }, {
            path: "/about",
            element:
                <>
                    <Header />
                    <About />
                </>
        }
    ]
)

export default Mainroute