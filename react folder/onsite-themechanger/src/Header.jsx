import React from 'react'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg shadow-0">
                        <div className="container-fluid px-0">
                            <a className="navbar-brand" >Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        {/* <a className="nav-link active" ia-current="page" >Home</a> */}
                                        <Link className='active nav-link  ' to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link className='active nav-link px-0' to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
