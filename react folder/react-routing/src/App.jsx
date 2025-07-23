import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Help from './Help';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='help' element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
