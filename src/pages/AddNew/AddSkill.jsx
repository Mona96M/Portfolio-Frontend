import React from 'react'
// import axios from 'axios'

import { useState} from 'react'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../../lib/api'
import SkillForm from '../../components/PortfolioForm/SkillForm'


function AddSkill() {
    const navigate = useNavigate()
    const [skillData, setSkillData] = useState ({
            name_of_skill:''
        })
    async function handleSubmit(event){
        event.preventDefault();
        const response = await authorizedRequest('post', 'skills/', skillData)
        console.log(response)
        navigate('/')
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Add a New Skill</h1>
        <SkillForm
            skillData={skillData}
            setSkillData={setSkillData}
        />
        <button type='submit'>Create</button>
        </form>
    </div>
    ) 
}

export default AddSkill
