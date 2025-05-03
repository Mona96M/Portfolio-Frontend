import React from 'react'
import axios from 'axios'

function EducationList() {
    async function getAllEducation(){
        const response = await axios.get('http://127.0.0.1:8000/api/educations')
        console.log(response)
    }
    getAllEducation()
    return (
    <div>
        <h2>Education list:</h2>
    </div>
    )
}
export default EducationList
