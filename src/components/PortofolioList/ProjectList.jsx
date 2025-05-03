import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'

function ProjectList() {
    const [project, setProject] = useState([])

    async function getAllProject(){
        const response = await axios.get('http://127.0.0.1:8000/api/projects')
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
                            <p>{projects.project_name}</p>
                            <p>{projects.description}</p>
                            <p>{projects.project_url}</p>
                        </li>
                    )
                })}
            </ul>
    </div>
    )
}
export default ProjectList
