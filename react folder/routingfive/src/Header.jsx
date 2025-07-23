import React from 'react'
import { Link } from 'react-router'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
    return (
        <div className='container'>
            <ul className='d-flex justify-content-between list-unstyled'>
                <li><Link className='fs-3' to="/">Home</Link></li>
                <li><Link className='fs-3' to="/about">About</Link></li>
                <li><Link className='fs-3' to="/contact">Contact</Link></li>
                <li><Link className='fs-3' to="/help">Help</Link></li>
            </ul>
        </div>
    )
}

export default Header
