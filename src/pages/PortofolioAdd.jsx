import React from 'react'
import axios from 'axios'
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
        linkedin: 'https://www.linkedin.com/',
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
        project_url: 'https://github.com/'
    })
    async function handleSubmit(event){
        event.preventDefault();
        console.log("Handle Submit is running");
    // This is my first time handling multiple API endpoints in a single submission.
    // After researching I implemented this solution using axios and await
        try {
            await axios.post("http://127.0.0.1:8000/api/personalinfo/", personalData);
            await axios.post("http://127.0.0.1:8000/api/educations/", educationData);
            await axios.post("http://127.0.0.1:8000/api/skills/", skillData);
            await axios.post("http://127.0.0.1:8000/api/projects/", projectData);
    
            console.log("All data submitted successfully!");
            setPersonalData({ 
                full_name: '', 
                phone: '', 
                linkedin: '', 
                bio: '' 
            });
            setEducationData({ 
                university: '',
                major: '' 
            });
            setSkillData({ 
                name_of_skill: '' 
            });
            setProjectData({ 
                project_name: '', 
                description: '', 
                project_url: '' 
            });
        } catch (error) {
            console.log("Error during submission:", error.response?.data || error.message);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
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
        <button type='submit'>Create</button>
        </form>
    )
}

export default PortofolioAdd
