import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import COntext from './contextData/COntext.jsx'

createRoot(document.getElementById('root')).render(
  <COntext>
    <StrictMode>
      <App />
    </StrictMode>
  </COntext>
)
