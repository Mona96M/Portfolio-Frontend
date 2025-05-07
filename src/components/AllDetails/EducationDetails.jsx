import React from 'react'

import { useState , useEffect} from 'react'
import { Link } from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

function EducationDetails() {

    const [education, setEducation] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    
    async function getUserData() {
        
        
        try {
            const response = await authorizedRequest('get', '/educations/')
            console.log("Education Response Data:", response.data)
            setEducation(response.data)

        } catch (err) {
            console.log(err)
            setErrorMsg('Access denied: this skill entry does not belong to you.')
        }
    }

    useEffect(() => {
        getUserData()
    }, [])
    
    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!education) return <h4>Loading your Education details...</h4>

    return (
        <>
        <h3 className="title is-4 has-text-left">Education</h3>
        <ul>
            {education.map(educations => {
                return (
                    <li 
                    key={educations.id}><Link to={`/educations/${educations.id}/edit`}>
                    <p className="has-text-left">{educations.university}</p>
                    <p className="has-text-left">{educations.major}</p>
                    </Link><br/></li>
                    ) 
                })}
            </ul></>
    )
}

export default EducationDetails

