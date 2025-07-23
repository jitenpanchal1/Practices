import React from 'react'
import { Link } from 'react-router';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Header() {
    return (
        <>
            <div>
                <header className='container'>
                    <nav className="navbar navbar-expand-lg shadow-0">
                        <div className="container-fluid">
                            <a className="navbar-brand">Navbar</a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li>
                                        <Link to="/Home"> Home</Link>
                                    </li>
                                </ul>
                                <form className="d-flex input-group w-auto">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Type query"
                                        aria-label="Search"
                                    />
                                    <button
                                        className="btn btn-outline-primary"
                                        type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}
