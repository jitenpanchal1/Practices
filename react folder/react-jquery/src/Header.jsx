import React, { useState } from 'react'
import { Link } from 'react-router';
import $ from 'jquery';
import './App.css'

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './Home';


export default function Header() {

    const [openNavRight, setOpenNavRight] = useState(false);

    const changa = (link) => {
        if (link) {
            $('.nav-link').removeClass('fff')
            $(link).addClass("fff")
        }
    }

    return (
        <>
            <header className='bg-secondary'>
                <div className="container">
                    <MDBNavbar expand='lg' light className='shadow-0 '>
                        <MDBNavbarBrand href='#'>
                            Navbar
                        </MDBNavbarBrand>
                        <MDBContainer fluid>
                            <MDBNavbarToggler
                                type='button'
                                data-target='#navbarRightAlignExample'
                                aria-controls='navbarRightAlignExample'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={() => setOpenNavRight(!openNavRight)}
                            >
                                <MDBIcon icon='bars' fas />
                            </MDBNavbarToggler>

                            <MDBCollapse navbar open={openNavRight} className='navbar-nav justify-content-end'>
                                <MDBNavbarNav className='mb-2 mb-lg-0'>
                                    <MDBNavbarItem>
                                        <Link to="/home" id='home' onClick={() => changa("#home")} className='nav-link mx-5'>Home</Link>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <Link to="/about" id='about' onClick={() => changa("#about")} className='mx-5 nav-link'>About</Link>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <Link to="/contact" id='contact' onClick={() => changa("#contact")} className='ms-5 nav-link'>Contact</Link>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </div>
            </header>
        </>
    )
}
