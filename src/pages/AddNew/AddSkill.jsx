import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import SkillForm from '../../components/PortfolioForm/SkillForm'


function AddSkill() {
    const userId = localStorage.getItem('user_id')
    const navigate = useNavigate()
    const [skillData, setSkillData] = useState ({
            name_of_skill:''
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', '/skills/', skillData)
        console.log(response)
        navigate(`/portfolio/${userId}`) 
    }
    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Add a New Skill</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
        <SkillForm
            skillData={skillData}
            setSkillData={setSkillData}
        />
        <button type='submit' className="button custom-button">Create</button>
        </div></form>
    </div></div>
    ) 
}

export default AddSkill
