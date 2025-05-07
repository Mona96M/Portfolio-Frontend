import React from 'react'

function ProjectForm(props) {
    return (
            <div>
                <div>
                <label htmlFor='project_name' className="label">Project Name</label>
                <div className="control">
                <input className="input"
                    id='project_name'
                    name='project_name'
                    required
                    value={props.projectData.project_name}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        project_name: event.target.value 
                    }))}
                />
                </div></div>
                <div>
                <label htmlFor='description' className="label">Description</label>
                <div className="control">
                <input className="input"
                    id='description'
                    name='description'
                    required
                    value={props.projectData.description}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        description: event.target.value 
                    }))}
                />
                </div></div>
                <div>
                <label htmlFor='project_url' className="label">URL of Project</label>
                <div className="control">
                <input className="input"
                    id='project_url'
                    name='project_url'
                    value={props.projectData.project_url}
                    onChange={(event) => props.setProjectData(prev => ({
                        ...prev, 
                        project_url: event.target.value 
                    }))}
                />
                </div></div>
            </div>
    )
}
export default ProjectForm