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
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
    return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/portfolio/add'element={<ProtectedRoute><PortofolioAdd /></ProtectedRoute>}/>
            <Route path='/portfolio/:personalId'element={<ProtectedRoute><PortfolioDetails /></ProtectedRoute>}/>
            <Route path='/personalinfo/:id/edit' element={<ProtectedRoute><PersonalInfoEdit/></ProtectedRoute>} />
            <Route path='/educations/:id/edit' element={<ProtectedRoute><EducationEdit/></ProtectedRoute>} />
            <Route path='/skills/:id/edit' element={<ProtectedRoute><SkillEdit/></ProtectedRoute>} />
            <Route path='/projects/:id/edit' element={<ProtectedRoute><ProjectEdit/></ProtectedRoute>} />
            <Route path='/education/new' element={<ProtectedRoute><AddEducation/></ProtectedRoute>} />
            <Route path='/skill/new' element={<ProtectedRoute><AddSkill/></ProtectedRoute>} />
            <Route path='/project/new' element={<ProtectedRoute><AddProject/></ProtectedRoute>} />
            <Route path='/confirm-delete/:type/:id' element={<ProtectedRoute><ConfirmDelete/></ProtectedRoute>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
    )
}

export default App
