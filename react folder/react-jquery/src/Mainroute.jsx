import { createBrowserRouter } from "react-router";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
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
            path: "/contact",
            element:
                <>
                    <Header />
                    <Contact />
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