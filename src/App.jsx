import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import PortofolioAdd from './pages/PortofolioAdd'
import PortfolioDetails from './pages/PortfolioDetails'
function App() {
    return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/portfolio/add' element={<PortofolioAdd/>} />
            <Route path='/portfolio/:id' element={<PortfolioDetails/>} />
        </Routes>
    </Router>
    )
}

export default App
