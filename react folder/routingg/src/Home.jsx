import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

function Home() {
  return (
    <div>
      
        <h1>hi home</h1>  
        <Header />
        {/* <Outlet /> */}
      {/* </Outlet> */}

    </div>
  )
}

export default Home
