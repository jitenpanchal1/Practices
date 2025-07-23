import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("../Component/Header"));
const Addpro = lazy(() => import("../Component/Addpro"));
const Allproduct = lazy(() => import("../Component/Allproduct"));
const Addtocart = lazy(() => import("../Component/Addtocart"));

const Mainroute = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Header />
            </>,
        children: [
            {
                index: true,
                element:
                    <>
                        <Suspense fallback={<div><p>Loading...</p></div>}>
                            <Allproduct />
                        </Suspense>
                    </>
            }, {
                path: "allpro",
                element:
                    <>
                        <Suspense fallback={<div><p>Loading...</p></div>}>
                            <Allproduct />
                        </Suspense>
                    </>
            }, {
                path: "/addproduct",
                element:
                    <>
                        <Suspense fallback={<div><p>Loading...</p></div>}>
                            <Addpro />
                        </Suspense>
                    </>
            }, {
                path: "/cart",
                element:
                    <>
                        <Suspense fallback={<div><p>Loading...</p></div>}>
                            <Addtocart />
                        </Suspense>
                    </>
            }
        ]
    },
])

export default Mainroute