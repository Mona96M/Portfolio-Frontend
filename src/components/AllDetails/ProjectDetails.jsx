import React from 'react'

import { useState , useEffect} from 'react'
import { useParams , useNavigate, Link} from 'react-router'

import axios from 'axios'

function ProjectDetails() {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    async function getSingleData() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
            setProject(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Somethig went Wrong!')
            }
        }
    }
    useEffect(() => {
        getSingleData()
        console.log(id)
    }, [])

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!project) return <h4>Loading your Project details...</h4>

    return (
        <div>
            <h2>Projects</h2>
            <Link to={`/project/${project.id}/edit`}>
            <h4>{project.project_name}</h4></Link>
            <h4>{project.description}</h4>
            <h4>{project.project_url}</h4>
        </div>
    )
}
export default ProjectDetails

