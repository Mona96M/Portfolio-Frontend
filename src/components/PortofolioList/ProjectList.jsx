import React from 'react'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'
import { useState , useEffect} from 'react'

function ProjectList() {
    const [project, setProject] = useState([])

    async function getAllProject(){
        const response = await authorizedRequest('get', 'projects/')
        console.log(response)
        setProject(response.data)
    }
    useEffect(() => {
        getAllProject()
}, [])
    return (
    <div>
        <h2>Project list:</h2>
        <ul>
                {project.map(projects => {
                    return (
                        <li key={projects.id}>
                            <Link to={`/projects/${projects.id}`}>
                            <p>{projects.project_name}</p>
                            <p>{projects.description}</p>
                            <p>{projects.project_url}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
    </div>
    )
}
export default ProjectList
