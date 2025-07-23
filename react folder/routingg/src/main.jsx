import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import Mainrout from './Mainrout'

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider
      router={Mainrout}>
    </RouterProvider>

  </StrictMode>,
)
