import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import PortofolioAdd from './pages/PortofolioAdd'
import PortfolioDetails from './pages/PortfolioDetails'
import NotFound from './pages/NotFound'
import EducationEdit from './pages/EditFile/EducationEdit'
import SkillEdit from './pages/EditFile/SkillEdit'
import ProjectEdit from './pages/EditFile/ProjectEdit'
import PersonalInfoEdit from './pages/EditFile/PersonalEdit'
import ConfirmDelete from './pages/ConfirmDelete'
import AddEducation from './pages/AddNew/AddEducation'
import AddSkill from './pages/AddNew/AddSkill'
import AddProject from './pages/AddNew/AddProject'
import SignUp from './pages/SignUp'
function App() {
    return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/portfolio/add' element={<PortofolioAdd/>} />
            <Route path='/portfolio/:id' element={<PortfolioDetails/>} />
            <Route path='/personalinfo/:id/edit' element={<PersonalInfoEdit/>} />
            <Route path='/education/:id/edit' element={<EducationEdit/>} />
            <Route path='/skill/:id/edit' element={<SkillEdit/>} />
            <Route path='/project/:id/edit' element={<ProjectEdit/>} />
            <Route path='/education/new' element={<AddEducation/>} />
            <Route path='/skill/new' element={<AddSkill/>} />
            <Route path='/project/new' element={<AddProject/>} />
            <Route path='/confirm-delete/:type/:id' element={<ConfirmDelete/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
    )
}

export default App
