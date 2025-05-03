import React from 'react'
import PersonalInfoDetails from '../components/AllDetails/PersonalInfoDetails'
import EducationDetails from '../components/AllDetails/EducationDetails'
import SkillDetails from '../components/AllDetails/SkillDetails'
import ProjectDetails from '../components/AllDetails/ProjectDetails'

function PortfolioDetails() {
    return (
    <div>
        <PersonalInfoDetails/>
        <EducationDetails/>
        <SkillDetails/>
        <ProjectDetails/>
    </div>
    )
}

export default PortfolioDetails
