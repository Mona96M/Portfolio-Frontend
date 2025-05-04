import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import PortofolioAdd from './pages/PortofolioAdd'
import PortfolioDetails from './pages/PortfolioDetails'
import NotFound from './pages/NotFound'
import PersonalEdit from './pages/PersonalEdit'
import EducationEdit from './pages/EducationEdit'
import SkillEdit from './pages/SkillEdit'
import ProjectEdit from './pages/ProjectEdit'

function App() {
    return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/portfolio/add' element={<PortofolioAdd/>} />
            <Route path='/portfolio/:id' element={<PortfolioDetails/>} />
            <Route path='/personalinfo/:id/edit' element={<PersonalEdit/>} />
            <Route path='/education/:id/edit' element={<EducationEdit/>} />
            <Route path='/skill/:id/edit' element={<SkillEdit/>} />
            <Route path='/project/:id/edit' element={<ProjectEdit/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
    )
}

export default App
