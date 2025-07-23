import React, { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authentication from "./auth/auth"
import { login, logout } from './store/AuthSlice'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer, Header } from './components/Index'
import { Outlet } from 'react-router'


function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    authentication.getcurrentacount()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return loading ? (
    <div> Loading......</div>
  ) : (
    <div className='app-wrapper app-page d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-grow-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )

}

export default App
