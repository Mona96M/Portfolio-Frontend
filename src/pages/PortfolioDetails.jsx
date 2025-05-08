import React from 'react'
import PersonalInfoDetails from '../components/AllDetails/PersonalInfoDetails'
import EducationDetails from '../components/AllDetails/EducationDetails'
import SkillDetails from '../components/AllDetails/SkillDetails'
import ProjectDetails from '../components/AllDetails/ProjectDetails'
import 'react-toastify'
function PortfolioDetails() {
    
    return (
        <div className="container" style={{ maxWidth: "750px", marginTop: "50px" }}>
        <div className="form-box">
        <PersonalInfoDetails/>
        <EducationDetails />
        <SkillDetails />
        <ProjectDetails />
    </div></div>
    )
}

export default PortfolioDetails