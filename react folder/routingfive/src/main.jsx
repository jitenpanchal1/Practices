import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Mainrout from './Mainrout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={Mainrout}>
    </RouterProvider>
  </StrictMode>,
)
