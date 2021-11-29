import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DeBouncingCus from './hooksStates/DeBouncingCus'
import Blogs from './Routing/Blogs'
import ContactUs from './Routing/ContactUs'
import Dashboard from './Routing/Dashboard'

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Dashboard/>}/>
    //     <Route path="/blogs" element={<Blogs/>}/>
    //     <Route path="/contact" element={<ContactUs/>}/>
    //   </Routes>
    // </BrowserRouter>

    <DeBouncingCus/>
  )
}

export default App
