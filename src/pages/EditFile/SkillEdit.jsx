import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'
import SkillForm from '../../components/PortfolioForm/SkillForm'

function SkillEdit() {
    const [skillData, setSkillData] = useState({
        name_of_skill: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    async function getCurrentSkillData() {
        const response = await authorizedRequest('get', `/skills/${id}/`)
        setSkillData(response.data)
    }

    useEffect(() => {
        getCurrentSkillData()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await authorizedRequest('patch', `/skills/${id}/`, skillData)

        navigate(`/portfolio/${id}`)
    }
    function handleDelete() {
        navigate(`/confirm-delete/skills/${id}`)

    }
    
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Edit your Skill</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
            <SkillForm
                skillData={skillData}
                setSkillData={setSkillData}
                handleSubmit={handleSubmit}
            />
            <button type="submit"  className="button custom-button">Save</button>
            <button type='button' onClick={handleDelete}  className="button custom-button">Delete</button>
        </div> </form>
        </div></div>
    )
}
export default SkillEdit
