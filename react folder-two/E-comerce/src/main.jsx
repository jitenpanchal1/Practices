import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Mainroute from './MainRoute/Mainroute'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={Mainroute}>
    </RouterProvider>
  </StrictMode>,
)
