import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import Othercontact from './Othercontact'
import ContactOne from './ContactOne'
import ContactTwo from './ContactTwo'
import Contactthree from './Contactthree'
import Contactfour from './Contactfour'

export default class Contactchild extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Othercontact />} >
                    <Route path='contactone' element={<ContactOne />} ></Route>
                    <Route path='contacttwo' element={<ContactTwo />} ></Route>
                    <Route path='contactthree' element={<Contactthree />} ></Route>
                    <Route path='contactfour' element={<Contactfour />} ></Route>
                </Route>
            </Routes>
        )
    }
}
