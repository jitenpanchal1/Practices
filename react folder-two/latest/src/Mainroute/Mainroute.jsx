import { createBrowserRouter } from "react-router";
import App from "../App";
import Allproduct from "../Allproduct";

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <App />
                </>
        }, {
            path: "/allproduct",
            element:
                <>
                    <Allproduct />
                </>
        }

    ]
)

export default Mainroute