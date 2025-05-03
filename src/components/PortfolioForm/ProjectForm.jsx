import React from 'react'

function ProjectForm(props) {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='project_name'>Project Name</label>
                <input
                    id='project_name'
                    name='project_name'
                    required
                    value={props.projectData.project_name}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        project_name: event.target.value 
                    }))}
                />
                </div>
                <div>
                <label htmlFor='description'>Description</label>
                <input 
                    id='description'
                    name='description'
                    required
                    value={props.projectData.description}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        description: event.target.value 
                    }))}
                />
                </div>
                <div>
                <label htmlFor='project_url'>URL</label>
                <input 
                    id='project_url'
                    name='project_url'
                    required
                    value={props.projectData.project_url}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        project_url: event.target.value 
                    }))}
                />
                </div>
            </form>
        </div>
    )
}
export default ProjectForm