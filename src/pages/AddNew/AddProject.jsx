import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import ProjectForm from '../../components/PortfolioForm/ProjectForm'


function AddProject() {
    const userId = localStorage.getItem('user_id')
    const navigate = useNavigate()
    const [projectData, setProjectData] = useState({
            project_name: '',
            description: '',
            project_url: ''
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', '/projects/', projectData)
        console.log(response)
        
        navigate(`/portfolio/${userId}`) 
    }
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Add a New Project</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
        <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
        />
        <button type='submit' className="button custom-button">Create</button>
        </div> </form>
    </div></div>
    ) 
}

export default AddProject
