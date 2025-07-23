import React from 'react'
import { useState } from 'react';
import './App.css'
import { Link } from 'react-router';


import 'mdb-react-ui-kit/dist/css/mdb.min.css';





function Header() {

    return (
        <>
            <div className='container'>
                <ul className="list-unstyled d-flex ">
                    <li className='me-5'><Link to="/home">Home</Link></li>
                    <li><Link to="/input">Input</Link></li>
                </ul>
            </div>
        </>
    )
}


export default Header
