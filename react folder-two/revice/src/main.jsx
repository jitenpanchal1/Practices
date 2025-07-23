import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Product from './Product'
import { Cartcontext } from './Addtocartcompo/Cartcontext'
import Cart from './Cart'
import Toolproduct from './Toolproduct'
import ToolAddtocart from './ToolAddtocart'
import { Provider } from 'react-redux'
import { store } from './cartstore/Addtocartstore'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import App from './App.jsx'
// import Addtocart from './Addtocart.jsx'

createRoot(document.getElementById('root')).render(
  // <Cartcontext>
  <StrictMode>
    {/* this is todo */}
    {/* <App />

      this is todo using usereducer
    <Addtocart /> */}
    {/* <Product /> */}
    {/* <Cart /> */}

    {/* this is todo using reduxtoolkit */}
    <Provider store={store}>

      <Toolproduct />
      <ToolAddtocart />

    </Provider>

  </StrictMode>
  // </Cartcontext>
)
