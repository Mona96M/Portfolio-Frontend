import React from 'react'
// import axios from 'axios'
import { useState , useEffect} from 'react'
import { Link } from 'react-router'
import { authorizedRequest } from '../../lib/api'

function EducationList() {
    const [education, setEducation] = useState([])

    async function getAllEducation(){
        const response = await authorizedRequest('get', 'educations/')
        console.log(response)
        setEducation(response.data)
    }
    useEffect(() => {
    getAllEducation()
}, [])
    return (
    <div>
        <h2>Education list:</h2>
        <ul>
                {education.map(educations => {
                    return (
                        <li key={educations.id}>
                            <Link to={`/educations/${educations.id}`}>
                            <p>{educations.university}</p>
                            <p>{educations.major}</p>
                            </Link>
                        </li>
                    ) 
                })}
            </ul>
    </div>
    )
}
export default EducationList
