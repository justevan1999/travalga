import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './Navigation/Navbar'
import Footer from './Footer/Footer'
import {Home, About, Api, Contact} from "../pages"



const Display = () => {
  return (
    <div>
    <BrowserRouter>
         <Navbar />
        <Routes>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="api" element={<Api />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        </Routes>
        <Footer />
    </BrowserRouter>

      
      
    </div>
  );
}

export default Display
