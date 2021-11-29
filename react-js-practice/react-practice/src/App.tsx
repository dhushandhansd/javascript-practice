import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Portfolio/HomePage'
import Projects from './Portfolio/Projects'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        {/* <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/contactme' element={<contactMe/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
