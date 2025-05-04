import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import ProjectForm from '../../components/PortfolioForm/ProjectForm'


function AddProject() {
    const navigate = useNavigate()
    const [projectData, setProjectData] = useState({
            project_name: '',
            description: '',
            project_url: 'https://github.com/'
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', 'projects/', projectData)
        console.log(response)
        
        navigate('/')
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Add a New Project</h1>
        <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
        />
        <button type='submit'>Create</button>
        </form>
    </div>
    ) 
}

export default AddProject
