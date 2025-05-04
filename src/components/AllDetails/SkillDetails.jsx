import React from 'react'

import { useState , useEffect} from 'react'
import { useParams ,useNavigate, Link} from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../lib/api'
function SkillDetails() {
    const { id } = useParams()
    const [skill, setSkill] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    async function getSingleData() {
        try {
            const response = await authorizedRequest('get', `/skills/${id}`)
            setSkill(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
            } else {
                setErrorMsg('Somethig went Wrong!')
            }
        }
    }
    useEffect(() => {
        getSingleData()
        console.log(id)
    }, [])

    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!skill) return <h4>Loading your Skill details...</h4>

    return (
        <div>
            
            <h2>Skills</h2>
            <Link to={`/skill/${skill.id}/edit`}>
            <h4>{skill.name_of_skill}</h4></Link>
        </div>
    )
}
export default SkillDetails

