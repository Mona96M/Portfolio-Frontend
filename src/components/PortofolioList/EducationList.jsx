import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'

function EducationList() {
    const [education, setEducation] = useState([])

    async function getAllEducation(){
        const response = await axios.get('http://127.0.0.1:8000/api/educations')
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
                            <p>{educations.university}</p>
                            <p>{educations.major}</p>
                        </li>
                    )
                })}
            </ul>
    </div>
    )
}
export default EducationList
