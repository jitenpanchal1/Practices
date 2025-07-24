import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './refuxfiles/reduxstore/store.js'
import { RouterProvider } from 'react-router'
import Mainroute from './Mainroute/Mainroute.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={Mainroute} />
  </Provider>
)
