import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './reduxfile/reduxstore/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
