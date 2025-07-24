import { createBrowserRouter } from "react-router";
import App from "./App";
import Addproduct from "./component/Addproduct";
import Addtocart from "./component/Addtocart";
import Cartitem from "./component/Cartitem";

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                index: true,
                element:
                    <>
                        <Addtocart />
                    </>
            },
            {
                path: "addproduct",
                element:
                    <>
                        <Addproduct />
                    </>
            },
            {
                path: "addtocart",
                element:
                    <>
                        <Addtocart />
                    </>
            },
            {
                path: "cartitem",
                element:
                    <>
                        <Cartitem />
                    </>
            }
        ]
    }
])

export default Mainrouter