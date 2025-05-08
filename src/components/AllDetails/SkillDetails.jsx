import React from 'react'

import { useState , useEffect} from 'react'
import {Link} from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

function SkillDetails() {
    const [skills, setSkill] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    
    async function getUserData() {
        try {
            const response = await authorizedRequest('get', '/skills/')
            setSkill(response.data)
        } catch (err) {
            console.log(err)
            setErrorMsg('Access denied: this skill entry does not belong to you.')
        }
    }
    useEffect(() => {
        getUserData()
    }, [])

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!skills) return <h4>Loading your Skill details...</h4>

    return (
        <div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <h2 className="title is-4 has-text-left">Skills</h2>

            {skills.map(skill => {
                return(
                    <li key={skill.id}>
                    <Link to={`/skills/${skill.id}/edit`}>
                    <p className="has-text-left">{skill.name_of_skill}</p>
                    </Link><br/>
                        </li>)
                })}
            </ul>
    </div>
    )
}
export default SkillDetails

