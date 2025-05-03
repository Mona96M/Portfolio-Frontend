import React from 'react'
import PersonalInfoForm from '../components/PortfolioForm/PersonalInfoForm'
import { useState } from 'react'
import EducationForm from '../components/PortfolioForm/EducationForm'
import SkillForm from '../components/PortfolioForm/SkillForm'
import ProjectForm from '../components/PortfolioForm/ProjectForm'

function PortofolioAdd() {
    //used a single object for form state 
    //i used this reference https://react.dev/learn/updating-objects-in-state
    const [personalData, setPersonalData] = useState({
        full_name: '',
        phone: '',
        linkedin: '',
        bio: ''
    })
    const [educationData, setEducationData] = useState ({
        university:'',
        major:''
    })
    const [skillData, setSkillData] = useState ({
        name_of_skill:''
    })
    const [projectData, setProjectData] = useState({
        project_name: '',
        description: '',
        project_url: ''
    })
    return (
    <div>
        <h1>Fill out the form</h1>
        <PersonalInfoForm
            personalData={personalData}
            setPersonalData={setPersonalData}
        />
        <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
        />
        <SkillForm
            skillData={skillData}
            setSkillData={setSkillData}
        />
        <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
        />
    </div>
    )
}

export default PortofolioAdd
