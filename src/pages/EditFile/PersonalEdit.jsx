import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'
import PersonalInfoForm from '../../components/PortfolioForm/PersonalInfoForm'

function PersonalInfoEdit() {
    const [personalData, setPersonalData] = useState({
        full_name: '',
        phone: '',
        linkedin: '',
        bio: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function getCurrentPersonalData() {
        const response = await authorizedRequest('get', `/personalinfo/${id}/`)
        setPersonalData(response.data)
    }

    useEffect(() => {
        getCurrentPersonalData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `/personalinfo/${id}/`, personalData)
        
        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/personalinfo/${id}`)
    }
    
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Edit your Information</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
            <PersonalInfoForm
                personalData={personalData}
                setPersonalData={setPersonalData}
                handleSubmit={handleSubmit}
            />
            <button type="submit" className="button custom-button">Save</button>
        </div>  </form>
        </div></div>
    )
}

export default PersonalInfoEdit