import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import Mainrout from './Mainrout'


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={Mainrout}>
    </RouterProvider>

    {/* <App /> */}
  </StrictMode>,
)
