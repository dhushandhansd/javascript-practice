import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
=======
import HomePage from './Portfolio/HomePage'
import Projects from './Portfolio/Projects'
>>>>>>> 5e5be3e1b17cf663fe689e6693db28ea350e4f8f


function App() {
  return (
<<<<<<< HEAD
    <h1>Vite App</h1>
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        {/* <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='/contactme' element={<contactMe/>}/> */}
      </Routes>
    </BrowserRouter>
>>>>>>> 5e5be3e1b17cf663fe689e6693db28ea350e4f8f
  )
}

export default App
