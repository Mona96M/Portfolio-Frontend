import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App

