import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './NavBar'
import Home from './components/Home'
import Mood from './components/Mood'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="mood" element={<Mood/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
