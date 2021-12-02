import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Portfolio/About'
import HomePage from './Portfolio/HomePage'
import Projects from './Portfolio/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/aboutme' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
