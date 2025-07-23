import { createBrowserRouter } from "react-router";
import Routlayout from "../routlayout/Routlayout";
import Home from "../Allpage/Home";
import About from "../Allpage/About";

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Routlayout />
                </>,

            children: [
                {
                    index: true,
                    element:
                        <>
                            <Home />
                        </>
                },
                {
                    path: "home",
                    element:
                        <>
                            <Home />
                        </>
                },
                {
                    path: "about",
                    element:
                        <>
                            <About />
                        </>
                }
            ]
        }
    ]
)

export default Mainroute