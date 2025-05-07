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
        const response = await authorizedRequest('get', `/educations/${id}/`)
        setEducationData(response.data)
    }

    useEffect(() => {
        getCurrentEducationData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `/educations/${id}/`, educationData)
        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/educations/${id}`)
    }
    
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Edit your Education</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
            <EducationForm
                educationData={educationData}
                setEducationData={setEducationData}
                handleSubmit={handleSubmit}
            />
            <button type="submit" className="button custom-button">Save</button>
            <button type='button' onClick={handleDelete} className="button custom-button">Delete</button>
            </div></form>
        </div></div>
    )
}
export default EducationEdit
