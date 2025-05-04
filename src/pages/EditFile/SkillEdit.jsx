import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

import SkillForm from '../../components/PortfolioForm/SkillForm'

function SkillEdit() {
    const [skillData, setSkillData] = useState({
        name_of_skill: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function getCurrentSkillData() {
        const response = await axios.get(`http://127.0.0.1:8000/api/skills/${id}`)
        setSkillData(response.data)
    }

    useEffect(() => {
        getCurrentSkillData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.patch(
            `http://127.0.0.1:8000/api/skills/${id}/`,
            skillData
        )
        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/skills/${id}`)

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Edit your Skill</h2>
            <SkillForm
                skillData={skillData}
                setSkillData={setSkillData}
                handleSubmit={handleSubmit}
            />
            <button type="submit">Save</button>
            <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}
export default SkillEdit
