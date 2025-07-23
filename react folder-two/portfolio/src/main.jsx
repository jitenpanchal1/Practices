import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Mainroute from './routes/Mainroute'


createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={Mainroute}>
  </RouterProvider>
)
