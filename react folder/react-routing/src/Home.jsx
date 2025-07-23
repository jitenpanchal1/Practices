import React from 'react'
// import { Link } from 'react-router'
import Header from './Header';
import { Outlet } from 'react-router';



function Home() {
    return (
        <>

          
                
            <Header />
            <Outlet />
        </>
    )
}

export default Home;
