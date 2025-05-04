import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

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
        const response = await axios.get(`http://127.0.0.1:8000/api/personalinfo/${id}`)
        setPersonalData(response.data)
    }

    useEffect(() => {
        getCurrentPersonalData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.patch(
            `http://127.0.0.1:8000/api/personalinfo/${id}/`,
            personalData
        )
        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/personalinfo/${id}`)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Edit your Personal</h2>
            <PersonalInfoForm
                personalData={personalData}
                setPersonalData={setPersonalData}
                handleSubmit={handleSubmit}
            />
            <button type="submit">Save</button>
            <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default PersonalInfoEdit