import React from 'react'

import { useState , useEffect} from 'react'
import {Link} from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

function ProjectDetails() {
    
    const [project, setProject] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    async function getSingleData() {
        try {
            const response = await authorizedRequest('get', '/projects/')
            setProject(response.data)
        } catch (err) {
            console.log(err)
            setErrorMsg('Access denied: this skill entry does not belong to you.')
        }
    }
    useEffect(() => {
        getSingleData()

    }, [])

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!project) return <h4>Loading your Project details...</h4>

    return (
        <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <h2 className="title is-4 has-text-left">Projects</h2>

            {project.map(projects => {
                return(
                <li key={projects.id}>
                <Link to={`/projects/${projects.id}/edit`}>
                <p className="has-text-left">{projects.project_name}</p>
                <p className="has-text-left">{projects.description}</p>
                <p className="has-text-left">{projects.project_url}</p><br/>
                </Link>
                </li>)
                })}
            </ul>
    </div>
    )
}
export default ProjectDetails

