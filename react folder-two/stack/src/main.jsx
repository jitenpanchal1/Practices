import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './reduxwork/store/store.js'
import { RouterProvider } from 'react-router'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Mainrouter from './Mainroute.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={Mainrouter} />
  </Provider>

)
