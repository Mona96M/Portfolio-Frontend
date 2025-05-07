import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import EducationForm from '../../components/PortfolioForm/EducationForm'


function AddEducation() {
    const userId = localStorage.getItem('user_id')
    const navigate = useNavigate()
    const [educationData, setEducationData] = useState ({
            university:'',
            major:''
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', '/educations/', educationData)
        console.log("Added:", response.data)
        navigate(`/portfolio/${userId}`) 
    }
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Add a New Education</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
        <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
        />
        <button type='submit' className="button custom-button">Create</button>
        </div> </form>
    </div></div>
    ) 
}

export default AddEducation
