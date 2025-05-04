import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import EducationForm from '../../components/PortfolioForm/EducationForm'


function AddEducation() {
    const navigate = useNavigate()
    const [educationData, setEducationData] = useState ({
            university:'',
            major:''
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', 'educations/', educationData)
        console.log("Added:", response.data)
        
        navigate('/')
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Add a New Education</h1>
        <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
        />
        <button type='submit'>Create</button>
        </form>
    </div>
    ) 
}

export default AddEducation
