import React from 'react'
import Header from './component/Header'
import { Outlet, useNavigate } from 'react-router'

function App() {

  const navigate = useNavigate()

  return (
    <div>
      <Header navigate={navigate} />
      <Outlet />
    </div>
  )
}

export default App
