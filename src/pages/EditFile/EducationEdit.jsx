import React from 'react'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'
import EducationForm from '../../components/PortfolioForm/EducationForm'

function EducationEdit() {
    const [educationData, setEducationData] = useState({
        university: '',
        major: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function getCurrentEducationData() {
        const response = await authorizedRequest('get', `educations/${id}/`)
        setEducationData(response.data)
    }

    useEffect(() => {
        getCurrentEducationData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `educations/${id}/`, educationData)
        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/educations${id}`)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Edit your Education</h2>
            <EducationForm
                educationData={educationData}
                setEducationData={setEducationData}
                handleSubmit={handleSubmit}
            />
            <button type="submit">Save</button>
            <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}
export default EducationEdit
