import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'
import ProjectForm from '../../components/PortfolioForm/ProjectForm'

function ProjectEdit() {
    const [projectData, setProjectData] = useState({
        project_name: '',
        description: '',
        project_url: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function getCurrentProjectData() {
        const response = await authorizedRequest('get', `/projects/${id}/`)
        setProjectData(response.data)
    }

    useEffect(() => {
        getCurrentProjectData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `/projects/${id}/`, projectData)

        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/projects/${id}`)
    }
    
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Edit your Project</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
            <ProjectForm
                projectData={projectData}
                setProjectData={setProjectData}
                handleSubmit={handleSubmit}
            />
            <button type="submit" className="button custom-button">Save</button>
            <button type='button' onClick={handleDelete} className="button custom-button">Delete</button>
        </div>  </form>
        </div></div>
    )
}
export default ProjectEdit
